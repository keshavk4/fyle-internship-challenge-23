import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { repoDataTypes, userDataTypes } from '../app.component';
import { RepoCardComponent } from '../repo-card/repo-card.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  standalone: true,
  imports: [CommonModule, RepoCardComponent]
})
export class MainComponent {
  @Input() userInfo!: userDataTypes;
  @Input() repoList!: repoDataTypes[];

  currentPage: number = 1;
  reposPerPage: number = 6;

  /**
   * Calculates the number of pages based on the total number of repositories and the number of repositories per page.
   * @returns The total number of pages.
   */
  get numberOfPages() {
    return Math.ceil(this.repoList.length / this.reposPerPage);
  }

  /**
   * Returns an array of pagination buttons based on the number of pages.
   * @returns {number[]} An array of pagination buttons.
   */
  get paginationButtons(): number[] {
    const buttons = [];
    for (let i = 1; i <= this.numberOfPages; i++) {
      buttons.push(i);
    }
    return buttons;
  }

  /**
   * Sets the current page number.
   * @param pageNumber - The new page number.
   */
  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
  }

  /**
   * Returns the index of an item in an array.
   * @param {number} index - The index of the item.
   * @returns The index of the item.
   */
  trackByIndex(index: number): number {
    return index;
  }
}
