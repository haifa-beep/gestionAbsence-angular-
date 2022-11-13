import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleEleveComponent } from './module-eleve.component';

describe('ModuleEleveComponent', () => {
  let component: ModuleEleveComponent;
  let fixture: ComponentFixture<ModuleEleveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleEleveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleEleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
