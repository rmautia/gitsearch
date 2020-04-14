import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { GithubRequestService } from '../github-http/github-request.service';

@Component({
  selector: 'app-repohome',
  templateUrl: './repohome.component.html',
  styleUrls: ['./repohome.component.css']
})
export class RepohomeComponent implements OnInit {

  getRepoUrl: string;
  userName: string;

  constructor(private _githubRequestService: GithubRequestService, public router: Router) {

   }
   searchUser() {
    this._githubRequestService.updateUser(this.userName);
    this.router.navigate(['/profile'], {queryParams: {userName: this.userName}});
    }

   searchRepo() {
    this._githubRequestService.updateRepo(this.getRepoUrl);
    this.router.navigate(['/profile'], {queryParams: {updateRepo: this.getRepoUrl}})
  }

  ngOnInit(): void {
  }

}
