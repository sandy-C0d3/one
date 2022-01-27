import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TirukComponent } from './tiruk.component';

describe('TirukComponent', () => {
  let component: TirukComponent;
  let fixture: ComponentFixture<TirukComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TirukComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TirukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
