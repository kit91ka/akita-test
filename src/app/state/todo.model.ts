export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
export type VisibilityFilter = 'all' | 'completed' | 'active';
