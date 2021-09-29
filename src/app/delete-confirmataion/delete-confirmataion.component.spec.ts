import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteConfirmataionComponent } from './delete-confirmataion.component';

describe('DeleteConfirmataionComponent', () => {
  let component: DeleteConfirmataionComponent;
  let fixture: ComponentFixture<DeleteConfirmataionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteConfirmataionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteConfirmataionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
