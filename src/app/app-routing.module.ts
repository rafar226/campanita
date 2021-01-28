import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CombosComponent } from './componentes/combos/combos.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { FootComponent } from './componentes/foot/foot.component';
import { HomeComponent } from './componentes/home/home.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { SalonComponent } from './componentes/salon/salon.component';
import { SobrenosotrosComponent } from './componentes/sobrenosotros/sobrenosotros.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'navbar', component: NavbarComponent},
  { path: 'home', component: HomeComponent },
  { path: 'sobrenosotros', component: SobrenosotrosComponent},
  { path: 'contacto', component: ContactoComponent },
  { path: 'foot', component: FootComponent },
  { path: 'salon', component: SalonComponent },
  { path: 'combos', component: CombosComponent }






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
