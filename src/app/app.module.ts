// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,  // Importa o BrowserModule para o suporte de navegação no navegador
    FooterComponent, 
    AppRoutingModule
  ],
  providers: [],
  bootstrap: []  // Define o componente inicial
})
export class AppModule {}