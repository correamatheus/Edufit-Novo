import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GabaritoComponent } from './gabarito.component';

describe('GabaritoComponent', () => {
  let component: GabaritoComponent;
  let fixture: ComponentFixture<GabaritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GabaritoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GabaritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
