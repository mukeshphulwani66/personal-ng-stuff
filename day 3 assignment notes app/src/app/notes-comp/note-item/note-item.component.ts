import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
})
export class NoteItemComponent {
   @Input() item;
   show:boolean = false;
   showNote(){
     this.show = !this.show;
   }
}
