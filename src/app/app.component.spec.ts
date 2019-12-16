import { TestBed, async, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { GifsService } from './sevices/gifs.service';
import { mockGifServiceFactory } from '../mocks/giphService.mock';
import { MOCK_GIFS_RESPONSE } from '../mocks/giph.mock';

describe('Gif grid component', () => {

  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let nativeElement: Element;
  let giphService: GifsService;

  beforeEach(async(() => {
    // Since I did feature components I could just import the module for the gif as I did in the others
    // But just to show also how would I create a testbed with just the required elements
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ],
      providers: [
        { provide: GifsService, useFactory: mockGifServiceFactory },
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    nativeElement = fixture.nativeElement;
    component = fixture.componentInstance;
    giphService = fixture.debugElement.injector.get(GifsService);
  });

  afterEach(() => fixture.destroy());

  it('should show the gifs and the pagination when the user writes the input', fakeAsync(() => {
    spyOn(giphService, 'getGif').and.callThrough();
    fixture.detectChanges();
    component.gifs$.subscribe((gifs) => {
      expect(gifs.length).toEqual(MOCK_GIFS_RESPONSE.data.length);
      expect(gifs[0].id).toEqual(MOCK_GIFS_RESPONSE.data[0].id);
    });
    component.searchFomcControl.setValue('party');
    tick(601);

    fixture.detectChanges();
    const titles = nativeElement.querySelectorAll('mat-card-title');
    expect(titles).not.toBeNull();
    const pagination = nativeElement.querySelectorAll('mat-paginator');
    expect(pagination).not.toBeNull();
  }));;

});
