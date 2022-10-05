import { Component, ContentChild, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input("srvElement") element: { type: string, name: string, content: string }
  @Input() name: string;
  @ViewChild("heading", { static: true }) header: ElementRef;
  @ContentChild("contentParagraph", { static: true }) paragraph: ElementRef;
  constructor() {
    console.log("Constructor called");
  }

  ngOnInit(): void {
    console.log("NgOnInit Called");
    console.log("Text content:", this.header.nativeElement.textContent);
    console.log("Paragraph content:", this.paragraph.nativeElement.textContent);
  }
  ngOnChanges(changes) {
    console.log("ngonchanged called");
    console.log(changes);
  }
  ngDoCheck() {
    console.log("NgDoCheck called");
  }
  ngAfterContentInit(): void {
    console.log("After Content init called");
    console.log("Paragraph content:", this.paragraph.nativeElement.textContent);
  }
  ngAfterContentChecked() {
    console.log("After Content checked called");
  }
  ngOnDestroy(): void {
    console.log("ng on destroy called");
  }
  ngAfterViewInit(): void {
    console.log("Text content:", this.header.nativeElement.textContent);
    console.log("Ng After View init");
  }

}
