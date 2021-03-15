import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryTimeComponent } from './entry-time.component';

describe('EntryTimeComponent', () => {
  let component: EntryTimeComponent;
  let fixture: ComponentFixture<EntryTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
