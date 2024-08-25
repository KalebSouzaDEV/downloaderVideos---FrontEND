import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPlataformsComponent } from './view-plataforms.component';

describe('ViewPlataformsComponent', () => {
  let component: ViewPlataformsComponent;
  let fixture: ComponentFixture<ViewPlataformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewPlataformsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPlataformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
