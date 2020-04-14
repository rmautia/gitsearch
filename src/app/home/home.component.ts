import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Github } from '../github-class/github';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  github:Github;

  constructor(private http:HttpClient) { 
  
  }

  ngOnInit() {
    interface ApiResponse{
      user: any;
      repo: any;
      userName: string;
    }

    this.http.get<ApiResponse>("922c8f6ccfa1661f8838da56c0a3d7208480ce60").subscribe(data=>{
      //Successful API request
      this.github = new Github(data.user, data.repo, data.userName)
    })
  }

}
