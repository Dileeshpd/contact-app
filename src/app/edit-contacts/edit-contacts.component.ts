import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactSchema } from 'src/models/contactSchema';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-edit-contacts',
  templateUrl: './edit-contacts.component.html',
  styleUrls: ['./edit-contacts.component.css']
})
export class EditContactsComponent implements OnInit {

  contact:ContactSchema={}
  groups:any=[]

  constructor(private editActivatedRoute:ActivatedRoute,private api:ApiService,private editRouter:Router){

    
  }
  ngOnInit():void {
    this.editActivatedRoute.params.subscribe({
      next:(pathParameter:any)=>{
        const {id} = pathParameter
        console.log(id)

        this.api.viewContact(id).subscribe({
          next:(response:any)=>{
            console.log(response);
            this.contact=response
            
          }
        })
        
      }
    })

    //get all groups
    this.api.getGroups().subscribe({
      next:(allGroups:any)=>{
        this.groups = allGroups
        console.log(this.groups);
        
      }
    })
  }

  editContact(id:any){
    this.api.editContact(id,this.contact).subscribe({
      next:(Response:any)=>{
       this.editRouter.navigateByUrl("")
      }
    })
  }

}
