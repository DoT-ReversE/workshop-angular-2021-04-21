import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.css']
})
export class LikeButtonComponent implements OnInit {

  @Input() likeCounter: number = 0;
  @Input() active: boolean = false;
  @Output() likeClicked: EventEmitter<any> = new EventEmitter<any>();

  likeLabel = 'Like';

  constructor() { }

  ngOnInit(): void {
  }

  onClicked(): void {
    this.likeClicked.emit('Liked');
  }
}
