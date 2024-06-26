import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, state, animate, style, AnimationEvent } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  animations: [
    trigger('hoverState', [
      state('hover', style({
        maxHeight: '472px',
        opacity: 1,
        background: 'linear-gradient(to bottom, #ffffff, #add8e6)',
        overflow: 'visible'
      })),
      state('default', style({
        maxHeight: '294px',
        opacity: 0.8,
        backgroundColor: '#fff',
        overflow: 'hidden'
      })),
      transition('default <=> hover', [
        animate('0.2s ease-in-out')
      ])
    ]),
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  hover: boolean = false;
}
