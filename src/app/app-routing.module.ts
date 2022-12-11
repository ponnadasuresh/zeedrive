import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileselectComponent } from './pages/fileselect/fileselect.component';
import { ListviewComponent } from './pages/listview/listview.component';
import { LoginComponent } from './pages/login/login.component';
import { PagnavComponent } from './pages/pagnav/pagnav.component';
import { ScreentwoComponent } from './pages/screentwo/screentwo.component';
import { SearchfilterComponent } from './pages/searchfilter/searchfilter.component';
import { SearchresultsComponent } from './pages/searchresults/searchresults.component';


const routes: Routes = [
{path:'', redirectTo: 'login', pathMatch:'full'},
{path:'login', component:LoginComponent},
{path:'screentwo', component:ScreentwoComponent},
{path:'listview', component:ListviewComponent},
{path:'search', component:SearchresultsComponent},
{path:'searchfilter', component:SearchfilterComponent},
{path:'pagnav', component:PagnavComponent},
{path:'fileselect', component:FileselectComponent},
{path:'**',redirectTo: 'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
