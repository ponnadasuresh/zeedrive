import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.scss']
})
export class ListviewComponent implements OnInit {

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
