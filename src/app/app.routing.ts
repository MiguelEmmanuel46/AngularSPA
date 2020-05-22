//Imports necesarios
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
//importar componentes
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';

//definir rutas
const appRoutes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'inicio', component: HomeComponent},
	{path: 'login', component:LoginComponent},
	{path: 'logout/:sure', component:LoginComponent},
	{path: 'register', component:RegisterComponent},
	{path: '**', component:ErrorComponent}
];
//exportar configuracion
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);