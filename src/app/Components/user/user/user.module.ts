import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';

const routes:Routes= [
{path:'login',component: LoginComponent},
{path:'profile',component: ProfileComponent},
{path:'signup',component: SignupComponent}
]
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes),FormsModule],
  declarations: [ProfileComponent, LoginComponent, SignupComponent],
})
export class UserModule {}
