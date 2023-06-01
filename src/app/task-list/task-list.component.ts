import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = "My TO-DO List"
  tasks: Task[] = [
    new Task('Visit Alex'),
    new Task('Take a walk'),
    new Task('Write some code'),
  ]
  add(newTask: string){
    this.tasks.push(new Task(newTask))
  }
  remove(existingTask: Task){
    var confirmed = confirm(`Are you sure you want to remove this task?\n "${existingTask.title}"`)
    if (confirmed){
      this.tasks.splice(this.tasks.indexOf(existingTask),1)
    }
  }
}

class Task {
  constructor(public title: string){}
  toggleIsDone(){
    this.is_done = !this.is_done;
  }
  public is_done = false;
}

