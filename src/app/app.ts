import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgFor} from '@angular/common';

 type Project = {
  title: string;
  summary: string;
  stack: string[];
  problem: string;
  solution: string;
  outcome: string;
};


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

 

export class App {
  readonly name = 'GYANENDRA.STUDIO';
  readonly tagline = 'Ideas, architected into software.';
  readonly role = 'Full-Stack Software Engineer';

   projects: Project[] = [
    {
      title: 'AI Workspace Portal',
      summary: 'Modern Angular dashboard for internal workflows',
      stack: ['Angular', '.NET', 'SQL'],
      problem: 'Cross-functional teams were tracking work across disconnected tools.',
      solution: 'A unified workspace with workflow visibility, approvals, and role-based access.',
      outcome: 'Improved clarity and reduced time spent on coordination.'
    },
    {
      title: 'Portfolio Intelligence Platform',
      summary: 'AI-assisted engineering workspace demo',
      stack: ['Angular', 'AI', 'TypeScript'],
      problem: 'Portfolio data was fragmented and difficult to explore.',
      solution: 'A structured interface that surfaces meaningful insight and engineering context.',
      outcome: 'Made the experience easier to understand and navigate.'
    },
    {
      title: 'Enterprise Analytics Console',
      summary: 'Data-heavy dashboard for operational reporting',
      stack: ['Angular', '.NET', 'SQL Server'],
      problem: 'Decision-makers needed faster access to operational insight.',
      solution: 'An analytics-focused dashboard built for high-clarity reporting workflows.',
      outcome: 'Improved visibility into operational trends and decision support.'
    }
  ];


}
