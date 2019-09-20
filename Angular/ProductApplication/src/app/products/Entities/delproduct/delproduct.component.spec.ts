import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelproductComponent } from './delproduct.component';

describe('DelproductComponent', () => {
  let component: DelproductComponent;
  let fixture: ComponentFixture<DelproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
