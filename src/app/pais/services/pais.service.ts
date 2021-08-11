import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  apiUrl:string ='https://restcountries.eu/rest/v2'

  constructor(private http:HttpClient) { }

  Buscar(termino:string)
    :Observable<Country[]>{

    const url=`${this.apiUrl}/name/${termino}`;

    return this.http.get<Country[]>(url);
  }

  BuscarCapital(termino:string)
    :Observable<Country[]>{
    const url=`${this.apiUrl}/capital/${termino}`;

    return this.http.get<Country[]>(url);
  }

  verPaisId(id:string)
    :Observable<Country>{
      const url=`${this.apiUrl}/alpha/${id}`;
      return this.http.get<Country>(url);
  }
  BuscarporRegion(region:string)
  :Observable<Country[]>{
    const url=`${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url);
}
}

