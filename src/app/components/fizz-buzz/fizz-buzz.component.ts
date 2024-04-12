import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FizzBuzzService } from '../../services/fizz-buzz.service';

@Component({
  selector: 'fizz-buzz',
  templateUrl: './fizz-buzz.component.html',
  imports: [CommonModule],
  standalone: true,
})
export class FizzBuzzComponent implements OnInit {
  limit: number = 100;
  result: string[] = [];

  constructor(private fizzBuzzService: FizzBuzzService) {}

  ngOnInit(): void {
    this.result = this.fizzBuzzService.calculateValue(this.limit);
  }
}
