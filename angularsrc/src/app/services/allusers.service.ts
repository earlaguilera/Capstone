import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AllusersService {
result:any;

  constructor(private http:Http) { }

  getUsers() {
    return this.http.get("/allusers/allusers")
      .map(result => this.result = result.json());
  }
}
