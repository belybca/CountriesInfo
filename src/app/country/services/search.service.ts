import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private apiUrl: string = 'https://restcountries.com/v3.1'
  
  get httpParams(){
    return new HttpParams().set('fields','name,capital,population,flags,altSpellings');
  }

  constructor(private http:HttpClient) { }

  searchCountry(key : string): Observable<Country[]>{
    const url = `${this.apiUrl}/name/${key}`;

    return this.http.get<Country[]>(url,{params:this.httpParams});
  }
  searchCapital(key : string): Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${key}`;

    return this.http.get<Country[]>(url, {params:this.httpParams});
  }
  searchRegion(key : string): Observable<Country[]>{
    
    const url = `${this.apiUrl}/region/${key}`;

    return this.http.get<Country[]>(url,{params:this.httpParams});
  }
  searchCountryByAlpha(key : string): Observable<Country>{
    const url = `${this.apiUrl}/alpha/${key}`;

    return this.http.get<Country>(url);
  }
 
}
