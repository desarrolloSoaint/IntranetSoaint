import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivePauseComponent } from './active-pause.component';

describe('ActivePauseComponent', () => {
  let component: ActivePauseComponent;
  let fixture: ComponentFixture<ActivePauseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivePauseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivePauseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
