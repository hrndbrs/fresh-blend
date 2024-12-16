import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '@/lib/components/navbar/navbar.component';
import { Footer } from '@/lib/components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'FreshBlend';
}
