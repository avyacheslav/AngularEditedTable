import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { CaptionComponent }   from './caption.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ CaptionComponent ],
	exports: [ CaptionComponent ]
})
export class CaptionModule { }