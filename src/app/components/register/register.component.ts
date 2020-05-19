import { Component, OnInit } from '@angular/core';
import { User } from '../../models/users';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
public page_title: string;
public user: User;
  constructor() 
  {
  	this.page_title = "Registro";
    this.user = new User(1, '', '', '', '', '', '', '');
   }

  ngOnInit(): void {
  	console.log("componente registro lanzado");
  }

  onSubmit(form)
  {
    
  }

}
