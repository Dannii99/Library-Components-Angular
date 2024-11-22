import { Component, Input } from '@angular/core';

@Component({
  selector: 'pr-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() label!: string;
  @Input() severity!:string;
  @Input() icon!:string;
  @Input() iconPos: 'right' | 'left' = 'left';
  @Input() link:boolean = false;
  @Input() disabled:boolean = false;
  @Input() raised:boolean = false;
  @Input() rounded:boolean = false;
  @Input() typeText:boolean = false;
  @Input() outline:boolean = false;
  @Input() text:boolean = false;

}
