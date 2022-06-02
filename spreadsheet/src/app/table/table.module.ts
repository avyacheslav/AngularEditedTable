import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { TableComponent }   from './table.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ TableComponent ],
	exports: [ TableComponent ]
})
export class TableModule { }