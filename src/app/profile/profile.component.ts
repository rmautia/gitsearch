import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'


import { Github } from '../github-class/github';
import { GithubRequestService } from '../github-http/github-request.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userName: any;
  user: any;
  repo: any = [];
  readmeMdLink: string;

  constructor(private _gitgubRequestService: GithubRequestService, private route: ActivatedRoute, public router: Router) { 
    this.user = false;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((v: any) => {
      this.userName = v.userName;
    });
    this._gitgubRequestService.getUser(this.userName).subscribe(user => {
      console.log(user);
      this.user = user;
    });
    this._gitgubRequestService.getRepo(this.userName).subscribe(repo => {
      console.log(repo);
      this.repo = repo;
    });
    
  }
  goSearch() {
    this.router.navigate(['/home-form'])
  }
  

}
