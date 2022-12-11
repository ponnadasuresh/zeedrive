import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-screentwo',
  templateUrl: './screentwo.component.html',
  styleUrls: ['./screentwo.component.scss']
})
export class ScreentwoComponent implements OnInit {

  constructor() { }
  public folders = [
    {
    url: 'assets/images/foldericon.png',
    title:'Folder two',
    subtitle: '150 items'
  },
  {
    url: 'assets/images/foldericon.png',
    title:'Folder two',
    subtitle: '150 items'
  },
  {
    url: 'assets/images/foldericon.png',
    title:'Folder two',
    subtitle: '150 items'
  },
  {
    url: 'assets/images/foldericon.png',
    title:'Folder two',
    subtitle: '150 items'
  },
  {
    url: 'assets/images/foldericon.png',
    title:'Folder two',
    subtitle: '150 items'
  },
  {
    url: 'assets/images/foldericon.png',
    title:'Folder two',
    subtitle: '150 items'
  }
 

]
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
