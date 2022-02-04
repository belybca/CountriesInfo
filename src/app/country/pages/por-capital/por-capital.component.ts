import { Component} from '@angular/core';
import { SearchService } from '../../services/search.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent{

  key: string = ''
  errorFlag : boolean = false;
  countries: Country[] = [];
  constructor(private searchService:SearchService) { }

  search( key : string){
    this.errorFlag = false;
    this.key= key;
    this.searchService.searchCapital(this.key)
    .subscribe( (capital )=>{
      
      this.countries=capital;
      console.log(capital);
      
    },(err)=>{
      this.errorFlag = true;
      this.countries = [];
    });
  }
  suggestions ( key:string ){
    this.errorFlag= false;
    //TODO: Crear sugerencias
    
  }

}
