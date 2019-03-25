import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadContactsComponent } from './load-contacts.component';

describe('LoadContactsComponent', () => {
  let component: LoadContactsComponent;
  let fixture: ComponentFixture<LoadContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
