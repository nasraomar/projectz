import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcuComponent } from './formcu.component';

describe('FormcuComponent', () => {
  let component: FormcuComponent;
  let fixture: ComponentFixture<FormcuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormcuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormcuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
