import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { EntryComponent } from './components/entry/entry.component';
import { AddEntryComponent } from './components/add-entry/add-entry.component';
import { EntryItemComponent } from './components/entry-item/entry-item.component';
import {FormsModule} from '@angular/forms';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { EsService } from './services/es.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EntryComponent,
    AddEntryComponent,
    EntryItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StorageServiceModule
    
  ],
  providers: [EsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
