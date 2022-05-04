import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsLangComponent } from './questions-lang.component';

describe('QuestionsLangComponent', () => {
  let component: QuestionsLangComponent;
  let fixture: ComponentFixture<QuestionsLangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionsLangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsLangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
