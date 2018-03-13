import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  acceptFile = false;
  uFile = null;
  fileArray = [];

  constructor() { }

  ngOnInit() {
    console.log('here');
  }

  handleFileInput(file: File) {
    if (file.size < 500000) {
      console.log('acepted file');
      this.acceptFile = true;
      this.uFile = file;
    } else {
      console.log('Size error');
    }
  }

  setFiles(){
    this.fileArray.push(this.uFile);
    this.uFile = null;
  }

}
