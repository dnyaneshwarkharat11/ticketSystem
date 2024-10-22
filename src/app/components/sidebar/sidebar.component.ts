import { Component } from '@angular/core';
import { ToggleService } from '../../services/toggle.service';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion'; // Import MatExpansionModule
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
    RouterModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  isToggled = false;

  constructor(private toggleService: ToggleService) {
    this.toggleService.isToggled$.subscribe(isToggled => {
      this.isToggled = isToggled;
  });
  }

  toggle() {
        this.toggleService.toggle();
    }
}
