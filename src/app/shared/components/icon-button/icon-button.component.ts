import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
})
export class IconButtonComponent {
  @Input() search!: boolean;
  @Input() disabled!: boolean;
  @Output() onButtonClick = new EventEmitter();
  searchIcon = faSearch;

  onClick() {
    this.onButtonClick.emit();
  }
}
