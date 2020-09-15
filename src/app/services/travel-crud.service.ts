import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TravelCrudService {

  constructor(public afs: AngularFirestore) { }

  /**
   * 
   * @param travelFirstName 
   * @param travelLastName 
   * @param travelAddress 
   * @param travelDOB 
   */

  create_travel(travelFirstName,travelLastName,travelAddress,travelDOB){
    return this.afs.collection('travel').add({
      travelFirstName: travelFirstName,
      travelLastName: travelLastName,
      travelAddress: travelAddress,
      travelDOB: travelDOB
    })
  }

  /**
   * 
   * 
   */
  retrieve_travel(){
    return this.afs.collection("travel").snapshotChanges();
  }

  update_travel(travelId, travelFirstName, travelLastName,travelAddress, travelDOB){
    this.afs.doc('travel/' + travelId).update({
      travelFirstName: travelFirstName,
      travelLastName:  travelLastName,
      travelAddress: travelAddress,
      travelDOB: travelDOB

    })
  }
/**
 * 
 * @param travelId 
 */


  delete_travel(travelId){
    this.afs.doc('travel/' + travelId).delete()
  }
}
