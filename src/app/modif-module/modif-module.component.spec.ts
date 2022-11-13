import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifModuleComponent } from './modif-module.component';

describe('ModifModuleComponent', () => {
  let component: ModifModuleComponent;
  let fixture: ComponentFixture<ModifModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
