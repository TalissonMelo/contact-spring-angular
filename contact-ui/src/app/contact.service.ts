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

  findAll() : Observable<Contact[]> {
    return this.http.get<Contact[]>(this.url);
  }

  favorite(id: number) : Observable<any> {
    return this.http.patch<any>(`${this.url}/${id}/favorite` , null);
  }

  removeFavorite(id: number) : Observable<any> {
    return this.http.patch<any>(`${this.url}/${id}/remove-favorite` , null);
  }

  uploadPhoto(id: number, formData : FormData) :  Observable<any> {
    return this.http.put(`${this.url}/${id}/photo`, formData);
  }
}
