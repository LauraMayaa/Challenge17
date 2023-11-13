import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(protected http: HttpClient) { }

  user(url: string) {
    return this.http.get(url)


  }
}
