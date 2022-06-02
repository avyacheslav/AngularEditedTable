import { Component, OnInit } from '@angular/core';
import { State } from './common/types';


@Component({
    selector: 'my-app',
	templateUrl: './app.template.html',
	styles: [`
	#layout_table {width: 100%; text-align: center}
	#header {background-color: #eee;}
	#tree_container {width: 300px; vertical-align: top; text-align:left}
	#table_container {vertical-align: top}
	`]
})
export class AppComponent {
	state: State = new State();
	
	selectItem($event){
		this.state.selected_item = $event;
		this.state.selected_page = (this.state.selected_item / this.state.items_per_page) | 0;
		console.log(this.state.selected_page);
	}
}