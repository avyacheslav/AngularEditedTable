import { Component, Input } from '@angular/core';
import data from '../../data/data.json';
import { State } from '../common/types';
      
@Component({
    selector: 'table-comp',
	templateUrl: './table.template.html',
    styles: [`
	#data_table {width: 100%; text-align: left}
	th, .td_border {border-style: double;}
	.td_selected {border-width: thick;border-style: bold;}
	th {text-align: center; font-size: 20px}
	.num_column {width: 40px; text-align: center}
	.capability_column {width: 300px}
	.edition_column {width: 170px}
	.controls_column {width: 110px}

	.dropbtn {
    background-image: -webkit-radial-gradient( 50% 0%, 8% 50%, hsla(0,0%,100%,.5) 0%, hsla(0,0%,100%,0) 100%), -webkit-radial-gradient( 50% 100%, 12% 50%, hsla(0,0%,100%,.6) 0%, hsla(0,0%,100%,0) 100%), -webkit-radial-gradient( 0% 50%, 50% 7%, hsla(0,0%,100%,.5) 0%, hsla(0,0%,100%,0) 100%), -webkit-radial-gradient( 100% 50%, 50% 5%, hsla(0,0%,100%,.5) 0%, hsla(0,0%,100%,0) 100%), -webkit-repeating-radial-gradient( 50% 50%, 100% 100%, hsla(0,0%, 0%,0) 0%, hsla(0,0%, 0%,0) 3%, hsla(0,0%, 0%,.1) 3.5%), -webkit-repeating-radial-gradient( 50% 50%, 100% 100%, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,0) 6%, hsla(0,0%,100%,.1) 7.5%), -webkit-repeating-radial-gradient( 50% 50%, 100% 100%, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,0) 1.2%, hsla(0,0%,100%,.2) 2.2%), -webkit-radial-gradient( 50% 50%, 200% 50%, hsla(0,0%,90%,1) 5%, hsla(0,0%,85%,1) 30%, hsla(0,0%,60%,1) 100%);
    color: white;
    font-size: 16px;
    border: none;
	width: 100%;
	}
	
	.dropbtn:hover {
		box-shadow: inset 0 0 20px rgba(0,0,0,.2), 0 2px 0 rgba(255,255,255,.4), inset 0 2px 0 rgba(0,0,0,.1);
	}

	.dropdown {
		position: relative;
		display: inline-block;
		width: 100%;
	}

	.dropdown-content {
		display: none;
		position: absolute;
		background-color: #f1f1f1;
		min-width: 90px;
		box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
		z-index: 1;
	}

	.dropdown-content a {
		color: black;
		padding: 2px 6px;
		text-decoration: none;
		display: block;
	}

	.dropdown-content a:hover {background-color: #ddd;}

	.dropdown:hover .dropdown-content {display: block;}

	.dropdown:hover .dropbtn {background-color: #3e8e41;}
	
	.edit_field {width: 96%; height:100%; border: none}
	.edit_field:focus {outline: none !important}
	
	.buttonControl {
		border-radius: 4px; 
		margin-left: 2px;
		background-image: -webkit-radial-gradient( 50% 0%, 8% 50%, hsla(0,0%,100%,.5) 0%, hsla(0,0%,100%,0) 100%), -webkit-radial-gradient( 50% 100%, 12% 50%, hsla(0,0%,100%,.6) 0%, hsla(0,0%,100%,0) 100%), -webkit-radial-gradient( 0% 50%, 50% 7%, hsla(0,0%,100%,.5) 0%, hsla(0,0%,100%,0) 100%), -webkit-radial-gradient( 100% 50%, 50% 5%, hsla(0,0%,100%,.5) 0%, hsla(0,0%,100%,0) 100%), -webkit-repeating-radial-gradient( 50% 50%, 100% 100%, hsla(0,0%, 0%,0) 0%, hsla(0,0%, 0%,0) 3%, hsla(0,0%, 0%,.1) 3.5%), -webkit-repeating-radial-gradient( 50% 50%, 100% 100%, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,0) 6%, hsla(0,0%,100%,.1) 7.5%), -webkit-repeating-radial-gradient( 50% 50%, 100% 100%, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,0) 1.2%, hsla(0,0%,100%,.2) 2.2%), -webkit-radial-gradient( 50% 50%, 200% 50%, hsla(0,0%,90%,1) 5%, hsla(0,0%,85%,1) 30%, hsla(0,0%,60%,1) 100%);
		color: white;
	}
	.buttonControl:hover {
		box-shadow: inset 0 0 20px rgba(0,0,0,.6), 0 2px 0 rgba(255,255,255,.4), inset 0 2px 0 rgba(0,0,0,.1);
	}
	`]
})
export class TableComponent {
	@Input() state: State;
	columns = data['columns'];	
    table_data= data['info'];
	
	insert_before: number = null;
	insert_after: number = null;
	edit_row: number = null;
	
	clickRow(num_row){
		this.state.selected_item = num_row;
	}
	
	insertBefore(num_row){
		this.edit_row = null;
		this.insert_after = null;
		this.insert_before = num_row;
	}
	
	insertAfter(num_row){
		this.edit_row = null;
		this.insert_before = null;
		this.insert_after = num_row;
	}
	
	edit(num_row){
		this.insert_before = null;
		this.insert_after = null;
		this.edit_row = num_row;
	}
	
	save(){
		const table = document.getElementById('data_table');
		let index_get_data = 0;
		let index_save_row = 0;
		
		if(this.insert_before != null){
			index_get_data = this.insert_before - this.state.selected_page * this.state.items_per_page;
			index_save_row = this.insert_before;
			this.insert_before = null;
		} else if(this.insert_after != null){
			index_get_data = this.insert_after - this.state.selected_page * this.state.items_per_page + 1;
			index_save_row = this.insert_after + 1;
			this.insert_after = null;
		} else if(this.edit_row != null){
			index_get_data = this.edit_row - this.state.selected_page * this.state.items_per_page;
			index_save_row = this.edit_row;
		}
		
		const row = table.children[1].children[index_get_data];		
		let capability = (<HTMLInputElement>row.children[1].children[0]).value;
		let edition = (<HTMLInputElement>row.children[2].children[0]).value;
		let description = (<HTMLInputElement>row.children[3].children[0]).value;
		console.log('Capability: ' + capability + '\nEdition: ' + edition + '\nDescription: ' + description);
		
		if(this.edit_row != null){
			this.delete(this.edit_row);
			this.edit_row = null;
		}
		
		this.table_data.splice(index_save_row, 0, [capability, edition, description]);
		
		this.state.total_items = data['info'].length;
		this.state.total_pages = (this.state.total_items / this.state.items_per_page) | 0;
		if (this.state.total_items % this.state.items_per_page > 0) this.state.total_pages++;
	}
	
	delete(num_row){
		this.table_data.splice(num_row, 1);
		this.state.total_items--;
		this.state.total_pages = (this.state.total_items / this.state.items_per_page) | 0;
		
		if (this.state.total_items % this.state.items_per_page > 0) this.state.total_pages++;
		
		if(this.state.selected_item > this.state.total_items - 1){
			this.state.selected_item = this.state.total_items - 1;
			this.state.selected_page = (this.state.selected_item / this.state.items_per_page) | 0;
		}
	}
	
	cancel(){
		this.edit_row = null;
		this.insert_after = null;
		this.insert_before = null;
	}
}