import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-excel-results',
  templateUrl: './excel-results.component.html',
  styleUrls: ['./excel-results.component.css']
})
export class ExcelResultsComponent implements OnInit {

  data: any;
  constructor(public dialogRef: MatDialogRef<ExcelResultsComponent>,
              @Inject(MAT_DIALOG_DATA) data: any) {
    this.data = data;
  }

  ngOnInit() {
  }

}
