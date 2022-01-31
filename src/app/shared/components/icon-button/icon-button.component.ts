import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
})
export class IconButtonComponent implements OnInit {
  @Input() search: boolean | undefined;
  @Input() disabled: boolean | undefined;
  // TODO Strong type this
  @Output() onButtonClick = new EventEmitter();
  searchIcon = faSearch;
  constructor() {}

  ngOnInit(): void {
    console.log(this.disabled);
  }

  onClick() {
    this.onButtonClick.emit();
  }
}
