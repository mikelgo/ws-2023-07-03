import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemLeakComponent } from './mem-leak.component';

describe('MemLeakComponent', () => {
  let component: MemLeakComponent;
  let fixture: ComponentFixture<MemLeakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MemLeakComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemLeakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
