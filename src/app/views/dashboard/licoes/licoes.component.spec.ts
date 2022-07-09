import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicoesComponent } from './licoes.component';

describe('LicoesComponent', () => {
  let component: LicoesComponent;
  let fixture: ComponentFixture<LicoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
