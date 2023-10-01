import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Iuser } from 'src/app/Models/iuser';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user: Iuser = {} as Iuser
  constructor(private userServ: UserService,private router:Router){
    this.user = {
      firstName:"hossam",lastName:"moh",email:"hossam@gmail.com"
    }
  }

  signupUser(){
    console.log('form submission');
    
    this.userServ.signup(this.user).subscribe({
      next:(data)=>{
        console.log(data);
        
        this.router.navigate(['/products'])
      },error:(err)=>{console.log(err.message);
      }
    })
  }
}
