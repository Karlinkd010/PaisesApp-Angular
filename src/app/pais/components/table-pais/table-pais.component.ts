import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-table-pais',
  templateUrl: './table-pais.component.html',
})
export class TablePaisComponent  {

  @Input() paises:Country[]=[];

}
