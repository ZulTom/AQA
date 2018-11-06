import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import  { AQ } from '../AQ';

@Component({
  selector: 'app-democomponent',
  templateUrl: './democomponent.component.html',
  styleUrls: ['./democomponent.component.css']
})
export class DemocomponentComponent implements OnInit {

  constructor(private http: HttpClient) { }
  data_aq : AQ[]
  ngOnInit() {
  }
  connectAPI(){
  	this.http.get('https://reqres.in/api/users?page=2').subscribe(data =>{
  		this.data_aq = data['data']
  	})
  }

}
