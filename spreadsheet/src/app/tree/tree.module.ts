import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { TreeComponent }   from './tree.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ TreeComponent ],
	exports: [ TreeComponent ]
})
export class TreeModule { }