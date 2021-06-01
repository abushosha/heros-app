import { NgModule } from '@angular/core';
import { HerosListComponent } from './heros-list.component';
import { HerosListRoutingModule } from './heros-list-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FilterBarComponent } from './filter-bar/filter-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        HerosListComponent, FilterBarComponent,
    ],
    imports: [
        HerosListRoutingModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class HerosListModule { }
