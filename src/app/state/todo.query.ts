import { QueryEntity } from '@datorama/akita';
import { TodoState, TodoStore } from './todo.store';
import { Todo, VisibilityFilter } from './todo.model';
import {Injectable} from "@angular/core";

@Injectable({ providedIn: 'root' })
export class TodoQuery extends QueryEntity<TodoState, Todo> {
  // @ts-ignore
  constructor(protected store: TodoStore) {
    super(store);
  }

  selectVisibleTodos(filter: VisibilityFilter) {
    return this.selectAll({
      filterBy: (todo: Todo) => {
        if (filter === 'all') return true;
        if (filter === 'completed') return todo.completed;
        if (filter === 'active') return !todo.completed;
        return false;
      },
      limitTo: 2
    });
  }

  updateFilter(filter: VisibilityFilter) {
    this.store.update(state => ({ ...state, filter }));
  }
}
