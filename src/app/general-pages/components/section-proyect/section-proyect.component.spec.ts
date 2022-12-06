import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionProyectComponent } from './section-proyect.component';

describe('SectionProyectComponent', () => {
  let component: SectionProyectComponent;
  let fixture: ComponentFixture<SectionProyectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionProyectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionProyectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
