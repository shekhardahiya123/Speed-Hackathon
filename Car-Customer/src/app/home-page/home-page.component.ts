import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewTripDialogComponent } from '../new-trip-dialog/new-trip-dialog.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  city: string;
  name: string;

  constructor(public dialog: MatDialog) {}
  ngOnInit() {}

  openDialog(): void {
    const dialogRef = this.dialog.open(NewTripDialogComponent, {
      data: {
        name: this.name,
        city: this.city,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.city = result;
    });
  }
}
