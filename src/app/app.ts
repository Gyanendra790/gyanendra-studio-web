import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  readonly name = 'GYANENDRA.STUDIO';
  readonly tagline = 'Ideas, architected into software.';
  readonly role = 'Full-Stack Software Engineer';
}
