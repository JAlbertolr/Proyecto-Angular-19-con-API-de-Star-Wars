import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
  <nav>
    <div class="nav-links">
      <a routerLink="/characters" routerLinkActive="active">Personajes</a>
      <a routerLink="/starships" routerLinkActive="active">Naves</a>
    </div>
    <span class="title">STAR WARS</span>
  </nav>

  <router-outlet></router-outlet>
  
`,
styles: [
  `
    nav {
      display: flex;
      justify-content: space-between; /* Distribuye elementos a los extremos */
      align-items: center;
      padding: 1rem;
      background: #333;
    }

    .nav-links {
      display: flex;
      gap: 1rem;
    }

    nav a {
      color: white;
      text-decoration: none;
      transition: color 0.3s ease-in-out;
      font-size: 20px;
    }
    nav a:hover {
      color: yellow; /* Cambia el color al pasar el mouse */
      
    }

    .active {
      font-weight: bold;
    }

    .title {
      color: gold;
      font-weight: bold;
      font-size:20px;
      
    }
   
   
  `,
],
})
export class AppComponent {
title = '';
}