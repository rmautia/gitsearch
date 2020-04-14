import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';


import { Observable } from 'rxjs-compat';
import 'rxjs-compat'

@Injectable({
  providedIn: 'root'
})
export class GithubRequestService {

  private userName: string;
    private clientId: string;
    private clientSecret: string;
    private getUserUrl: string;
    private getRepoUrl: string;
    private getReadmeUrl: string;

  constructor(private _http: HttpClient) { 
    this.userName = '';
    this.clientId = '60b9f23dedffbdfc476c';
    this.clientSecret = '922c8f6ccfa1661f8838da56c0a3d7208480ce60';
    this.getUserUrl = 'https://api.github.com/users/[userName]?client_id=[clientId]&client_secret=[clientSecret]';
    this.getRepoUrl = 'https://api.github.com/users/[userName]/repos?client_id=[clientId]&client_secret=[clientSecret]';
    this.getReadmeUrl = 'https://api.github.com/repos/[userName]/[repo]/readme?client_id=[clientId]&client_secret=[clientSecret]';


  }
  getUser(userName) {
    this.userName = userName;
    if (this.userName) {
      return this._http.get(this.getUserUrl.replace('[userName]', this.userName)
        .replace('[clientId]', this.clientId)
        .replace('[clientSecret]', this.clientSecret))
       // .map(res => res.json())
        .catch(this.handleError)        
      }
  }
  getRepo(userName) {
    this.userName = userName;
    if (this.userName) {
        return this._http.get(this.getRepoUrl.replace('[userName]', this.userName)
        .replace('[clientId]', this.clientId)
        .replace('[clientSecret]', this.clientSecret))
        //.map(res => res.json())
        .catch(this.handleError);
          }
      
    }
    getReadme(repoName: string, userName: string) {
      this.userName = userName;
      if (this.userName) {
          return this._http.get(this.getReadmeUrl.replace('[userName]', this.userName)
              .replace('[clientId]', this.clientId)
              .replace('[clientSecret]', this.clientSecret)
              .replace('[repo]', repoName))
             // .map(res => res.json())
              .catch(this.handleError);
      }
  }
    updateUser(userName: string) {
      this.userName = userName;
    }
    updateRepo(getRepoUrl: string){
      this.getRepoUrl = getRepoUrl;
    }
    updateReadme(getReadmeUrl: string) {
      this.getReadmeUrl = getReadmeUrl;
    }

    private handleError(error: any) {

      if (error.status === 401) {
          return Observable.throw(error.status);
      } else {
          return Observable.throw(error.status || 'Server error');
      }
  }
}
  

