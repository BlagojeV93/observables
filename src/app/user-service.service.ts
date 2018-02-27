import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class UserServiceService {

  UserActivated = new Subject();

  constructor() { }

}
