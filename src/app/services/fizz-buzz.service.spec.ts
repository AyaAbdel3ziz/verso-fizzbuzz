import { TestBed } from '@angular/core/testing';
import { FizzBuzzService } from './fizz-buzz.service';

describe('FizzBuzzService', () => {
  let service: FizzBuzzService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FizzBuzzService],
    });
    service = TestBed.inject(FizzBuzzService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return correct FizzBuzz values up to a limit of 15', () => {
    const result = service.calculateValue(15);
    expect(result).toEqual([
      '1',
      '2',
      'Fizz',
      '4',
      'Buzz',
      'Fizz',
      '7',
      '8',
      'Fizz',
      'Buzz',
      '11',
      'Fizz',
      '13',
      '14',
      'FizzBuzz',
    ]);
  });

  it('should return correct FizzBuzz values up to a limit of 20', () => {
    const result = service.calculateValue(20);
    expect(result).toEqual([
      '1',
      '2',
      'Fizz',
      '4',
      'Buzz',
      'Fizz',
      '7',
      '8',
      'Fizz',
      'Buzz',
      '11',
      'Fizz',
      '13',
      '14',
      'FizzBuzz',
      '16',
      '17',
      'Fizz',
      '19',
      'Buzz',
    ]);
  });

  it('should return empty array for limit of 0', () => {
    const result = service.calculateValue(0);
    expect(result).toEqual([]);
  });

  it('should return empty array for negative limit', () => {
    const result = service.calculateValue(-5);
    expect(result).toEqual([]);
  });
});
