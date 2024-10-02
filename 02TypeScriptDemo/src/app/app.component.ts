import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimitivosOtrosComponent } from './primitivos-otros/primitivos-otros.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimitivosOtrosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '02TypeScriptDemo';
}
