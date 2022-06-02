import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { PaginatorComponent }   from './paginator.component';
import { ButtonLeftComponent }   from './button-left/button-left.component';
import { ButtonComponent }   from './button/button.component';
import { ButtonRightComponent }   from './button-right/button-right.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ PaginatorComponent, ButtonLeftComponent, ButtonComponent, ButtonRightComponent ],
	exports: [ PaginatorComponent ]
})
export class PaginatorModule { }