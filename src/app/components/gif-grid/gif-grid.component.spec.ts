import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import {MatCardModule} from '@angular/material/card';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { GifGridComponent } from './gif-grid.component';
import { MOCK_GIFS_RESPONSE } from '../../../mocks/giph.mock';

describe('Gif grid component', () => {

  let fixture: ComponentFixture<GifGridComponent>;
  let component: GifGridComponent;
  let nativeElement: Element;

  beforeEach(async(() => {
    // Since I did feature components I could just import the module for the gif as I did in the others
    // But just to show also how would I create a testbed with just the required elements
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        MatCardModule,
      ],
      declarations: [
        GifGridComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GifGridComponent);
    nativeElement = fixture.nativeElement;
    component = fixture.componentInstance;
    component.gifs = MOCK_GIFS_RESPONSE.data;
  });

  afterEach(() => fixture.destroy());

  it('should render the first 2 gifs only', () => {
    component.cardDisplayConfig = {
      pageIndex: 0,
      previousPageIndex: 0,
      pageSize: 2,
      length: 100,
    };

    fixture.detectChanges();
    const titles = nativeElement.querySelectorAll('mat-card-title');
    expect(titles).not.toBeNull();
    expect(titles.length).toBe(2);
    expect(titles[0].innerHTML).toContain('Title: Party');
  });

  it('should render the last 2 gifs only', () => {
    component.cardDisplayConfig = {
      pageIndex: 1,
      previousPageIndex: 0,
      pageSize: 2,
      length: 100,
    };

    fixture.detectChanges();
    const titles = nativeElement.querySelectorAll('mat-card-title');
    expect(titles).not.toBeNull();
    expect(titles[1].innerHTML).toContain('Title: Metallica');
  });

});
