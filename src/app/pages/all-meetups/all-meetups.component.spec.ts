import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMeetupsComponent } from './all-meetups.component';

describe('AllMeetupsComponent', () => {
  let component: AllMeetupsComponent;
  let fixture: ComponentFixture<AllMeetupsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AllMeetupsComponent]
    });
    fixture = TestBed.createComponent(AllMeetupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
