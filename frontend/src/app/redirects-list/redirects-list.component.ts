import { Component, OnInit } from '@angular/core';
import { Service } from '../app.services';

@Component({
  selector: 'app-redirects-list',
  templateUrl: './redirects-list.component.html',
  styleUrls: ['./redirects-list.component.css'],
  providers: [ Service ]
})
export class RedirectsListComponent implements OnInit {

	list;

  constructor(private service: Service) { }

  ngOnInit() {
  	this.service.get_urls().subscribe(data => this.list = data['list']);
	  	
  }

}
