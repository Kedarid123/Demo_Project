import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFormDeleteComponent } from './template-form-delete.component';

describe('TemplateFormDeleteComponent', () => {
  let component: TemplateFormDeleteComponent;
  let fixture: ComponentFixture<TemplateFormDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateFormDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateFormDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
