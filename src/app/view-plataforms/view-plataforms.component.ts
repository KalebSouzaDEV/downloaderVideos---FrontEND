import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-plataforms',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './view-plataforms.component.html',
  styleUrl: './view-plataforms.component.scss'
})
export class ViewPlataformsComponent {
    constructor(private router: Router){

    }


    changePage(page: String) {
      console.log('oxi', `plataform/${page}`)
      this.router.navigate([`plataform/${page}`]);
    }
}
