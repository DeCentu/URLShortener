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

  constructor(private service: Service) { 
  }

  onKeyUp() {
  	this.service.check_login(this.username, this.password).subscribe( data =>
  	{
  		this.check_username = data['check_username'],
  		this.check_password = data['check_password'],
  		this.check_user = data['check_user']
   	});
  }

  ngOnInit() {
  }

}
