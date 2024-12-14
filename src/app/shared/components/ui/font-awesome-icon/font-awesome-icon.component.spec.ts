import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FontAwesomeIconComponent } from './font-awesome-icon.component';

describe('FontAwesomeIconComponent', () => {
  let component: FontAwesomeIconComponent;
  let fixture: ComponentFixture<FontAwesomeIconComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FontAwesomeIconComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FontAwesomeIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
