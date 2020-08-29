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

  constructor(private service: ContactService, private formBuilder: FormBuilder) { }

  form: FormGroup

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name:['',Validators.required],
      email: ['', Validators.email],
      phone: ['',Validators.required]
    })

  }

  submit() {
    
    console.log(this.form.value)
    /*this.service.insert().subscribe(response => {
      console.log(response);
    })*/
  }

}
