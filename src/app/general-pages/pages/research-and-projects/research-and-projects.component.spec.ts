import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchAndProjectsComponent } from './research-and-projects.component';

describe('ResearchAndProjectsComponent', () => {
  let component: ResearchAndProjectsComponent;
  let fixture: ComponentFixture<ResearchAndProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchAndProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearchAndProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
