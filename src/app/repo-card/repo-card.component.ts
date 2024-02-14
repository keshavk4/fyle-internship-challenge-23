import { Component, Input } from '@angular/core';
import { repoDataTypes } from '../app.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.scss'],
  imports: [CommonModule],
  standalone: true
})
export class RepoCardComponent {
  /**
   * Represents a repository data object.
   */
  @Input() repo!: repoDataTypes;

  /**
   * Returns the index as the unique identifier for tracking items in a collection.
   * @param {number} index - The index of the item in the collection.
   * @returns The index of the item.
   */
  trackByIndex(index: number): number {
    return index;
  }
}
