import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dislike-button',
  templateUrl: './dislike-button.component.html',
  styleUrls: ['./dislike-button.component.css']
})
export class DislikeButtonComponent implements OnInit {

  @Input() dislikeCounter: number = 0;
  @Input() active: boolean = false;
  @Output() dislikeClicked: EventEmitter<any> = new EventEmitter<any>();

  dislikeLabel = 'Dislike';

  constructor() { }

  ngOnInit(): void {
  }

  onClicked(): void {
    this.dislikeClicked.emit('Disliked');
  }

}
