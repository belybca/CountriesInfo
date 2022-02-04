import { Component } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li{
      cursor:pointer;
    }
    `
  ]
})
export class PorPaisComponent {

  key: string = ''
  errorFlag : boolean = false;
  countries : Country[] = [];
  countriesSugestion : Country[] = [];
  suggestionFlag : boolean =false;
  constructor(private searchService:SearchService) { }
  
  
  search( key : string){
    this.errorFlag = false;
    this.key= key;
    this.searchService.searchCountry(this.key)
    .subscribe( (country )=>{
      
      this.countries=country;
      console.log(country);
      
    },(err)=>{
      this.errorFlag = true;
      this.countries = [];
    });
  }
  suggestions ( key:string ){
    this.errorFlag= false;
    this.suggestionFlag=true;
    this.key = key;
    //TODO: Crear sugerencias
    this.searchService.searchCountry( key )
    .subscribe( countries => this.countriesSugestion = countries.splice(0,5),
    (err) => this.countriesSugestion=[]
    );
    
  }
  searchSuggested(key:string){
      this.search(key);
  }
  

}
