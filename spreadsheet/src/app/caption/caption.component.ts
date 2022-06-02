import { Component } from '@angular/core';
import data from '../../data/data.json';
      
@Component({
    selector: 'caption-comp',
	templateUrl: './caption.template.html',
	styleUrls: ['./caption.styles.css']
})
export class CaptionComponent {
	caption= data['caption'];
}