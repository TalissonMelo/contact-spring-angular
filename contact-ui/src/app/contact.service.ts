import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Contact } from './contact/contact'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PageContact} from './contact/page.contact'

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  url: string = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  insert(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.url, contact);
  }

  findAll(page, size): Observable<PageContact> {
    const params = new HttpParams().set('page', page).set('size', size);
    return this.http.get<any>(`${this.url}?${params.toString()}`);
  }

  favorite(id: number): Observable<any> {
    return this.http.patch<any>(`${this.url}/${id}/favorite`, null);
  }

  removeFavorite(id: number): Observable<any> {
    return this.http.patch<any>(`${this.url}/${id}/remove-favorite`, null);
  }

  uploadPhoto(id: number, formData: FormData): Observable<any> {
    return this.http.put(`${this.url}/${id}/photo`, formData, { responseType: 'blob' });
  }
}
