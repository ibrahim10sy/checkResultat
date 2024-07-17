import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddexamenComponent } from './addexamen.component';

describe('AddexamenComponent', () => {
  let component: AddexamenComponent;
  let fixture: ComponentFixture<AddexamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddexamenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddexamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
