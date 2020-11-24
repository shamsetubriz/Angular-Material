import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab4ContentComponent } from './tab4-content.component';

describe('Tab4ContentComponent', () => {
  let component: Tab4ContentComponent;
  let fixture: ComponentFixture<Tab4ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tab4ContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab4ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
