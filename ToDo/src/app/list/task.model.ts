export class Task {
  constructor(
    public _id: string,
    public content: string,
    public resolved: boolean
  ) {}
}

export class TaskContent {
  constructor(public content: string) {}
}
