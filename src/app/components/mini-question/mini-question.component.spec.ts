import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniQuestionComponent } from './mini-question.component';

describe('MiniQuestionComponent', () => {
  let component: MiniQuestionComponent;
  let fixture: ComponentFixture<MiniQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
