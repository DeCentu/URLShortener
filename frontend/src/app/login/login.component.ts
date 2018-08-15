import { Component, OnInit } from '@angular/core';
import { Service } from '../app.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ Service ]
})
export class LoginComponent implements OnInit {

	check_username: boolean;
	check_password: boolean;
	check_user: boolean;

	username = '';
	password = '';

  redirect_val: void;

  constructor(private service: Service) { 
  }

  login() {
  	this.service.login_check(this.username, this.password).subscribe( data =>
  	{
  		this.check_username = data['check_username'],
  		this.check_password = data['check_password'],
      this.redirect_val = this.redirect(data['check_user'])
   	});

    this.service.login(this.username, this.password).subscribe( data =>
    {
      this.check_username = data['check_username'],
      this.check_password = data['check_password'],
      this.check_user = data['check_user']
    });
  }

  redirect(check: boolean) {
    if( check ){
      window.location.replace(this.service.url);
    }
  }

  ngOnInit() {
  }

}
