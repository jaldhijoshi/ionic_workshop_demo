import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductYmalPage } from './product-ymal.page';

describe('ProductYmalPage', () => {
  let component: ProductYmalPage;
  let fixture: ComponentFixture<ProductYmalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductYmalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductYmalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
