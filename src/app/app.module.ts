import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BuscadorComponent } from './pokemon/buscador/buscador.component';
import { BodyComponent } from './pokemon/body/body.component';

@NgModule({
  declarations: [AppComponent, BuscadorComponent, BodyComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
