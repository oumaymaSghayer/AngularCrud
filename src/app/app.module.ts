import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './components/edit/edit.component';
import { PersonService } from './person.service';
const appRoutes: Routes = [
  { path: 'edit/:id', component: AddComponent },
  { path: '', component: ListComponent },
];
@NgModule({
  declarations: [AppComponent, ListComponent, AddComponent, EditComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [PersonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
