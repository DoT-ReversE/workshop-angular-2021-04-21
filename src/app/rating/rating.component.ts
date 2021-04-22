import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input() targetScore: number = 0;

  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  faStar = faStar;

  constructor() { }

  ngOnInit(): void {
  }

  onClicked(): void {
    console.log('Clicked Rating : ' + this.targetScore);
    this.ratingClicked.emit('Clicked Rating : ' + this.targetScore);
  }

}
