import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/Service/customer.service';

@Component({
  selector: 'app-formcu',
  templateUrl: './formcu.component.html',
  styleUrls: ['./formcu.component.css']
})
export class FormcuComponent implements OnInit {
  customerForm!:FormGroup
  constructor(private customerservice:CustomerService,private router:Router) { }

  ngOnInit(): void {
    this.formConfig()
    this.getUpdateData()
  }

  formConfig(){
    this.customerForm = new FormGroup({
    id: new FormControl(null),
    fname: new FormControl(null),
    lname:new FormControl(null),
    email: new FormControl(null),
    phone:new FormControl(null),
    product:new FormControl(null)
    })
  }

  submit(){
    console.log(this.customerForm.value)
    this.customerservice.addcust(this.customerForm.value).subscribe((response:any)=>{
      this.customerForm.reset()
      this.router.navigateByUrl("/tablecus")
    })
  }

  getUpdateData(){
    const data = this.customerservice.updateData
    this.customerForm.get("id")?.setValue(data.id)
    this.customerForm.get("fname")?.setValue(data.fname)
    this.customerForm.get("lname")?.setValue(data.lname)
    this.customerForm.get("email")?.setValue(data.email)
    this.customerForm.get("phone")?.setValue(data.phone)
    this.customerForm.get("product")?.setValue(data.product)
    
  }
}
