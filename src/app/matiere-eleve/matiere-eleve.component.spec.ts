import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatiereEleveComponent } from './matiere-eleve.component';

describe('MatiereEleveComponent', () => {
  let component: MatiereEleveComponent;
  let fixture: ComponentFixture<MatiereEleveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatiereEleveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatiereEleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
