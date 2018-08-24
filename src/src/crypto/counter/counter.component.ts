import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ryan-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input()
  count: number = 0;

  @Input()
  label: string = '';
}