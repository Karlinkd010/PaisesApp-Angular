import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {
  pais!:Country;

  constructor(
    private actRoute:ActivatedRoute,
    private serPais:PaisService
    ) { }

  ngOnInit(): void {
    this.actRoute.params
    .pipe(
      switchMap(({id})=>this.serPais.verPaisId(id)),
      tap(console.log)
    )
    .subscribe(pais=>this.pais=pais)
    // this.actRoute.params
    //   .subscribe(({id})=>{
    //     console.log(id);
    //     this.serPais.verPaisId(id)
    //       .subscribe(pais=>{
    //         console.log(pais);
    //       });
    // });
  }

}
