import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  url = '';
  colorsList = ['black','aqua',  '#1b1bff', 'fuchsia', 'gray', 'green', 'greenyellow',
  'lime', '#ad0404b3', '#6464ff', '#caca00','skyblue', 'orange', '#e703e7', '#ff0000a8', 
  'silver', '#01d4d4', 'ghostwhite', 'yellow'];
  
  exportPdf:boolean = true;
  exportSignatures:boolean = true;
  // url = 'http://www.africau.edu/images/default/sample.pdf';
  currentLoginUserEmail = 'testhappydocs@yopmail.com';

 peopleInvitationData = [
    {Name: "M usman", Email: "usman.insignia@gmail.com"},
    {Name: "Rahim", Email: "testhappydocs@yopmail.com"},
    {Name: "J. Marks ", Email: "marks@yopmail.com"}
    ];
  constructor() { }

  ngOnInit(): void {
  }

  getPdfUrl(event:any){
    console.log("Home Exported pdf url! ",event)
  }
  getSignaturesList(event:any){
    console.log("Home Exported signatures List! ",event)
  }

}
