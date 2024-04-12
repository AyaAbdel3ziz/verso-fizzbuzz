import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FizzBuzzComponent } from './fizz-buzz.component';
import { FizzBuzzService } from '../../services/fizz-buzz.service';

describe('FizzBuzzComponent', () => {
  let component: FizzBuzzComponent;
  let fixture: ComponentFixture<FizzBuzzComponent>;
  let fizzBuzzService: jasmine.SpyObj<FizzBuzzService>;

  beforeEach(async () => {
    const fizzBuzzServiceSpy = jasmine.createSpyObj('FizzBuzzService', [
      'calculateValue',
    ]);

    await TestBed.configureTestingModule({
      imports: [],
      providers: [{ provide: FizzBuzzService, useValue: fizzBuzzServiceSpy }],
    }).compileComponents();

    fizzBuzzService = TestBed.inject(
      FizzBuzzService
    ) as jasmine.SpyObj<FizzBuzzService>;
    fixture = TestBed.createComponent(FizzBuzzComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call calculateValue method of FizzBuzzService on initialization', () => {
    fixture.detectChanges();

    expect(fizzBuzzService.calculateValue).toHaveBeenCalledWith(
      component.limit
    );
  });

  it('should populate the result array with correct values from FizzBuzzService', () => {
    const expectedResult = [
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
    ];
    fizzBuzzService.calculateValue.and.returnValue(expectedResult);

    fixture.detectChanges();

    expect(component.result).toEqual(expectedResult);
  });
});
