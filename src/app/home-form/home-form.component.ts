import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { GithubRequestService } from '../github-http/github-request.service';

@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.css']
})
export class HomeFormComponent implements OnInit {
  
  userName: string;

  constructor(private _githubRequestService: GithubRequestService, public router:Router) { 
  }

  searchUser() {
    this._githubRequestService.updateUser(this.userName);
    this.router.navigate(['/profile'], {queryParams: {userName: this.userName}});
    }
  searchRepo() {
    this._githubRequestService.updateRepo(this.userName);
    this.router.navigate(['/profile'], {queryParams: {updateRepo: this.userName}})
  }
  ngOnInit() {    
  }

}
