import { NgModule } from "@angular/core";
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductRoutingModule } from './product-routing.module';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        ConvertToSpacesPipe
    ],
    imports: [
        SharedModule,
        ProductRoutingModule
    ]
})

export class ProductModule { }