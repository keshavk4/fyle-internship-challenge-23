import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  /**
   * Retrieves user information from the GitHub API.
   * @param {string} githubUsername - The GitHub username of the user.
   * @returns A Promise that resolves to the user information.
   */
  getUser(githubUsername: string): Observable<object> {
    return this.httpClient.get(`https://api.github.com/users/${githubUsername}`);
  }

  // implement getRepos method by referring to the documentation. Add proper types for the return type and params 

  /**
   * Retrieves the repositories of a given GitHub user.
   * @param {string} githubUsername - The username of the GitHub user.
   * @returns A Promise that resolves to the repositories of the GitHub user.
   */
  getRepos(githubUsername: string): Observable<object> {
    return this.httpClient.get(`https://api.github.com/users/${githubUsername}/repos`);
  }
}
