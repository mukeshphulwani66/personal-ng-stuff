import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
})
export class NoteDetailComponent{
  @Input() title:string;
  @Input() body:string;
}
