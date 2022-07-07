import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormmuComponent } from './component/formmu/formmu.component';
import { FormcuComponent } from './component/formcu/formcu.component';
import { TableusComponent } from './component/tableus/tableus.component';
import { TablecusComponent } from './component/tablecus/tablecus.component';
import { DashbordComponent } from './component/dashbord/dashbord.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FormmuComponent,
    FormcuComponent,
    TableusComponent,
    TablecusComponent,
    DashbordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
