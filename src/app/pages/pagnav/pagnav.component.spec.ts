import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagnavComponent } from './pagnav.component';

describe('PagnavComponent', () => {
  let component: PagnavComponent;
  let fixture: ComponentFixture<PagnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagnavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
