import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ActorsComponent } from './actors/actors.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthService } from './auth.service';
import { AuthGuardGuard } from './auth-guard.guard';
import { GamedetailsComponent } from './gamedetails/gamedetails.component';

const routes: Routes = [

  {path:'' , redirectTo:'home',pathMatch:'full'},
  {path:'home' ,canActivate:[AuthGuardGuard], component:HomeComponent},
  {path:'movies' ,canActivate:[AuthGuardGuard], component:MoviesComponent},
  {path:'tv' ,canActivate:[AuthGuardGuard], component:TvShowsComponent},
  {path:'details/:id/:mediaType' ,canActivate:[AuthGuardGuard], component:GamedetailsComponent},
  {path:'actors',canActivate:[AuthGuardGuard] , component:ActorsComponent},
  {path:'register' , component:RegisterComponent},
  {path:'login' , component:LoginComponent},
  {path:'**' , component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
