import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbCarouselConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxWhastappButtonModule } from 'ngx-whatsapp-button';
import { AngularFireModule } from '@angular/fire';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { SobrenosotrosComponent } from './componentes/sobrenosotros/sobrenosotros.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { FootComponent } from './componentes/foot/foot.component';
import { environment } from 'src/environments/environment';
import { CombosComponent } from './componentes/combos/combos.component';
import { CarouselComponent } from './componentes/carousel/carousel.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SobrenosotrosComponent,
    ContactoComponent,
    FootComponent,
    CombosComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseconfig),
    NgxWhastappButtonModule,
    NgbModule,
  ],
  providers: [NgbCarouselConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
