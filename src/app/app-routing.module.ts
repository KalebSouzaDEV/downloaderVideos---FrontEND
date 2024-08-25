import { ApplicationConfig, NgModule, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, RouterModule, Routes } from '@angular/router';
import { ViewPlataformsComponent } from './view-plataforms/view-plataforms.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { provideHttpClient, withFetch } from '@angular/common/http';

const routes: Routes = [
  {path: "view-plataforms", component: ViewPlataformsComponent},
  {path: "plataform/youtube", component: YoutubeComponent},
  { path: '', redirectTo: '/view-plataforms', pathMatch: 'full' }, // Redireciona para a página inicial
  { path: '**', redirectTo: '/view-plataforms' } // Redireciona qualquer rota não definida para a página inicial
]


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    provideHttpClient(withFetch()),
  ]
};

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
