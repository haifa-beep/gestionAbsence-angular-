import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustifAdminComponent } from './justif-admin.component';

describe('JustifAdminComponent', () => {
  let component: JustifAdminComponent;
  let fixture: ComponentFixture<JustifAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JustifAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JustifAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
