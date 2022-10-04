import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import { ServerElementComponent } from '../server-element/server-element.component';
     
@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
 
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild("serverContentInput",{static:false}) serverContentInput:ElementRef;
 
  onAddServer(serverName:HTMLInputElement) {
    this.serverCreated.emit({
      serverName: serverName.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
 
  onAddBlueprint(serverName:HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: serverName.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
 
}