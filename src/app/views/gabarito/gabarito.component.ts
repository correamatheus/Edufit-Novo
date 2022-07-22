import { Component, OnInit } from '@angular/core';
import {  faSquareCheck, faThumbsUp, faVideo, faFloppyDisk } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-gabarito',
  templateUrl: './gabarito.component.html',
  styleUrls: ['./gabarito.component.css']
})
export class GabaritoComponent implements OnInit {

  faSquareCheck = faSquareCheck
  faThumbsUp = faThumbsUp
  faVideo = faVideo
  faFloppyDisk = faFloppyDisk

  constructor() { }

  ngOnInit(): void {
  }

}
