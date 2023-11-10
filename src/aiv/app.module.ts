import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageUploaderDirective } from './directives/image_uploader/image-uploader.directive';
import { MediaUploaderComponent } from './components/media-uploader/media-uploader.component';

@NgModule({
  declarations: [AppComponent, ImageUploaderDirective, MediaUploaderComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
