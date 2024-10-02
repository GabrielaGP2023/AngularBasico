import { NgClass, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva-atributo',
  standalone: true,
  imports: [NgClass, NgStyle],
  templateUrl: './directiva-atributo.component.html',
  styleUrl: './directiva-atributo.component.css'
})
export class DirectivaAtributoComponent  implements OnInit {
  ngOnInit(): void {
    this.setCurrentClasses();
    this.setCurrentStyles();
  }
  isSpecial:boolean = true;
  canSave:boolean = true;
  isUnchanged:boolean = true;

  currentClasses: Record<string, boolean> = {};
  currentStyles: Record<string, string> = {};

  setCurrentClasses() {
    // CSS classes: added/removed per current state of component properties
    this.currentClasses = {
      saveable: this.canSave,
      modified: !this.isUnchanged,
      special: this.isSpecial,
    };
  }

  setCurrentStyles() {
    // CSS styles: set per current state of component properties
    this.currentStyles = {
      'font-style': this.canSave ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold' : 'normal',
      'font-size': this.isSpecial ? '24px' : '12px',
    };
  }

}
