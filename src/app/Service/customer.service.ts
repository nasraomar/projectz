import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  updateData:any
  constructor(private http:HttpClient) { }

  getCustomer(){
    return this.http.get("http://localhost:8080/api/customer/")
  }

  delete(id:any){
    return this.http.delete("http://localhost:8080/api/customer/"+id)
  }

  addcust(body:any){
    return this.http.post("http://localhost:8080/api/customer/",body)
  }
}
