import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgorithmOverviewComponent } from './algorithm-overview.component';

describe('AlgorithmOverviewComponent', () => {
  let component: AlgorithmOverviewComponent;
  let fixture: ComponentFixture<AlgorithmOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgorithmOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgorithmOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
