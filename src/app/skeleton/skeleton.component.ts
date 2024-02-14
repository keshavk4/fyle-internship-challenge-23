import { Component } from '@angular/core';
import { RepoSkeletonComponent } from '../repo-skeleton/repo-skeleton.component';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss'],
  standalone: true,
  imports: [RepoSkeletonComponent]
})
export class SkeletonComponent {

}
