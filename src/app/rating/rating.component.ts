import { Component, OnInit, Input } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input() targetScore: number = 0;

  faStar = faStar;

  constructor() { }

  ngOnInit(): void {
  }

}
