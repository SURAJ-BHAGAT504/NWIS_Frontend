import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadedAssignment } from './uploaded-assignment';

describe('UploadedAssignment', () => {
  let component: UploadedAssignment;
  let fixture: ComponentFixture<UploadedAssignment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadedAssignment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadedAssignment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
