import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectsListComponent } from './redirects-list.component';

describe('RedirectsListComponent', () => {
  let component: RedirectsListComponent;
  let fixture: ComponentFixture<RedirectsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedirectsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
