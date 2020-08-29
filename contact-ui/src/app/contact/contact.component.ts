import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';
import { ContactService } from '../contact.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form: FormGroup
  contacts: Contact[] = []
  displayedColumns = ['id', 'name', 'email', 'phone', 'favorite']

  constructor(private service: ContactService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.findAll();

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    })
  }

  submit() {
    this.service.insert(this.form.value).subscribe(response => {
      this.contacts.push(response)
    })
  }

  findAll() {
    this.service.findAll().subscribe(response => {
      this.contacts = response;
      console.log(response)
    })
  }

  favorite(contact: any) {
    if (contact.favorite) {
      this.removeFavorite(contact);
    } else {
      this.service.favorite(contact.id).subscribe(response => {
        this.findAll()
      })
    }
  }

  removeFavorite(contact: any) {
    this.service.removeFavorite(contact.id).subscribe(response => {
      this.findAll()
    })
  }
}
