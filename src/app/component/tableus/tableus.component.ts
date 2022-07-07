import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Service/user.service';
import { CustomerService } from 'src/app/Service/customer.service';



@Component({
  selector: 'app-tableus',
  templateUrl: './tableus.component.html',
  styleUrls: ['./tableus.component.css']
})
export class TableusComponent implements OnInit {
  user:any


  constructor(private userservice:UserService) { }

  ngOnInit(): void {
    this.getUser()
  }
  getUser(){
    this.userservice.getUser().subscribe((responce:any)=>{
      this.user= responce
    })
    }
    delete(id:any){
      this.userservice.delete(id).subscribe((response:any)=>{
        this.getUser()
      })
      

    }
      }
    
