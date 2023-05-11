import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ContactSchema } from 'src/models/contactSchema';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  
  BASE_URL ='https://contact-app-739n.onrender.com'
  constructor(private http: HttpClient) { }

  //handleError

  handleError (error : HttpErrorResponse)
  {

    let errorMsg : string =''
    if(error.error){
      errorMsg = `Error  : ${error.error.message}`
    }
    else{ 
      errorMsg = `Status : ${ error.status} \n Error : ${error.message}`
    }
    
return throwError(errorMsg)
  }



  //function for getting all contacts api
getAllContacts(){

return this.http.get(`${this.BASE_URL}/contacts`)


}


viewContact(id:any){

  return  this.http.get(`${this.BASE_URL}/contacts/${id}`)

}

getGroup (id:any) {

  return  this.http.get(`${this.BASE_URL}/groups/${id}`)
}

getGroups(){

return this.http.get(`${this.BASE_URL}/groups`)

}

// add contact to server
addContact(contact:ContactSchema){

  //api call

  return this.http.post(`${this.BASE_URL}/contacts`,contact)

}

deleteContact(id :any){

  return this.http.delete(`${this.BASE_URL}/contacts/${id}`)
}

editContact(id:any,contact:ContactSchema){
  return this.http.put(`${this.BASE_URL}/contacts/${id}`,contact)
}


}