import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedbacksService {
 // url = `https://localhost:7115/api/FeedBack`;
  constructor(private _http: HttpClient) { }

  getData(){
    const url=`https://localhost:7115/api/FeedBack/getdata`;
    return this._http.get(url).toPromise();
  }

  create(data:any){
    const url=`https://localhost:7115/api/FeedBack/NewComment`;
    return this._http.post(url,data).toPromise();
  }
}


