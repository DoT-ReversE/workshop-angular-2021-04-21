import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Chanon Chokethaworn';
  result = '...';
  username = '';

  onPress(event: any) {
    this.result = event.target.value;
  }

  doSomething() {
    console.log("Clicked")
    this.result = "Change from clicked !!";
  }
}
