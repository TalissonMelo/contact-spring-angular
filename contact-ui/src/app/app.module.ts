import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatInputModule } from '@angular/material/input'
import { ReactiveFormsModule } from '@angular/forms'
import {MatTabsModule} from '@angular/material/tabs'
import {MatTableModule } from '@angular/material/table'
import {MatIconModule} from '@angular/material/icon'
import {MatCardModule} from '@angular/material/card'
import {MatDialogModule} from '@angular/material/dialog'


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './contact/contact.component';
import { ContactService } from './contact.service';
import { ContactDetailsComponent } from './contact-details/contact-details.component'

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    HttpClientModule, 
    ReactiveFormsModule,  
    MatTabsModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,

    BrowserAnimationsModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
