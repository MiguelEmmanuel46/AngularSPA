import { Component, OnInit } from '@angular/core';
import {User} from '../../models/users';
import {UserService} from '../../services/user.service';
import { global } from '../../services/global';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
  providers: [UserService]
})
export class UserEditComponent implements OnInit {
public page_title;
public user: User;
public identity;
public token;
public status;
public url;


public froala_options: Object = {
    charCounterCount: true,
    toolbarButtons: ['bold', 'italic', 'underline', 'paragraphFormat','alert'],
    toolbarButtonsXS: ['bold', 'italic', 'underline', 'paragraphFormat','alert'],
    toolbarButtonsSM: ['bold', 'italic', 'underline', 'paragraphFormat','alert'],
    toolbarButtonsMD: ['bold', 'italic', 'underline', 'paragraphFormat','alert'],
  };

  public afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg, .png, .gif, .jpeg",
    maxSize: "50",
    uploadAPI:  { url:global.url+'user/upload', headers: { "Authorization" : this._userService.getToken() }
    },
    theme: "attachPin",
    hideProgressBar: false,
    hideResetBtn: true,
    hideSelectBtn: true,
    attachPinText: "Sube tu foto de usuario",
    replaceTexts: {
      selectFileBtn: 'Selecciona archivo',
      resetBtn: 'Reset',
      uploadBtn: 'Subir',
      dragNDropBox: 'Arrastra aqui tu archivo',
      attachPinBtn: 'Selecciona tu archivo',
      afterUploadMsg_success: '¡Archivo subido satisfactoriamente!',
      afterUploadMsg_error: '¡Fallo al subir archivo!'
    }
  };

  constructor(
  	private _userService: UserService) { 
  	this.page_title = 'Ajustes de usuario';
    this.user = new User(1, '', '', '', '', '', '', '');
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = global.url;
    //Rellenar objeto usuario
    this.user = new User(
    	this.identity.sub,
    	this.identity.name,
    	this.identity.surname,
    	this.identity.role,
    	this.identity.email,
    	'',
    	this.identity.description,
    	this.identity.image
    );


  }

  ngOnInit(): void {
  }

  onSubmit(form)
  {
  	this._userService.update(this.token, this.user).subscribe(
  		response => {
  			if (response && response.status) {
  				console.log(response);
  				this.status = 'success';
  				//actualizar usuario en sesíon
  				if (response.changes.name) {
  					this.user.name = response.changes.name;
  				}
  				if (response.changes.surname) {
  					this.user.surname = response.changes.surname;
  				}
  				if (response.changes.email) {
  					this.user.email = response.changes.email;
  				}
  				if (response.changes.description) {
  					this.user.description = response.changes.description;
  				}
  				if (response.changes.image) {
  					this.user.image = response.changes.image;
  				}
  				

  				this.identity = this.user;
  				localStorage.setItem('identity', JSON.stringify(this.identity));
  			}else{
  				this.status = 'error';
  			}
  		},error=>{
  			this.status = 'error';
  			console.log(<any>error);
  		}
  	);
  }

  avatarUpload(datos){
    let data = JSON.parse(datos.response);
    this.user.image = data.image;
  }

}
