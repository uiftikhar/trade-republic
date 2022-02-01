import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() class = [''];
  @Input() text = '';
  @Input() disabled = false;
  @Output() handleClick = new EventEmitter<Event>();
  classes = '';

  constructor() {}

  ngOnInit(): void {
    this.classes = this.class.join(', ');
  }

  onButtonClick(event: Event) {
    this.handleClick.emit(event);
  }
}
