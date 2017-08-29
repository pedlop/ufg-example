import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaNotFoundComponent } from './pagina-not-found.component';

describe('PaginaNotFoundComponent', () => {
  let component: PaginaNotFoundComponent;
  let fixture: ComponentFixture<PaginaNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
