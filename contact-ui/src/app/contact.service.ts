import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Contact } from './contact/contact'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  url: string = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  insert(contact: Contact) : Observable<Contact> {
    return this.http.post<Contact>(this.url,contact );
  }
}
