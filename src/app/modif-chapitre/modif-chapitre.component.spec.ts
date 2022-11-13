import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifChapitreComponent } from './modif-chapitre.component';

describe('ModifChapitreComponent', () => {
  let component: ModifChapitreComponent;
  let fixture: ComponentFixture<ModifChapitreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifChapitreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifChapitreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
