import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  constructor(public dailogRef: MatDialogRef<ContactDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public contact: any
    ) { }

  ngOnInit(): void {
  }

  close(){
    this.dailogRef.close();
  }
}
