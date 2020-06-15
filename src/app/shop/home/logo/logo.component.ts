import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
  
  // Slick slider config
  public logoSlideConfig: any = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [{
        breakpoint: 1367,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };

  // Logo
  public logo = [{
      image: 'https://res.gjs.so/website/img/kickstarter-logo-dark.png',
    }, {
      image: 'https://res.gjs.so/website/img/pr-newswire.png',
    }, {
      image: 'https://res.gjs.so/website/img/tencent.png',
    }, {
      image: 'https://res.gjs.so/website/img/36.png',
    }, {
      image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJENkU5ODczRTMyRjExRThCNDAyODQ5MDdERkNGRjJFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJENkU5ODc0RTMyRjExRThCNDAyODQ5MDdERkNGRjJFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkQ2RTk4NzFFMzJGMTFFOEI0MDI4NDkwN0RGQ0ZGMkUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkQ2RTk4NzJFMzJGMTFFOEI0MDI4NDkwN0RGQ0ZGMkUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6IuJIAAAAHFklEQVR42sRY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',
    }, {
      image: 'https://res.gjs.so/website/img/csdn.png',
    }, {
      image: 'https://res.gjs.so/website/img/FOX.png',
    }, {
      image: 'https://res.gjs.so/website/img/jiemian.png',        
  }]

}
