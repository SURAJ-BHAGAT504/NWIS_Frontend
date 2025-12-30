import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDirectUpload } from './get-direct-upload';

describe('GetDirectUpload', () => {
  let component: GetDirectUpload;
  let fixture: ComponentFixture<GetDirectUpload>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetDirectUpload]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetDirectUpload);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
