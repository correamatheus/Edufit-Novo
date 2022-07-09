import { Component, OnInit } from '@angular/core';
import {
  faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-licoes',
  templateUrl: './licoes.component.html',
  styleUrls: ['./licoes.component.css']
})
export class LicoesComponent implements OnInit {

  faMagnifyingGlass=faMagnifyingGlass;
  numeroExercicio : number = 1;
  constructor() { }

  ngOnInit(): void {
  }


  voltarExercicio(){
    if(this.numeroExercicio <= 1){
      this.numeroExercicio = 1;
    }else{
      this.numeroExercicio--;
    }
}

avancarExercicio(){
  if(this.numeroExercicio == 4 ){
    this.numeroExercicio = 4;
  }else{
    this.numeroExercicio++;
  }

}


}
