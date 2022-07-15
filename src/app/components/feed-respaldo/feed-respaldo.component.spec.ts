import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedRespaldoComponent } from './feed-respaldo.component';

describe('FeedRespaldoComponent', () => {
  let component: FeedRespaldoComponent;
  let fixture: ComponentFixture<FeedRespaldoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedRespaldoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedRespaldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
