import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterListElementComponent } from './master-list-element.component';

describe('MasterListElementComponent', () => {
  let component: MasterListElementComponent;
  let fixture: ComponentFixture<MasterListElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterListElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
