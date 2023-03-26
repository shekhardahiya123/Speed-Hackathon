import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export interface DialogData {
  city: string;
  name: string;
}

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
  selector: 'app-new-trip-dialog',
  templateUrl: './new-trip-dialog.component.html',
  styleUrls: ['./new-trip-dialog.component.css'],
})
export class NewTripDialogComponent implements OnInit {
  myControl = new FormControl('');
  options: string[] = ['Dubai', 'Goa', 'Montreal', 'New York', 'Paris'];
  filteredOptions: Observable<string[]>;
  campaignOne = new FormGroup({
    start: new FormControl(new Date(year, month, 27)),
    end: new FormControl(new Date(year, month, 29)),
  });

  constructor(
    public dialogRef: MatDialogRef<NewTripDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
