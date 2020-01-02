import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import {EsService} from '../../services/es.service';
//import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Entry } from '../../Models/Entries';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css']
})
export class AddEntryComponent implements OnInit {
  
  //@Input() receivedParentMessage: string;
 //var diaryentry : Array<Entry> = [];
 @Output() childEvent = new EventEmitter();
 //@Output() onFormGroupChange: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  //title:string;
  //dt:Date;
 // desc:string;

 // DiaryForm : FormGroup;
 diaryentry: any = [];
   
constructor() { }
ngOnInit() { 
 /* this.DiaryForm=new FormGroup({
    title:new FormControl(),
    date:new FormControl(),
    desc:new FormControl()
 });*/
// this.onFormGroupChange.emit(this.DiaryForm);

//   this.diaryentry={
//   title: "abc",
//   date: '2019-01-01',
//   desc: "bcx" 
// }
}



  

//get message(){
 //  return this.DiaryForm.get('message').value;
//}
  
  onSubmit(f: NgForm) {
    // console.log(this.diaryentry);
    

    this.diaryentry.push(f.value);

    // console.log(this.globalArray);

    //console.log(this.DiaryForm);
    this.childEvent.emit(this.diaryentry);
    //var arr: Array<any> = [];

    // arr.push(entry);
    
    // this.addEntry.emit(arr);

    // console.log(entry);
    
    // // this.esService.storeOnLocalStorage(entry.title,entry.dt,entry.desc);
    // this.esService.getItem().then(arrStr =>{
    //   // convert localstorage string to array
    //   console.log(arrStr);

    //   arr=JSON.parse(arrStr)
    //   arr.push(entry);
    //   console.log(arr);

    //   this.esService.setItem(arr).then(()=>{
    //     // pass it to parent component
    //     // bind array to html
    //     this.esService.getItem().then(arr=>{
    //       console.log(arr);
          
    //     });
    //   });


    // });

    
    //document.getElementById("").innerHTML = localStorage.getItem(entry.toString());
    // return localStorage.getItem(STORAGE_KEY);
    
    
  }
  
  

}
