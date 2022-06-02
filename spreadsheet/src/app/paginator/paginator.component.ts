import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { State } from '../common/types';

@Component({
    selector: 'paginator-comp',
    templateUrl: './paginator.template.html',
	styles: [`
		.pagination {
			font-size: 120%;
			font-family: Arial, Helvetica, sans-serif;
			display: flex;
			align-items: center;
			justify-content: center;
			padding-top: 100px;
		}
		.pagination_info {
			position: relative;
			right: 18px;
		}
		.lines_per_page_value{
			position: relative;
			left: 70px;
			width: 30px;
		}
	`]
})
export class PaginatorComponent {
	@Input() state: State;
	buttons : number[];
	
	ngOnInit() {
		this.buttons = new Array(this.state.total_pages > 9 ? 9 : this.state.total_pages).fill(null).map((_, i) => i + 1);
		
		if (this.state.total_pages > 9) {
			
			this.buttons[8] = this.state.total_pages;
			
			if (this.state.selected_page > 5) {
				this.buttons[1] = -1;
			} else {
				this.buttons[1] = 2;
			}

			if (this.state.selected_page < this.state.total_pages - 4) {
				this.buttons[7] = -1;
			} else {
				this.buttons[7] = this.state.total_pages - 1;
            }
			
			if (this.buttons[1] != -1) {
				for (let i = 2; i < 7; i++) {
					this.buttons[i] = i + 1;
				}
			} else if (this.buttons[7] != -1) {
				for (let i = 2; i < 7; i++) {
					this.buttons[i] = this.state.total_pages - 8 + i;
				}
			} else if (this.buttons[1] == -1 && this.buttons[7] == -1) {
				for (let i = 2; i < 7; i++) {
					this.buttons[i] = this.state.selected_page - 3 + i;
				}
			}
		}
	}
	
	onDecrease(){
		if(this.state.selected_page > 1) --this.state.selected_page;
		this.checkSelectedInPage();
	}
	
	onIncrease(){
		if(this.state.selected_page + 1 < this.state.total_pages) ++this.state.selected_page;
		this.checkSelectedInPage();
	}
	
	buttonClicked(button_num){
		this.state.selected_page = button_num - 1;		
		this.checkSelectedInPage();
	}
	
	ngDoCheck() {
		this.state.selected_page = (this.state.selected_item / this.state.items_per_page) | 0;
		this.state.total_pages = (this.state.total_items / this.state.items_per_page) | 0;
		if (this.state.total_items % this.state.items_per_page > 0) this.state.total_pages++;
		this.ngOnInit();
	
	}
	
	private checkSelectedInPage() {
		if ((this.state.selected_page * this.state.items_per_page > this.state.selected_item) || 
		   ((this.state.selected_page + 1) * this.state.items_per_page <= this.state.selected_item)){
			   this.state.selected_item = this.state.selected_page * this.state.items_per_page;
		   }
	}
}