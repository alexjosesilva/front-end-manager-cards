import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessoModalComponent } from './sucesso-modal.component';

describe('SucessoModalComponent', () => {
  let component: SucessoModalComponent;
  let fixture: ComponentFixture<SucessoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucessoModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SucessoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
