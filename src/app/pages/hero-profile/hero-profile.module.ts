import { NgModule } from '@angular/core';
import { HeroProfileComponent } from './hero-profile.component';
import { HeroProfileRoutingModule } from './hero-profile-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
 

@NgModule({
    declarations: [ 
        HeroProfileComponent,
    ],
    imports: [
        HeroProfileRoutingModule,
        FormsModule,
        CommonModule
    ]
})
export class HeroProfileModule { }
