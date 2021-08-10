import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {
  
  termino:string='';
  @Output() onEnter:EventEmitter<string>= new EventEmitter();
  @Output() onDebounce:EventEmitter<string>= new EventEmitter();
  debounce:Subject<string>=new Subject();

  ngOnInit(){
    this.onDebounce
    .pipe(debounceTime(300))
    .subscribe(valor=>{
      this.onDebounce.emit(valor);
    })

  }

  Buscar(){
    this.onEnter.emit(this.termino);
  }

  Precionada(){
    this.onDebounce.next(this.termino);
  }




}
