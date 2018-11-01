import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  displayName = true;
  public color = 'orange';
  public colors = ['red', 'green', 'blue', 'yellow'];

  public namePipe = "KevalJuthani";
  public message = "Welcome to keval solutions";
  public person = {
    "firstName": "John",
    "lastName": "Doe"
  };
  public date = new Date();

  @Input('parentData') public name;

  @Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  sendEvent() {
    this.childEvent.emit('Hey World!');
  }

}
