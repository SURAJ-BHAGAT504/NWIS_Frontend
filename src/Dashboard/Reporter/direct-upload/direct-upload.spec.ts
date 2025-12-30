import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectUpload } from './direct-upload';

describe('DirectUpload', () => {
  let component: DirectUpload;
  let fixture: ComponentFixture<DirectUpload>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectUpload]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectUpload);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
