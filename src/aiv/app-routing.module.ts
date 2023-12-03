import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  routes: Routes = [
    {
      path: 'home-page',
      loadChildren: () =>
        import('./screens/home-page/home-page.module').then(
          (m) => m.HomePageModule
        ),
    },
    {
      path: 'uploader',
      loadChildren: () =>
        import('./screens/uploader/uploader.module').then(
          (m) => m.UploaderModule
        ),
    },
  ];
}
