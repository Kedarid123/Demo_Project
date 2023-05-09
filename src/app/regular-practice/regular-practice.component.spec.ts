import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularPracticeComponent } from './regular-practice.component';

describe('RegularPracticeComponent', () => {
  let component: RegularPracticeComponent;
  let fixture: ComponentFixture<RegularPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegularPracticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegularPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
