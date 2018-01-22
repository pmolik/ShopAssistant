//Plik zawiera ścieżki do komponentów
import {Routes, RouterModule } from '@angular/router';

import {CarouselComponent} from '../app/components/carousel/carousel.component'
import {CartComponent} from "./components/cart/cart.component";
import {AboutComponent} from "./components/about/about.component";


const routes: Routes = [
  {
    path: 'start',
    component: CarouselComponent,
  },

  {
    path: 'cart',
    component: CartComponent,
  },

  {
    path: 'about',
    component: AboutComponent,
  },

  {
    path: '',
    redirectTo: '/start',
    pathMatch: 'full'
  },
];


export const appRouterModule = RouterModule.forRoot(routes);
