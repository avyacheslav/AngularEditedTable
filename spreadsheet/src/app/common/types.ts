import data from '../../data/data.json';

export class State
{
	selected_item : number;
	total_items: number;
	selected_page: number;
	total_pages: number;
	items_per_page;
	
	constructor(){
		if(data['info'].length == 0){
			return;
		}
		
		this.selected_item = 13;
		this.total_items = data['info'].length;
		this.items_per_page = 5;
		this.selected_page = (this.selected_item / this.items_per_page) | 0;
		this.total_pages = (this.total_items / this.items_per_page) | 0;
		
		if (this.total_items % this.items_per_page > 0) this.total_pages++;
		
	}
}