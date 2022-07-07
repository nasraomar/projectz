import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/Service/customer.service';
import { UsersService } from 'src/app/Service/users.service';

@Component({
  selector: 'app-tablecus',
  templateUrl: './tablecus.component.html',
  styleUrls: ['./tablecus.component.css']
})
export class TablecusComponent implements OnInit {
  customer:any
  constructor(private customerservice:CustomerService) { }

  ngOnInit(): void {
    this.getCustomer()
  }

  getCustomer(){
    this.customerservice.getCustomer().subscribe((response:any)=>{
      this.customer = response
    })
  }

  delete(id:any){
    this.customerservice.delete(id).subscribe((response:any) =>{
      this.getCustomer()
    })
  }

  update(update:any){
    this.customerservice.updateData = update
  }

}
