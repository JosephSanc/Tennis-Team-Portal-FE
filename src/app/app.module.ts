import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { StaffListComponent } from './staff-list/staff-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StaffDetailsComponent } from './staff-details/staff-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlayerModalComponent } from './modals/player-modal/player-modal.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { StaffModalComponent } from './modals/staff-modal/staff-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    routingComponents,
    PlayerDetailsComponent,
    StaffListComponent,
    NavbarComponent,
    StaffDetailsComponent,
    PlayerModalComponent,
    StaffModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
