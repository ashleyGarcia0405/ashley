import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface WorkExperience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
}

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent {
  experiences: WorkExperience[] = [
    {
      title: 'AI Studio Fellow',
      company: 'Marsh McLennan',
      location: 'New York, NY',
      startDate: 'Sept 2025',
      endDate: 'Dec 2025',
      description: [
        'Built Ridge regression model (R²=0.82) to decompose claims cost growth into macro-driven vs idiosyncratic components',
        'Performed feature selection via VIF and evaluated temporal stability using rolling-window validation to detect structural breaks in underlying cost drivers'
      ]
    },
    {
      title: 'Software Engineer Intern',
      company: 'Spotify',
      location: 'New York, NY',
      startDate: 'June 2025',
      endDate: 'Aug 2025',
      description: [
        'Built distributed content availability audit system using Java microservices with gRPC APIs, processing entity mappings across 5 geographic regions through multiloader patterns and cache integration for real-time content validation',
        'Integrated the audit service into Spotify\'s existing backend infrastructure, supporting multi-region gRPC queries across Kubernetes-deployed services and persisting audit results in Bigtable'
      ]
    },
    {
      title: 'Software Engineer Intern',
      company: 'Asakana',
      location: 'New York, NY',
      startDate: 'May 2025',
      endDate: 'Aug 2025',
      description: [
        'Built full-stack MVP for a B2B seafood marketplace using Next.js, TypeScript, and MongoDB, with automated order and quote workflows connecting suppliers and buyers',
        'Developed 15+ REST API endpoints with role-based access control and supplier-buyer relationship management',
        'Designed MongoDB schema with 6 core collections supporting multi-tenant architecture'
      ],
    },
    {
      title: 'Research Assistant',
      company: 'Lamont-Doherty Earth Observatory',
      location: 'New York, NY',
      startDate: 'Oct 2024',
      endDate: 'May 2025',
      description: [
        'Extended a 4D JavaScript-based interactive seismicity viewer for Axial Seamount, improving accessibility of geophysical monitoring data through a web-accessible interface',
        'Migrated large-scale seismic analysis pipelines to AWS using Docker for scalable processing'
      ]
    }
  ];
}
