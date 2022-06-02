import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'button-right-comp',
    templateUrl: './button-right.template.html',
	styles: [`
		#pagination_button_right {
			position: relative;
			left: 70px;
			bottom: 5px;
			height: 30px;
			width: 90px;
			border-left-color: transparent;
			border-top-right-radius: 15px;
			border-bottom-right-radius: 15px;
			background-image: -webkit-radial-gradient( 50% 0%, 8% 50%, hsla(0,0%,100%,.5) 0%, hsla(0,0%,100%,0) 100%), -webkit-radial-gradient( 50% 100%, 12% 50%, hsla(0,0%,100%,.6) 0%, hsla(0,0%,100%,0) 100%), -webkit-radial-gradient( 0% 50%, 50% 7%, hsla(0,0%,100%,.5) 0%, hsla(0,0%,100%,0) 100%), -webkit-radial-gradient( 100% 50%, 50% 5%, hsla(0,0%,100%,.5) 0%, hsla(0,0%,100%,0) 100%), -webkit-repeating-radial-gradient( 50% 50%, 100% 100%, hsla(0,0%, 0%,0) 0%, hsla(0,0%, 0%,0) 3%, hsla(0,0%, 0%,.1) 3.5%), -webkit-repeating-radial-gradient( 50% 50%, 100% 100%, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,0) 6%, hsla(0,0%,100%,.1) 7.5%), -webkit-repeating-radial-gradient( 50% 50%, 100% 100%, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,0) 1.2%, hsla(0,0%,100%,.2) 2.2%), -webkit-radial-gradient( 50% 50%, 200% 50%, hsla(0,0%,90%,1) 5%, hsla(0,0%,85%,1) 30%, hsla(0,0%,60%,1) 100%);
		}
		#pagination_button_right:focus {
			outline: none !important;
		}
		#pagination_button_right_arc {
			width: 15px;
			height: 30px;
			position: relative;
			right: 20px;
			top: 2px;
			border: 2px solid rgb(100,100,100);
			border-radius: 0 100% 100% 0 / 0 50% 50% 0;
			background-color: #eee;
			border-left-color: transparent;
		}
		#pagination_button_right_arc:focus {
			outline: none !important;
		}
		#pagination_button_right:hover {
			box-shadow: inset 0 0 20px rgba(0,0,0,.2), 0 2px 0 rgba(255,255,255,.4), inset 0 2px 0 rgba(0,0,0,.1);
		}
	`]
})
export class ButtonRightComponent {
	@Output() onIncrease = new EventEmitter()
	onClick(){
		this.onIncrease.emit()
	}
}