import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../services/swapi.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CharacterDetailComponent } from '../character-detail/character-detail.component';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule, RouterModule, CharacterDetailComponent],
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  characters: any[] = [];
  searchTerm: string = '';
  selectedCharacter: any | null = null;
  loading = true;
  errorMessage = '';

  constructor(private swapiService: SwapiService) {}

  ngOnInit() {
    this.swapiService.getPeople().subscribe({
      next: (data) => {
        this.characters = data.results;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error al obtener personajes:', error);
        this.errorMessage = 'No se pudieron cargar los personajes.';
        this.loading = false;
      },
    });
  }

  get filteredCharacters() {
    if (!this.characters) return []; // Evita errores si `characters` es undefined
  
    return this.characters.filter((c) => 
      c.name?.toLowerCase().includes(this.searchTerm.toLowerCase()) // Verifica que `name` existe
    );
  }
  

  selectCharacter(character: any) {
    this.selectedCharacter = character;
  }
  
}
