import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsReferencesComponent } from './skills-references.component';

describe('SkillsReferencesComponent', () => {
  let component: SkillsReferencesComponent;
  let fixture: ComponentFixture<SkillsReferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsReferencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsReferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
