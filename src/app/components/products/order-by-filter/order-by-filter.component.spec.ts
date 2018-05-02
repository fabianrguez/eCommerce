import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderByFilterComponent } from './order-by-filter.component';

describe('OrderByFilterComponent', () => {
  let component: OrderByFilterComponent;
  let fixture: ComponentFixture<OrderByFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderByFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderByFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
