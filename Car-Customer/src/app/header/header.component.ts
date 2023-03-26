import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataProviderService } from '../data-provider.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  loggedInUser;

  constructor(private api: DataProviderService) {
    this.api.userData.subscribe((receiveddata) => {
      console.log(receiveddata);
      this.loggedInUser = receiveddata;
      // this.loggedInUser = receiveddata;
    });
  }
  ngOnInit(): void {}
}
