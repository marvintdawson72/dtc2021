import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from '../footer/footer.component';
import {HeaderComponent} from '../header/header.component';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {JumbotronComponent} from '../jumbotron/jumbotron.component';
import {DesignComponent} from '../design/design.component';
import {ContentLeftComponent} from '../design/page-sections/content-left/content-left.component';
import {PageSectionsComponent} from '../design/page-sections/page-sections.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    JumbotronComponent,
    DesignComponent,
    PageSectionsComponent,
    ContentLeftComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    JumbotronComponent,
    DesignComponent,
    PageSectionsComponent,
    ContentLeftComponent
  ]
})
export class SharedComponentsModule { }
