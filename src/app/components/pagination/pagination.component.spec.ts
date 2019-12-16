import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { PaginaitonComponent } from './pagination.component';
import { PaginaitonModule } from './pagination.module';

describe('Pagination component', () => {

  let fixture: ComponentFixture<PaginaitonComponent>;
  let component: PaginaitonComponent;
  let nativeElement: Element;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        PaginaitonModule
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaitonComponent);
    nativeElement = fixture.nativeElement;
    component = fixture.componentInstance;
  });

  afterEach(() => fixture.destroy());

  it('should find the pagination if we send the data to it', () => {
    component.pagination = {
      pageIndex: 0,
      pageSize: 5,
      length: 10,
    }
    fixture.detectChanges();
    const paginationElement = nativeElement.querySelector('mat-paginator');
    expect(paginationElement).not.toBeNull();
  });

  it('should not show the pagination component when there is no length', () => {
    component.pagination = {
      pageIndex: 0,
      pageSize: 0,
      length: 0,
    }
    fixture.detectChanges();
    const paginationElement = nativeElement.querySelector('mat-paginator');
    expect(paginationElement).toBeNull();
  });

});
