import { Component } from '@angular/core';
import {TodoQuery} from "../../state/todo.query";
import {ActivatedRoute, Router} from "@angular/router";
import {VisibilityFilter} from "../../state/todo.model";

@Component({
  selector: 'app-todo-filter',
  templateUrl: './todo-filter.component.html',
  styleUrls: ['./todo-filter.component.css']
})
export class TodoFilterComponent {
  filter: VisibilityFilter = 'all';

  constructor(private todoQuery: TodoQuery, private route: ActivatedRoute, private router: Router) {}

  updateFilter() {
    this.todoQuery.updateFilter(this.filter);
    console.log('zz');
    this.router.navigate([this.filter], { relativeTo: this.route });
  }

}
