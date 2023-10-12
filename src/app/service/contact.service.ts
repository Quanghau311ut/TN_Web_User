import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private _http: HttpClient) { }


  create(data: any) {
    const url = `https://localhost:7115/api/ContactCustomers/NewContact`;
    return this._http.post(url, data).toPromise();
  }
}
