import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';
import { ContactService } from '../contact.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MatDialog } from '@angular/material/dialog'
import { ContactDetailsComponent } from '../contact-details/contact-details.component';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form: FormGroup
  contacts: Contact[] = []
  displayedColumns = ['photo', 'id', 'name', 'email', 'phone', 'favorite']
  totalElements = 0;
  page = 0;
  size = 10;
  pageSizeOptions : number[] = [10]

  constructor(private service: ContactService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {

    this.findAll(this.page, this.size);

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    })
  }

  submit() {
    this.service.insert(this.form.value).subscribe(response => {
      let list: Contact[] = [... this.contacts, response]
      this.contacts = list;
      this.snackBar.open('Contato Cadastrado!.', 'Sucesso',{
        duration: 3000
      })

      this.form.reset();
    })
  }

  findAll(page,size) {
    this.service.findAll(page,size).subscribe(response => {
      this.contacts = response.content;
      this.totalElements = response.totalElements;
      this.page = response.number;
    })
  }

  favorite(contact: any) {
    if (contact.favorite) {
      this.removeFavorite(contact);
    } else {
      this.service.favorite(contact.id).subscribe(response => {
        this.findAll(this.page, this.size);
      })
    }
  }

  removeFavorite(contact: any) {
    this.service.removeFavorite(contact.id).subscribe(response => {
      this.findAll(this.page, this.size);
    })
  }

  uploadPhoto(event, contact) {
    const files = event.target.files;
    if (files) {
      const photo = files[0];
      const formData: FormData = new FormData();
      formData.append("photo", photo);
      this.service.uploadPhoto(contact.id, formData).subscribe(response => {
        this.findAll(this.page, this.size);
      })
    }
  }

  details(contact: any) {
    this.dialog.open(ContactDetailsComponent, {
       width : '400px',
      height: '450px',
      data: contact
    });
  }

  pageEvent(event: PageEvent){
    this.page = event.pageIndex;
    this.findAll(this.page, this.size);
  }
}
