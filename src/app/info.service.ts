import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor( private http: HttpClient) { }


  getiInfoData( url: string) {
    return this.http.get(url);
  }
}
