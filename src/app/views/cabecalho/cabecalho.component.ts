import { Component, OnInit } from '@angular/core';
import { faArrowRightFromBracket,faUserGear, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {
  faArrowRightFromBracket = faArrowRightFromBracket;
  faUserGear = faUserGear;
  faUser=faUser;
  constructor() { }

  ngOnInit(): void {
  }

}
