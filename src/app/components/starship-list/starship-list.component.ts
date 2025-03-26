import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../services/swapi.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StarshipDetailComponent } from '../starship-detail/starship-detail.component';

@Component({
  selector: 'app-starship-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule, RouterModule, StarshipDetailComponent],
  templateUrl: './starship-list.component.html',
  styleUrls: ['./starship-list.component.scss']
})
export class StarshipListComponent implements OnInit{
  
  starships: any[]=[];
  searchTerm: string='';
  loading=true;
  errorMessage='';
  selectedStarship: any | null = null;
  
  constructor(private swapiService: SwapiService){ 
  }
  

  ngOnInit(): void {
    this.swapiService.getStarships().subscribe({
      next: (data) => {
        this.starships = data.results;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error al obtener la nave:', error);
        this.errorMessage = 'No se pudieron cargar las naves.';
        this.loading = false;
      },
    });
  }

  get filteredStarships() {
    return this.starships.filter((c) => 
      c.name?.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  selectStarship(starship: any) {
    this.selectedStarship = starship;
  }
}
