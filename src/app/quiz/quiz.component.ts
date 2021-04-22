import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  likeCounter: number = 0;
  dislikeCounter: number = 0;

  liked = false;
  disliked = false;

  constructor(
    private counterService: CounterService
  ) {

  }

  ngOnInit(): void {
    this.likeCounter = this.counterService.getLikeCount();
    this.dislikeCounter = this.counterService.getDislikeCount();
    this.liked = this.counterService.isLiked();
    this.disliked = this.counterService.isDisLiked();
  }

  doLiked(event: any): void {
    this.counterService.doLiked();
    this.liked = this.counterService.isLiked();
    this.disliked = this.counterService.isDisLiked();
    this.likeCounter = this.counterService.getLikeCount();
    this.dislikeCounter = this.counterService.getDislikeCount();
  }

  doDisliked(event: any): void {
    this.counterService.doDisliked();
    this.liked = this.counterService.isLiked();
    this.disliked = this.counterService.isDisLiked();
    this.likeCounter = this.counterService.getLikeCount();
    this.dislikeCounter = this.counterService.getDislikeCount();
  }
}
