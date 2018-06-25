import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebInstructionComponent } from './web-instruction.component';

describe('WebInstructionComponent', () => {
  let component: WebInstructionComponent;
  let fixture: ComponentFixture<WebInstructionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebInstructionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
