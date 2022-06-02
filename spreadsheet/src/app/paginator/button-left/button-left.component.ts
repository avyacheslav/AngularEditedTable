import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'button-left-comp',
    templateUrl: './button-left.template.html',
	styles: [`
		#pagination_button_left {
			height: 30px;
			width: 90px;
			position: absolute;	
			border-top-left-radius: 15px;
			border-bottom-left-radius: 15px;
			background-image: -webkit-radial-gradient( 50% 0%, 8% 50%, hsla(0,0%,100%,.5) 0%, hsla(0,0%,100%,0) 100%), -webkit-radial-gradient( 50% 100%, 12% 50%, hsla(0,0%,100%,.6) 0%, hsla(0,0%,100%,0) 100%), -webkit-radial-gradient( 0% 50%, 50% 7%, hsla(0,0%,100%,.5) 0%, hsla(0,0%,100%,0) 100%), -webkit-radial-gradient( 100% 50%, 50% 5%, hsla(0,0%,100%,.5) 0%, hsla(0,0%,100%,0) 100%), -webkit-repeating-radial-gradient( 50% 50%, 100% 100%, hsla(0,0%, 0%,0) 0%, hsla(0,0%, 0%,0) 3%, hsla(0,0%, 0%,.1) 3.5%), -webkit-repeating-radial-gradient( 50% 50%, 100% 100%, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,0) 6%, hsla(0,0%,100%,.1) 7.5%), -webkit-repeating-radial-gradient( 50% 50%, 100% 100%, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,0) 1.2%, hsla(0,0%,100%,.2) 2.2%), -webkit-radial-gradient( 50% 50%, 200% 50%, hsla(0,0%,90%,1) 5%, hsla(0,0%,85%,1) 30%, hsla(0,0%,60%,1) 100%);
		}
		#pagination_button_left:focus {
			outline: none !important;
		}
		#pagination_button_left_arc {
			width: 15px;
			height: 30px;
			position: relative;
			left: 75px;
			border: 2px solid rgb(100,100,100);
			border-radius: 100% 0 0 100% / 50% 0 0 50%;
			background-color: #eee;
			border-right-color: transparent;
		}
		#pagination_button_left_arc:focus {
			outline: none !important;
		}
		#pagination_button_left:hover {
			box-shadow: inset 0 0 20px rgba(0,0,0,.2), 0 2px 0 rgba(255,255,255,.4), inset 0 2px 0 rgba(0,0,0,.1);
		}
	`]
})
export class ButtonLeftComponent {
	@Output() onDecrease = new EventEmitter()
	onClick(){
		this.onDecrease.emit()
	}
}