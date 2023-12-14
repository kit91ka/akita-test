import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import {MatTabsModule} from "@angular/material/tabs";

const routes: Routes = [
  { path: '', redirectTo: 'all', pathMatch: 'full' },
  { path: ':filter', component: TodoListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    MatTabsModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
