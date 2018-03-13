import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {
  constructor() { }

  @Input() file: any;

  ngOnInit() {
    console.log(this.file);
  }

  downloadFile(){
    var blob = new Blob([this.file], { type: this.file.type });
    var url= window.URL.createObjectURL(blob);
    window.open(url);
  }

}
