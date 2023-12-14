import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TodoQuery} from "../state/todo.query";
import {VisibilityFilter} from "../state/todo.model";
import {TodoService} from "../state/todo.service";
import { of, timer } from 'rxjs';
import {map, concatMap} from "rxjs/operators";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {
  // @ts-ignore
  visibleTodos$;
  constructor(private todoQuery: TodoQuery, private route: ActivatedRoute, private todoService: TodoService,
              private cdr: ChangeDetectorRef) {}

  filter: VisibilityFilter = 'all';

  ngOnInit() {
    this.todoQuery.selectVisibleTodos(this.filter).subscribe(d => console.log(d, 'zz'));
    this.route.params.subscribe((params) => {
      this.filter = params['filter'] || 'all';
      this.todoQuery.updateFilter(this.filter);
      this.visibleTodos$ = this.todoQuery.selectVisibleTodos(this.filter);
      console.log(this.visibleTodos$);
      this.cdr.detectChanges();
    });
    //@ts-ignore
    of(1,2,3).pipe(
      concatMap(value => timer(1000)
        .pipe(map(() => value))))
        .subscribe((el: number) => console.log(el, 'zasd'));
  }
  toggleTodoCompletion(todo: any) {
    console.log(todo);
    this.todoService.toggleTodoCompletion(todo.id);
  }

}
