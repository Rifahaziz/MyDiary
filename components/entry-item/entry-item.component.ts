import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import {Entry} from 'src/app/Models/Entries';
import {EsService} from '../../services/es.service'
@Component({
  selector: 'app-entry-item',
  templateUrl: './entry-item.component.html',
  styleUrls: ['./entry-item.component.css']
})
export class EntryItemComponent implements OnInit {

  @Input() entry:any;
  @Output() deleteEntry:EventEmitter<Entry>= new EventEmitter();

  
    constructor(private esService:EsService) { }
  
    ngOnInit() {
      this.entry = ["abc"];
    }
    setClasses(){
      let classes = {
        e : true,
        
  
      }
  
      return classes
    }
    // $scope.onDelete = function(entry) { 
    //   var index = $scope.Entry.indexOf(entry);
    //   $scope.Entry.splice(index, 1);     
    // }
    onDelete(e){
      //console.log("deleted");
      var idx=this.entry.indexOf(e);
      this.entry.splice(idx,1);
      this.deleteEntry.emit(this.entry);
    }
  
  }
