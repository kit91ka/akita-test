import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Убедитесь, что вы импортировали FormsModule

import { AppComponent } from './app.component';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFilterComponent } from './todo-filter/todo-filter/todo-filter.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import {TodoQuery} from "./state/todo.query";
import {TodoStore} from "./state/todo.store";
import { TodoAddComponent } from './todo-add/todo-add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import {MatListModule} from "@angular/material/list";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatTabsModule} from "@angular/material/tabs";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoFilterComponent,
    TodoAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Добавьте FormsModule в список импортов
    RouterModule,
    AppRoutingModule,
    AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule,
    MatInputModule,
    MatCheckboxModule,
    MatTabsModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule
  ],
  providers: [
    TodoQuery,
    TodoStore,
    { provide: NG_ENTITY_SERVICE_CONFIG, useValue: { baseUrl: 'https://jsonplaceholder.typicode.com' }}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
