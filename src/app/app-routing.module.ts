import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarouselComponent } from './componentes/carousel/carousel.component';

import { CombosComponent } from './componentes/combos/combos.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { FootComponent } from './componentes/foot/foot.component';
import { FotosComponent } from './componentes/fotos/fotos.component';
import { HomeComponent } from './componentes/home/home.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { SobrenosotrosComponent } from './componentes/sobrenosotros/sobrenosotros.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'navbar', component: NavbarComponent},
  { path: 'home', component: HomeComponent },
  { path: 'sobrenosotros', component: SobrenosotrosComponent},
  { path: 'contacto', component: ContactoComponent },
  { path: 'foot', component: FootComponent },
  { path: 'combos', component: CombosComponent },
  { path: 'fotos', component: FotosComponent },
  { path: 'carousel', component: CarouselComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'ignore',
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
