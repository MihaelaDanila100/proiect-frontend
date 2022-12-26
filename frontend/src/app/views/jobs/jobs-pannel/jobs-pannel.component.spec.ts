import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsPannelComponent } from './jobs-pannel.component';

describe('JobsPannelComponent', () => {
  let component: JobsPannelComponent;
  let fixture: ComponentFixture<JobsPannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsPannelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsPannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
