import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private likeCounter = 100;
  private dislikeCounter = 25;

  private liked = false;
  private disliked = false;

  constructor() { }

  isLiked() {
    return this.liked;
  }

  isDisLiked() {
    return this.disliked;
  }

  doLiked() {
    this.liked = !this.liked;
    this.liked ? this.likeCounter++ : this.likeCounter--;

    if (this.disliked) {
      this.disliked = false;
      this.dislikeCounter--;
    }
  }

  doDisliked() {
    this.disliked = !this.disliked;
    this.disliked ? this.dislikeCounter++ : this.dislikeCounter--;

    if (this.liked) {
      this.liked = false;
      this.likeCounter--;
    }
  }

  getLikeCount() {
    return this.likeCounter;
  }

  getDislikeCount() {
    return this.dislikeCounter;
  }
}
