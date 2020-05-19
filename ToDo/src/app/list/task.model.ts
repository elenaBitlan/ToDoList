export class Task {
  constructor(
    public id: string,
    public content: string,
    public resolved: boolean
  ) {}
}

export class TaskContent {
  constructor(public content: string) {}
}

export interface TaskInterface {
  id: string;
  content: string;
  resolved: boolean;
}
