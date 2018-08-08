import { Component, OnInit } from '@angular/core';
import { Service } from './form.services';
import { Urls } from './urls';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [ Service ]
})
export class FormComponent implements OnInit {
  urls: Urls[];

	url = "https://example.com/";
	value = this.url;

  done: boolean = false;


  answer = {
    'general_url': '',
    'short_url': ''
  };

	onKey(event: any) {
		this.value = this.url + event.target.value;
	}

  constructor(private service: Service) { 
  }

  getUrls() {
    this.service.get()
    .subscribe((data: Urls) => this.answer = {
        general_url: data['general_url'],
        short_url:  data['short_url']
    });
  }

  ngOnInit() {
  }

}