import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablecusComponent } from './tablecus.component';

describe('TablecusComponent', () => {
  let component: TablecusComponent;
  let fixture: ComponentFixture<TablecusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablecusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablecusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
