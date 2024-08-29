import { Injectable } from '@angular/core';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor() { }

  async createUser() {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

}
