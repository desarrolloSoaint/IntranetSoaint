import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ActiveAfternoonPauseComponent } from './active-afternoon-pause.component';

describe('ActiveAfternoonPauseComponent', () => {
  let component: ActiveAfternoonPauseComponent;
  let fixture: ComponentFixture<ActiveAfternoonPauseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveAfternoonPauseComponent ],
      imports: [RouterTestingModule,HttpClientTestingModule]
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
