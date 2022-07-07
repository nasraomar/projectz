import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  // 000  chane to port no
  private userUrl : string = "http://localhost:8080/api/user/";
  constructor( private http: HttpClient) { }

  // get all user from database
  getAllUsre(){
    return this.http.get(this.userUrl);
  }
}
