import { Component, OnInit } from '@angular/core';
import { ContactSchema } from 'src/models/contactSchema';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.css']
})
export class AddContactsComponent implements OnInit {


  contact:ContactSchema={}
  groups :any=[]

  constructor(private api:ApiService) {

this.contact.groupId ='Select A Group'
  }

  ngOnInit(): void {
    
    this.api.getGroups().subscribe(

      {

        next:(response :any)=>{

          console.log(response);
          this.groups = response
          
        },

        error: (err:any)=>{
          console.log(err.message);
          
        }
      }
    )
  }

  addContact(contact:ContactSchema){

this.api.addContact(contact).subscribe({

  next:(response:any)=>{

    console.log(response);
    

  },
  error:(err:any)=>{
    console.log(err);
    
    
  }
}



)
  }

}