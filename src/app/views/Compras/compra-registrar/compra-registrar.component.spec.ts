import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraRegistrarComponent } from './compra-registrar.component';

describe('CompraRegistrarComponent', () => {
  let component: CompraRegistrarComponent;
  let fixture: ComponentFixture<CompraRegistrarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompraRegistrarComponent]
    });
    fixture = TestBed.createComponent(CompraRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
