import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  userloggedin: boolean = false;
  constructor(private userServ: UserService) { }

  ngOnInit() {
    this.userloggedin = this.userServ.isLogged
  }
  loginFun(){

    this.userServ.login('admin@gmail.com','123456')
    this.userloggedin = this.userServ.isLogged
  }
  logoutFun(){
    this.userServ.logout()
    this.userloggedin = this.userServ.isLogged
  }
  
}
