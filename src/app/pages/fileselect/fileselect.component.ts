import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fileselect',
  templateUrl: './fileselect.component.html',
  styleUrls: ['./fileselect.component.scss']
})
export class FileselectComponent implements OnInit {

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
    }

  ]

  ngOnInit(): void {
  }

}
