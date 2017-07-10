import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'planesAlimenticios'},
  {path: 'planesAlimenticios', loadChildren: 'app/planes-alimenticios/planes-alimenticios.module#PlanesAlimenticiosModule'}
]
@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
