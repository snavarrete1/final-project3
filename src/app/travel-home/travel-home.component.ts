import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-travel-home',
  templateUrl: './travel-home.component.html',
  styleUrls: ['./travel-home.component.scss']
})
export class TravelHomeComponent implements OnInit {

  constructor() { }
  
  // Form to get travel destination 
  travelForm = new FormGroup({
    destination: new FormControl('')
  })

  // Get method for destination data
  get destinationData(){
    return this.travelForm.get('destination').value
  }

  // Console Log to test the Getter method for the form -- destinationData
  onSubmit(){
    console.log(this.destinationData)
  }

  ngOnInit(): void {
  }

}
