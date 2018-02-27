import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserServiceService } from './user-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  user1Activated = false;
  user2Activated = false;
  Roda: Subscription;

  constructor(private usersService: UserServiceService) {}

  ngOnInit(){
    this.Roda = this.usersService.UserActivated.subscribe(
      (id: number) => {
        if (id === 1) {
          this.user1Activated = true;
        } else if (id === 2) {
          this.user2Activated = true;
        }
      }
    );
  }

  ngOnDestroy(){
    this.Roda.unsubscribe();
  }
}
