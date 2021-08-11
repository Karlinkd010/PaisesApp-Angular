import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent implements OnInit {

  region:string[]=['africa', 'americas', 'asia', 'europe', 'oceania'];

  actRegion:string='';
  paises:Country[]=[];

  constructor(
    private serPais:PaisService
    ) { }

  ngOnInit(): void {
  }
  getClass(region:string):string{
    return (region===this.actRegion) ? 'btn btn-primary':'btn-outline-primary';
  }

  activaRegion(region:string){
    if(region===this.actRegion){return;}
    this.actRegion=region;
    this.paises=[];
    this.serPais.BuscarporRegion(this.actRegion)
      .subscribe(pais=>this.paises=pais);
  }

}
