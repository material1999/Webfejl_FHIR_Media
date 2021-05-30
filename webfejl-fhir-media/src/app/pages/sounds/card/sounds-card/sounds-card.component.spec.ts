import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundsCardComponent } from './sounds-card.component';

describe('SoundsCardComponent', () => {
  let component: SoundsCardComponent;
  let fixture: ComponentFixture<SoundsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoundsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
