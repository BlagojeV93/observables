import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Observer, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor() { }

  obsBrojevi : Subscription;
  obsPaketici: Subscription;

  ngOnInit() {
    const MyNumbers = Observable.interval(1000).map(
      (data: number) => {
       return data - 0.5;
      }
    );

     this.obsBrojevi = MyNumbers.subscribe(
      (number: number) => {
        console.log(number);
      }
    )

    const MyObservable = Observable.create( (observer: Observer<String>) => {
        setTimeout(() => {
          observer.next('Prvi paketic');
        }, 2000);
        setTimeout(() => {
          observer.next('Drugi paketic');
        }, 4000);
        setTimeout(() => {
          // observer.error('Prc');
          observer.complete();
        }, 5000);
        setTimeout(() => {
          observer.next('3 paketic');
        }, 6000);
    } );
   this.obsPaketici = MyObservable.subscribe(
      (data: String) => {
        console.log(data);
      },
      (error: String) => {
        console.log(error);
      },
      () => {
        console.log('Gotovo');
      }
      
    );
  }

  ngOnDestroy(){
    this.obsBrojevi.unsubscribe();
    this.obsPaketici.unsubscribe();
  }

}
