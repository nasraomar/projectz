import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-formmu',
  templateUrl: './formmu.component.html',
  styleUrls: ['./formmu.component.css']
})
export class FormmuComponent implements OnInit {
  userForm!:FormGroup

  constructor(private userservice:UserService,private router:Router) { }

  ngOnInit(): void {
    this.formConfig()
    this.getUpdateData()
  }

  formConfig(){
    this.userForm = new FormGroup({
    name: new FormControl(null),
    category:new FormControl(null),
    price: new FormControl(null),
    description:new FormControl(null),
    
    })
  }

  submit(){
    console.log(this.userForm.value)
    this.userservice.addus(this.userForm.value).subscribe((response:any)=>{
      this.userForm.reset()
      this.router.navigateByUrl("/tableus")
    })
  }

  getUpdateData(){
    const data = this.userservice.updateData
    this.userForm.get("name")?.setValue(data.name)
    this.userForm.get("category")?.setValue(data.category)
    this.userForm.get("price")?.setValue(data.price)
    this.userForm.get("description")?.setValue(data.description)
  }
}



