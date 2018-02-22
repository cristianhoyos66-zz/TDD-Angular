import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { AsyncFakeasyncComponent } from './async-fakeasync.component';
import { By } from '@angular/platform-browser';

describe('AsyncFakeasyncComponent', () => {
  let component: AsyncFakeasyncComponent;
  let fixture: ComponentFixture<AsyncFakeasyncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncFakeasyncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncFakeasyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title', async(() => {
    fixture.debugElement
      .query(By.css('.set-title'))
      .triggerEventHandler('click', null);

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const value = fixture.debugElement.query(By.css('h1')).nativeElement.innerText;
      expect(value).toEqual('¡Título!');
    });
  }));

  it('should increment after 5 seconds', fakeAsync(() => {
    fixture.debugElement
      .query(By.css('button.increment'))
      .triggerEventHandler('click', null);

    tick(2000);
    fixture.detectChanges();
    const value1 = component.value;
    expect(value1).toBe(0); // value should still be 0 after 2 seconds

    tick(3000);
    fixture.detectChanges();

    const value2 = component.value;
    expect(value2).toBe(1); // 3 seconds later, our value should now be 1
  }));

});
