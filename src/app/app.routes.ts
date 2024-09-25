import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './domains/shared/components/header/header.component';
import { HomeComponent } from './domains/shared/components/home/home.component';

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


];

@NgModule({
    imports: [RouterModule.forRoot(routes, { 
        useHash: true,  
      preloadingStrategy: PreloadAllModules
    })],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
