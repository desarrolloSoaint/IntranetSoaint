import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveAfternoonPauseComponent } from './active-afternoon-pause.component';

describe('ActiveAfternoonPauseComponent', () => {
  let component: ActiveAfternoonPauseComponent;
  let fixture: ComponentFixture<ActiveAfternoonPauseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveAfternoonPauseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveAfternoonPauseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
