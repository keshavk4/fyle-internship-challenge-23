# Fyle Frontend Challenge

This project is a simple Angular application that allows users to search for GitHub users by their username and view their profile information along with a list of their repositories.

## Features

- **User Search:** Users can enter a GitHub username in the search box and submit the form to retrieve user information.
- **Display User Information:** Upon successful search, the application displays the user's name, bio, location, Twitter username, and avatar. It also provides links to the user's GitHub profile and Twitter account.
- **Display Repositories:** The application lists the repositories of the searched user, showing the repository name, description, and topics.
- **Pagination:** Repositories are paginated, with options to navigate between pages.
- **Error Handling:** Error messages are displayed if the searched user is not found or if there is an issue fetching data from the GitHub API.

## Technologies Used

- **Angular:** The frontend framework used to build the application.
- **TypeScript:** The programming language used for Angular development.
- **TailwindCSS:** Styling languages for presenting the application.
- **GitHub API:** Used to retrieve user information and repositories based on the provided username.
- **RxJS:** Used for handling asynchronous operations and observables.

## Installation

To run this application locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the project dependencies.
4. Run `ng serve` to start the development server.
5. Open your browser and visit `http://localhost:4200` to view the application.

## Usage

1. Enter a GitHub username in the search box.
2. Click the "Submit" button or press Enter to search for the user.
3. If the user is found, their profile information and repositories will be displayed.
4. Use pagination buttons to navigate between repository pages.
5. Click on repository names to view them on GitHub.