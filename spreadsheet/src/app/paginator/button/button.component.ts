import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'button-comp',
    templateUrl: './button.template.html',
	styleUrls: ['./button.styles.css']
})
export class ButtonComponent {
	@Input() num: number | string;
	@Input() current_page: boolean = false;
	
	ngOnInit() {
		if(this.num == -1) this.num = '...';
	}
	
	@Output() buttonClicked: EventEmitter<number> = new EventEmitter<number>();
	onClick(){
		if(this.num != '...'){
			this.buttonClicked.emit(this.num as number);
		}
	}
}