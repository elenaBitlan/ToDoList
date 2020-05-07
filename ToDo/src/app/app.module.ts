import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatCheckboxModule } from '@angular/material/checkbox';

import { ListComponent } from './list/list.component';
import { apiProvider } from './api.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCheckboxModule,
  ],
  providers: [
    apiProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
