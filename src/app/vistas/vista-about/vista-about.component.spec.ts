import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaAboutComponent } from './vista-about.component';

describe('VistaAboutComponent', () => {
  let component: VistaAboutComponent;
  let fixture: ComponentFixture<VistaAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
