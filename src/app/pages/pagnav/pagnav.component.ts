import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagnav',
  templateUrl: './pagnav.component.html',
  styleUrls: ['./pagnav.component.scss']
})
export class PagnavComponent implements OnInit {

  constructor() { }
  public recentImages = [
    {
      url: 'assets/images/recentimage.png',
      title: 'Image-1.pdf file'
    },
    {
      url: 'assets/images/recentimage.png',
      title: 'Image-1.pdf file'
    },
    {
      url: 'assets/images/recentimage.png',
      title: 'Image-1.pdf file'
    },
    {
      url: 'assets/images/recentimage.png',
      title: 'Image-1.pdf file'
    },
    {
      url: 'assets/images/recentimage.png',
      title: 'Image-1.pdf file'
    },
    {
      url: 'assets/images/recentimage.png',
      title: 'Image-1.pdf file'
    }

  ]
 

  ngOnInit(): void {
  }

}
