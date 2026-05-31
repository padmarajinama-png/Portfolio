import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Navbar,
    Home,
    About,
    Skills,
    Projects,
    Contact,
     FooterComponent
  ],
  templateUrl: './app.html',
 styleUrls: ['./app.css']
})
export class App {}
