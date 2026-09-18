import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LAB_EXPERIMENTS } from '../../data/lab-experiments';

@Component({
  selector: 'app-lab',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.css']
})
export class LabComponent {
  experiments = LAB_EXPERIMENTS;
}
