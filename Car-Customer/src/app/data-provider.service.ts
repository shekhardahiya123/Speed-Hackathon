import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataProviderService {
  constructor() {}
  userData = new Subject<any>(); //Decalring new RxJs Subject

  sendUserData(data: string) {
    console.log('called');
    this.userData.next(data);
  }
}
