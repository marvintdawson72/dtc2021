import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesignElementsPageRoutingModule } from './design-elements-routing.module';

import { DesignElementsPage } from './design-elements.page';
import {SharedComponentsModule} from "../../components/shared-components/shared-components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DesignElementsPageRoutingModule,
        SharedComponentsModule
    ],
  declarations: [DesignElementsPage]
})
export class DesignElementsPageModule {}
