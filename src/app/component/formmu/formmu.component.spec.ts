import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormmuComponent } from './formmu.component';

describe('FormmuComponent', () => {
  let component: FormmuComponent;
  let fixture: ComponentFixture<FormmuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormmuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormmuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
