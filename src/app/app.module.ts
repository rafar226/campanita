import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { SobrenosotrosComponent } from './componentes/sobrenosotros/sobrenosotros.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { FootComponent } from './componentes/foot/foot.component';
import { SalonComponent } from './componentes/salon/salon.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { NgxWhastappButtonModule } from 'ngx-whatsapp-button';
import { CombosComponent } from './componentes/combos/combos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SobrenosotrosComponent,
    ContactoComponent,
    FootComponent,
    SalonComponent,
    CombosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseconfig),
    NgxWhastappButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
