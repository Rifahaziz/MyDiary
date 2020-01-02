import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';
import {Entry} from '../../Models/Entries';
import { InvokeFunctionExpr } from '@angular/compiler';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  entry:Entry[];
 
 
  en;
  @Input() onSubmit=new EventEmitter();

 public childData($event){
  //  console.log("from parent");
   
  //  console.log($event);
  //  console.log(this.entry);
   
  //  this.entry.push($event);
   this.en = $event;
  // this.entry.push(this.en);
 }

  constructor() { 

  }

  ngOnInit() {
   
    
    this.entry=[];
     //this.entry.push(this.en);
    // console.log(this.newentry);
  }
}


//getMessage(message: string) {
  //  this.receivedChildMessage = message;
  //}//
 
   // onDelete(entry){
      // this.deleteEntry.emit(entry);
    //}
    




