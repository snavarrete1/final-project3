import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { TravelCrudService } from '../services/travel-crud.service';

@Component({
  selector: 'app-travel-register',
  templateUrl: './travel-register.component.html',
  styleUrls: ['./travel-register.component.scss']
})
export class TravelRegisterComponent implements OnInit {

  travelForm = new FormGroup({
    travelFirstName:new FormControl('',[Validators.required, Validators.minLength(4)]),
    travelLastName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    travelAddress: new FormControl('',[Validators.required,Validators.minLength(6)]),
    travelDOB: new FormControl('',[Validators.required,Validators.minLength(6)])
  })

  get travelFirstName() {return this.travelForm.get('travelFirstName')}


  get travelLastName() {return this.travelForm.get('travelLastName')}


  get travelAddress() {return this.travelForm.get('travelAddress')}


  get travelDOB() {return this.travelForm.get('travelDOB')}

  onSubmit(){
    this.crudService.create_travel(this.travelForm.value.travelFirstName,this.travelForm.value.travelLastName,this.travelForm.value.travelAddress,this.travelForm.value.travelDOB)
    console.log(`${this.travelForm.value.travelFirstName}`)
  }
  constructor(public crudService: TravelCrudService) { }

  ngOnInit(): void {
  }

}

