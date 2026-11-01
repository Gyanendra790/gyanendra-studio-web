import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgFor} from '@angular/common';

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

  projects = [
  {
    title: 'AI Workspace Portal',
    summary: 'Modern Angular dashboard for internal workflows',
    stack: ['Angular', '.NET', 'SQL']
  },
  {
    title: 'Portfolio Intelligence Platform',
    summary: 'AI-assisted engineering workspace demo',
    stack: ['Angular', 'AI', 'TypeScript']
  },
  {
    title: 'Enterprise Analytics Console',
    summary: 'Data-heavy dashboard for operational reporting',
    stack: ['Angular', '.NET', 'SQL Server']
  }
];


}
