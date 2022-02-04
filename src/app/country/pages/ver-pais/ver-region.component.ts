import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../services/search.service';
import {switchMap,tap} from 'rxjs/operators'
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-ver-region',
  templateUrl: './ver-region.component.html',
  styles: [
  ]
})
export class VerRegionComponent implements OnInit {

  country! : Country[];

  constructor(
    private activatedRoute : ActivatedRoute, //to subscribe to any change in the url
    private searchservice : SearchService) 
    { } 

  ngOnInit(): void {
    //This can by done as well with rxjs but they both works
    // this.activatedRoute.params
    // .subscribe( ({id}) =>{
    //   console.log(id);

    //   this.searchservice.searchCountryByAlpha(id)
    //   .subscribe( country =>{
    //     console.log(country);
    //   });
    // });

    //Version with rxjs
    this.activatedRoute.params
    .pipe(
      //switchMap recibe un observable y retorna un observable
      switchMap(  (param) => this.searchservice.searchCountryByAlpha(param['id'])),
      tap(console.log)
    )
    .subscribe( country  => this.country = country );
  }

}
