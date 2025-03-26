import { CommonModule} from '@angular/common';
import { Component,Input  } from '@angular/core';

@Component({
  selector: 'app-starship-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './starship-detail.component.html',
  styleUrls: ['./starship-detail.component.scss']
})
export class StarshipDetailComponent {
  @Input() starship: any | null = null;
}
