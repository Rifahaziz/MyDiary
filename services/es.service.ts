import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Entry } from '../Models/Entries';
import { Observable } from 'rxjs';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

var STORAGE_KEY = 'local_entries';

@Injectable({
  providedIn: 'root'
})
export class EsService {
  entries2 = [];
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {

  }
  public storeOnLocalStorage(t: string, dt: Date, dc: string): void {

    // get array of tasks from local storage
    const currentEntryList = this.storage.get(STORAGE_KEY) || [];
    // push new task to array
    currentEntryList.push({
      title: t,
      date: dt,
      desc: dc
    });
    // insert updated array to local storage
    this.storage.set(STORAGE_KEY, currentEntryList);
    console.log(this.storage.get(STORAGE_KEY) || 'LocaL storage is empty');
    // return LOCAL_STORAGE.getItem(STORAGE_KEY);
  }
  public getFromStorage() {

  }

  public setItem(value: any) {
    return Promise.resolve().then(function () {
      var strValue = JSON.stringify(value)
      localStorage.setItem(STORAGE_KEY, strValue);
    });
  }

  public getItem() {
    return Promise.resolve().then(function () {
      return localStorage.getItem(STORAGE_KEY);
    });
  }
  //deleteEntry(e:Entry){
  //const url = `${this.todosUrl}/${todo.id}`;
  //return this.http.delete("");
  // }

  //addEntry(e:Entry){
  //  return this.http.post("", {});
  //}
}

