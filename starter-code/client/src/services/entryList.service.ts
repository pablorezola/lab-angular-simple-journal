import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class entryService {
  constructor(private http: Http) {}

  getList():Observable<any> {
    return this.http.get(`${environment.BASE_URL}/api/journal-entries`)
      .map((res) => { 
         return res.json()
    });
  }

  getEntry(id):Observable<any>{
    return this.http.get(`${environment.BASE_URL}/api/journal-entries/${id}`)
    .map((res) => { 
      return res.json()
    });
  }

  addNewEntry(entry):Observable<any>{
    const data = {
      //NO ME DA TIEMPO
    }
    return this.http.post(`${environment.BASE_URL}/api/journal-entries`, data)
  }
}