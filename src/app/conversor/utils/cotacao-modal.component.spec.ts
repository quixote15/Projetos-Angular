import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CotacaoModalComponent } from './cotacao-modal.component';

describe('CotacaoModalComponent', () => {
  let component: CotacaoModalComponent;
  let fixture: ComponentFixture<CotacaoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CotacaoModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CotacaoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
