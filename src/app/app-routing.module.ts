import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { PruebaComponent } from './prueba/prueba.component';


const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full'},
  { path: 'not-found', component: NotfoundComponent },
  { path: 'prueba',  component: PruebaComponent},
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule', canActivate: [AuthGuard]},
  { path: 'sede', loadChildren: './sede/sede.module#SedeModule', canActivate: [AuthGuard]},
  { path: 'usuario', loadChildren: './usuario/usuario.module#UsuarioModule', canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
