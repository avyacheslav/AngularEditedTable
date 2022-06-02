import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import data from '../../data/data.json';
import { State } from '../common/types';

export class Node{
	public category : string;
	public items = new Array<string>();
	public unfolded = false;
}

@Component({
    selector: 'tree-comp',
    templateUrl: './tree.template.html',
	styles: [`
		.treeNodeButton {border-color: transparent;}
		.treeNode:hover {cursor: pointer}
		`]
})
export class TreeComponent {
	@Input() state: State;
	@Output() selectItemEvent = new EventEmitter<number>();
	selected = null;
	nodes = null;
	
	doNotCheck = false;
	
	ngOnInit() {
		this.nodes = new Array<Node>();
		data['info'].forEach( item => {
			let category : string = item[1];
			let info : string = item[0];
			
			let exists = this.nodes.find( node => node.category == category);
			
			if( exists != null && exists != undefined){
				exists.items.push(info);
			}else {
				let new_node = new Node();
				new_node.category = category;
				new_node.items = [ info ];
				this.nodes.push(new_node);
			}
		});
		let selected_node = this.nodes.find(node => node.category == data['info'][this.state.selected_item][1]);
		selected_node.unfolded = true;
		this.selected = selected_node.items.find(item => item == data['info'][this.state.selected_item][0]);
	}
	
	public clickNode(node){
		this.doNotCheck = true;
		node.unfolded = !node.unfolded;
	}
	
	public clickItem(item: string){
		this.doNotCheck = true;
		let row = data['info'].find(row => row[0] == item);
		
		if(row == undefined){
			return;
		}
		
		let index = data['info'].indexOf(row);
		this.selectItemEvent.emit(index);
	}
	
	getSelectedItem(selected_item: number): string{
		let selected_node = this.nodes.find(node => node.category == data['info'][this.state.selected_item][1]);
		selected_node.unfolded = true;
		return selected_node.items.find(item => item == data['info'][this.state.selected_item][0]);
	}
	
	ngDoCheck() {
		if(this.doNotCheck) {
			this.doNotCheck = false;
			return;
		}
		this.ngOnInit();
		console.log(this.state.selected_item);
	}
}