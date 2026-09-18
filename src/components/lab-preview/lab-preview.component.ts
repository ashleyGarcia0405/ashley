import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LAB_EXPERIMENTS } from '../../data/lab-experiments';

@Component({
  selector: 'app-lab-preview',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './lab-preview.component.html',
  styleUrls: ['./lab-preview.component.css']
})
export class LabPreviewComponent {
  latest = LAB_EXPERIMENTS.slice(0, 2);
}
