import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  url = '';
  colorsList = ['black','aqua',  '#1b1bff', 'fuchsia', 'gray', 'green', 'greenyellow',
  'lime', '#ad0404b3', '#6464ff', '#caca00','skyblue', 'orange', '#e703e7', '#ff0000a8', 
  'silver', '#01d4d4', 'ghostwhite', 'yellow'];
  
  exportPdf:boolean = true;
  exportSignatures:boolean = true;
  // url = 'http://www.africau.edu/images/default/sample.pdf';
  getPdfUrl(event:any){
    console.log("Home Exported pdf url! ",event)
  }
  getSignaturesList(event:any){
    console.log("Home Exported signatures List! ",event)
  }
}
