import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  updateData:any


  constructor(private http:HttpClient) { }

  

  getUser(){
    return this.http.get("http://localhost:8080/api/user/")
}
delete(id:any){
  return this.http.delete("http://localhost:8080/api/user/"+id)
}
addus(body:any){
  return this.http.post("http://localhost:8080/api/user/",body)
}
}
