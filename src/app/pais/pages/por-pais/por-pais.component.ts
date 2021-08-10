import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent  {
  termino :string='';
  hayError:boolean=false;
  paises  :Country[]=[];

  constructor( private paisService:PaisService){}

  Buscar(termino:string){
    this.hayError=false;
    this.termino=termino;

    this.paisService.Buscar(this.termino)
      .subscribe(paises=>{
          console.log(paises);
          this.paises=paises;
      },(err)=>{
        this.hayError=true;
        this.paises=[];
      });
  }

  Sugerencias(sugerencia:string){
    this.hayError=false;
    

  }



}
