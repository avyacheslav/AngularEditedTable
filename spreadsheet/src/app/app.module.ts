import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { CaptionModule }   from './caption/caption.module';
import { TreeModule }   from './tree/tree.module';
import { PaginatorModule } from './paginator/paginator.module';
import { TableModule }   from './table/table.module';
import { AppComponent }   from './app.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule, CaptionModule, TreeModule, PaginatorModule,  TableModule ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }