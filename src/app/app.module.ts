import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';
import { ScreentwoComponent } from './pages/screentwo/screentwo.component';
import { ListviewComponent } from './pages/listview/listview.component';
import { SearchresultsComponent } from './pages/searchresults/searchresults.component';
import { SearchfilterComponent } from './pages/searchfilter/searchfilter.component';
import { PagnavComponent } from './pages/pagnav/pagnav.component';
import { FileselectComponent } from './pages/fileselect/fileselect.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarMenuComponent,
    ScreentwoComponent,
    ListviewComponent,
    SearchresultsComponent,
    SearchfilterComponent,
    PagnavComponent,
    FileselectComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
