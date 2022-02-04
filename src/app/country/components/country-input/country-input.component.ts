import { Component, Output,EventEmitter, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [
  ]
})
export class CountryInputComponent implements OnInit{
  

  @Output() onEnter    : EventEmitter<string> = new EventEmitter();
  @Output() onDebounce : EventEmitter<string> = new EventEmitter();
 
  @Input() placeholder: string = "";
  debouncer : Subject<string>= new Subject();
  key: string =""

  ngOnInit()  {
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe(val =>{
      console.log('deboncer:',val);
      this.onDebounce.emit( val );
    });
  }

 search(){
  this.onEnter.emit(this.key);
 }
 keyPress(){
   this.debouncer.next(this.key);

 }

}
