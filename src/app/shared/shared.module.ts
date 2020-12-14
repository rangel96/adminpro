import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeadbarComponent } from './headbar/headbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PagesRoutingModule } from '../pages/pages.routing';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    BreadcrumbsComponent,
    HeadbarComponent,
    SidebarComponent,
  ],
  exports: [
    BreadcrumbsComponent,
    HeadbarComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    RouterModule
  ]
})
export class SharedModule {
}
