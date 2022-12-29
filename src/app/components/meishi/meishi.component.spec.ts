import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeishiComponent } from './meishi.component';

describe('MeishiComponent', () => {
  let component: MeishiComponent;
  let fixture: ComponentFixture<MeishiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeishiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeishiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
