import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './domains/shared/components/header/header.component';
import { HomeComponent } from './domains/shared/components/home/home.component';
import { FooterComponent } from './domains/shared/components/footer/footer.component';
import { MenusComponent } from './domains/shared/components/menus/menus.component';
import { ContactComponent } from './domains/shared/components/contact/contact.component';

export const routes: Routes = [

    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    }, 
    {
        path: 'home',
        component: HomeComponent, 
    }, 
    {
        path: 'header',
        component: HeaderComponent, 
    },
    {
        path: 'menu',
        component: MenusComponent, 
    },
    {
        path: 'contactanos',
        component: ContactComponent, 
    },
    {
        path: 'footer',
        component: FooterComponent, 
    },


];

@NgModule({
    imports: [RouterModule.forRoot(routes, { 
        useHash: true,  
      preloadingStrategy: PreloadAllModules
    })],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
