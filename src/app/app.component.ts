import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Chanon Chokethaworn';
  result = '...';

  onPress(event: any) {
    this.result = event.target.value;
  }
}
