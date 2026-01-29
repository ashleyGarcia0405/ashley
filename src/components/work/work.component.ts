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
        'Developed Ridge Regression model (R² = 0.82) to quantify social inflation effects in workers\' compensation mega claims by establishing pre-2012 economic baseline from macroeconomic indicators and applying residual analysis to isolate unexplained variance attributable to societal and legal cost drivers post-2012',
        'Addressed severe multicollinearity in time-series data by implementing iterative VIF-based feature selection to reduce 17 macroeconomic indicators (FRED) to 3 core predictors while preserving model interpretability, and applied temporal validation to establish pre-2012 baseline for extrapolation-based social inflation measurement'
      ]
    },
    {
      title: 'Software Engineer Intern',
      company: 'Spotify',
      location: 'New York, NY',
      startDate: 'June 2025',
      endDate: 'Aug 2025',
      description: [
        'Built distributed content availability audit system using Java microservices with gRPC APIs, processing entity mappings across 12+ geographic regions through mulitloader patterns and cache integration for real-time content validation to support 6+ engineering teams within Spotify',
        'Designed fault tolerant regional audit infrastructure with BigTable persistence, and Kubernetes deployments, handling concurrent multi-region queries with custom exception handling and service mesh integration for 99.9% uptime',
      ]
    },
    {
      title: 'Software Engineer Intern',
      company: 'Asakana',
      location: 'New York, NY',
      startDate: 'May 2025',
      endDate: 'Aug 2025',
      description: [
        'Architected and developed full-stack MVP for B2B seafood marketplace using Next.js 15 (React 18, TypeScript), MongoDB, and SendGrid, connecting suppliers with buyers through automated order and quote workflows',
        'Built scalable backend with 15+ RESTful API endpoints using Next.js API routes, implementing role-based access control and supplier-buyer relationship management with MongoDB connection pooling',
        'Designed and implemented database schema with 6 core collections supporting multi-tenant architecture'
      ],
    },
    {
      title: 'Research Assistant',
      company: 'Lamont-Doherty Earth Observatory',
      location: 'New York, NY',
      startDate: 'Oct 2024',
      endDate: 'May 2025',
      description: [
        'Extended a 4D JavaScript-based, web-accessible interactive viewer for seismicity monitoring at Axial Seamount',
        'Migrated large-scale seismic data analysis programs to the cloud using AWS, leveraging containers and Docker for scalable, efficient processing as part of the SCOPED project'
      ]
    }
  ];
}
