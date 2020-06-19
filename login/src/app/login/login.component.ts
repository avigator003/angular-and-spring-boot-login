import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;
  invalid=false;
  term="invalid login";
  users:user;
  constructor(private service:LoginService,private route:Router) { }

  ngOnInit() {
  
  }
doLogin()
{
this.service.login(this.username,this.password).subscribe(data =>{
  if(data)
  {
this.users=data;
this.route.navigate(['/home']);
  }
  else{
this.invalid=!this.invalid;
    this.route.navigate(['login',this.term]);
  }
  });


}
}
