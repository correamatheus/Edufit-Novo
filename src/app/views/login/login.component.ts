import { Component, OnInit } from '@angular/core';

import { faKey,faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  

  //FONT AWSOME

  faUser = faUser;
  faKey = faKey;

  constructor() { }

  ngOnInit(): void {
  }

  

}
