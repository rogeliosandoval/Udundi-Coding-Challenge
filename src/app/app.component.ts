import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  animate = false;
  message = false;

  // This function expands the "More Details" by setting animate to true
  expand() {
    this.animate = true;
    this.message = true;
  }

  // This function shrinks the "More Details" by setting animate back to false
  shrink() {
    this.animate = false;
    this.message = false;
  }
}
