import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TableComponent } from './components/table/table.component';


@NgModule({
    declarations: [
        TableComponent
    ],
    imports: [
        FormsModule,
        CommonModule, 
        ReactiveFormsModule
    ],
    exports: [
        TableComponent
    ]
})
export class SharedModule { }
