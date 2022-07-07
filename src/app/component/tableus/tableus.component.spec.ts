import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableusComponent } from './tableus.component';

describe('TableusComponent', () => {
  let component: TableusComponent;
  let fixture: ComponentFixture<TableusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
