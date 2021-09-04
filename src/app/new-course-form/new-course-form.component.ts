import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  form ?: any = new FormGroup({
    topics: new FormArray([])
  });

  addTopic(event: any, topic: HTMLInputElement) {
    event.preventDefault();
    this.newTopics.push(new FormControl(topic.value));
    topic.value = '';
  }

  get newTopics() {
    return this.form.get('topics') as FormArray;
  }

  deleteTopic(selectedTopic : FormControl) {
    let indx = this.newTopics.controls.indexOf(selectedTopic);
    this.newTopics.removeAt(indx);
  }

}
