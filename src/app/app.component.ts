import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { FormControl, FormGroup } from '@angular/forms';
import { catchError } from 'rxjs';

/**
 * Represents the data types for user data.
 */
type userDataTypes = {
  name: string,
  username: string,
  avatar_url: string,
  bio: string,
  html_url: string,
  location: string,
  twitter_username: string
}

/**
 * Represents the data structure for a repository.
 */
type repoDataTypes = {
  html_url: string,
  name: string,
  description: string,
  topics: string[]
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit{
  constructor(private apiService: ApiService) { }

  /* The variables `isLoading`, `isUserAvailable`, and `isSearched` are boolean flags used to track the state of the application. */
  isLoading: boolean = false;
  isUserAvailable: boolean = false;
  isSearched: boolean = false;

  /* The `userInfo` variable is an object of type `userDataTypes` that stores information about a user. The initial values of these properties are set to empty strings. This object is used to display user information in the application. */
  userInfo: userDataTypes = {
    name: "",
    username: "",
    avatar_url: "",
    bio: "",
    html_url: "",
    location: "",
    twitter_username: ""
  };

  /* Declaring a variable and initializing it as an empty array of type `repoDataTypes[]`. This variable is used to store a list of repository data. */
  repoList: repoDataTypes[] = [];

  /* The code `applyForm = new FormGroup({ username: new FormControl('') });` is creating a form group object named `applyForm`. */
  applyForm = new FormGroup({
    username: new FormControl('')
  });

  /**
   * Handles the form submission.
   * @param login - The login object.
   */
  onSubmit(login: object) {
    this.isLoading = true;
    const username: string = this.applyForm.value.username?.toString() || "";

    /* Making an HTTP request to the `getUser` method of the `apiService` object. It is passing the `username` as a parameter to the `getUser` method. */
    this.apiService.getUser(username).pipe(
      catchError((error) => {
        this.isSearched = true;
        this.isLoading = false;
        return [];
      })
    ).subscribe((data: userDataTypes | any) => {
      if (data.login) {
        this.userInfo = data;
      }
    });

    /* Making an HTTP request to the `getRepos` method of the `apiService` object. It is passing the `username` as a parameter to the `getRepos` method. */
    this.apiService.getRepos(username).subscribe((data: repoDataTypes[] | any) => {
      this.repoList = data;
      this.isUserAvailable = true;
      this.isLoading = false;
    });
  }

  /**
   * Handles the action when the user clicks the back button.
   * Sets the 'isSearched' and 'isUserAvailable' flags to false.
   * Logs the value of 'isUserAvailable' to the console.
   */
  onBack(): void {
    this.isSearched = false;
    this.isUserAvailable = false;
  }

  ngOnInit() {
    // this.apiService.getUser('johnpapa').subscribe(console.log);
  }
}

export { repoDataTypes, userDataTypes }
