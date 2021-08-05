import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent {
  // for select dropdown
  selectOptions = ['MR','MRS','MISS']
  myselect = new FormControl(this.selectOptions[0],[
     Validators.required
  ])
  // for radio buttons
   payment = new FormControl("",[
     Validators.required
   ])
  firstname = new FormControl('',[
    Validators.required,
  ])
  email = new FormControl('',[
    Validators.required,
    Validators.email
  ])
  lastname = new FormControl('', [
    Validators.required,
  ])
  address = new FormControl('', [
    Validators.required,
  ])
  city = new FormControl('', [
    Validators.required,
  ])
  postalcode = new FormControl('', [
    Validators.required,
    Validators.minLength(6)
  ])
  state = new FormControl('', [
    Validators.required,
  ])
  phone = new FormControl('', [
    Validators.required,
  ])
  country = new FormControl('', [
    Validators.required,
  ])
  requirement = new FormControl('', [
    Validators.required,
  ])
  fax = new FormControl('', [
    Validators.required,
  ])


  myform:FormGroup

  constructor(private fb : FormBuilder) {
    this.myform = this.fb.group({
      email : this.email,
      lastname:this.lastname,
      firstname:this.firstname,
      fax: this.fax,
      requirement:this.requirement,
      country:this.country,
      address:this.address,
      city:this.city,
      phone:this.phone,
      postalcode:this.postalcode,
      state:this.state,
      myselect:this.myselect,
      payment:this.payment
    })


   }

   onRegister(){
     console.log(this.myform);
   }

   onReset(){
     this.myform.reset();
   }

}
