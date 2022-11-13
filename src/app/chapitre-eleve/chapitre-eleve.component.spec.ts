import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapitreEleveComponent } from './chapitre-eleve.component';

describe('ChapitreEleveComponent', () => {
  let component: ChapitreEleveComponent;
  let fixture: ComponentFixture<ChapitreEleveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChapitreEleveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapitreEleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
