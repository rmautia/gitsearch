import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { GithubRequestService } from '../github-http/github-request.service'

@Component({
  selector: 'app-readme',
  templateUrl: './readme.component.html',
  styleUrls: ['./readme.component.css']
})
export class ReadmeComponent implements OnInit {

  readmeMdString: string;
  repoName: string;
  userName: string;

  constructor(private _githubrequestservice: GithubRequestService, private route: ActivatedRoute) {
   }

  ngOnInit(): void {
    this.route.queryParams.subscribe((v: any) => {
      this.repoName = v.repoName;
      this.userName = v.userName;
      this.loadReadme(this.repoName);
    });
  }
  loadReadme( repoName: any) {
    this._githubrequestservice.getReadme(repoName, this.userName) .subscribe(readme => {
      // console.log(readme);
      const decodedString = atob(this.readmeMdString)
      console.log(decodedString);
      this.readmeMdString = decodedString;

      //this.htmlContent = this.converter.makeHtml(this.encodedText);
    });
  }

}
