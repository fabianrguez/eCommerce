import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartCostsComponent } from './cart-costs.component';

describe('CartCostsComponent', () => {
  let component: CartCostsComponent;
  let fixture: ComponentFixture<CartCostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartCostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartCostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
