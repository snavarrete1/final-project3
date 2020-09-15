import { Component, OnInit } from '@angular/core';
import { TravelCrudService } from '../services/travel-crud.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ConstantPool } from '@angular/compiler';

@Component({
  selector: 'app-show-travel',
  templateUrl: './show-travel.component.html',
  styleUrls: ['./show-travel.component.scss']
})
export class ShowTravelComponent implements OnInit {

  data;
  public show:boolean = false;

  constructor(public crudService: TravelCrudService) { }

  updateForm = new FormGroup({
    travelFirstName:new FormControl('',[Validators.required, Validators.minLength(4)]),
    travelLastName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    travelAddress: new FormControl('',[Validators.required,Validators.minLength(6)]),
    travelDOB: new FormControl('',[Validators.required,Validators.minLength(6)])
  })

  get travelFirstName() {return this.updateForm.get('travelFirstName')}


  get travelLastName() {return this.updateForm.get('travelLastName')}


  get travelAddress() {return this.updateForm.get('travelAddress')}


  get travelDOB() {return this.updateForm.get('travelDOB')}

  get travelFirstNameValue() {return this.updateForm.get('travelFirstName').value}

  get travelLastNameValue() {return this.updateForm.get('travelLastName').value}

  get travelAddressValue() {return this.updateForm.get('travelAddress').value}

  get travelDOBValue() {return this.updateForm.get('travelDOB').value}

  onSubmit(id,travelFirstName,travelLastName,travelAddress,travelDOB){
    this.crudService.update_travel(id,travelFirstName,travelLastName,travelAddress,travelDOB)
    console.log(`${this.updateForm.value.travelFirstName}`)
  }

  toggle(){
    this.show = !this.show;
  }

  delete(id){
    this.crudService.delete_travel(id)
  }


  ngOnInit(): void {
    this.data = this.crudService.retrieve_travel().subscribe(data =>{
      this.data = data.map(rawData => {
        return {
          id: rawData.payload.doc.id,
          travelFirstName: rawData.payload.doc.data()['travelFirstName'],
          travelLastName: rawData.payload.doc.data()['travelLastName'],
          travelAddress: rawData.payload.doc.data()['travelAddress'],
          travelDOB: rawData.payload.doc.data()['travelDOB']

        }
      })
      console.log(this.data.id)
    })
  }

}

