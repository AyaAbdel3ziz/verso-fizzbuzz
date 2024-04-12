import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FizzBuzzComponent } from './components/fizz-buzz/fizz-buzz.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FizzBuzzComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'verso-fizzbuzz';
}
