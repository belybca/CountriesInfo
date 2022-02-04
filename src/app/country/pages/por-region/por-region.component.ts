import { Component} from '@angular/core';

import { SearchService } from '../../services/search.service';
import { Country } from '../../interfaces/country.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
    button{
    margin-right:5px;
    }
    `
  ]
})
export class PorRegionComponent {

  
  key: string = ''
  errorFlag : boolean = false;
  countries : Country[] = [];
  // regions: string[] = ['EU','EFTA','CARICOM','PA','AU','USAN','EEU','ASEAN','CAIS','CEFTA','NAFTA','SAARC'];
  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activeRegion: string = '';

  constructor(private searchService:SearchService) { }
  
  getCssClass( region : string): string{
    return (region===this.activeRegion)? 'btn btn-primary':'btn btn-outline-primay';
  }

  activateRegion(region: string ){

    if(region===this.activeRegion){return}
    this.activeRegion = region;
    this.searchService.searchRegion(this.activeRegion)
    .subscribe( (region )=>{
      
      this.countries=region;
      console.log(region);
      
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
