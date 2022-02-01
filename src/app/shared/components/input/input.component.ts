import {
  Component,
  forwardRef,
  Input,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input()
  placeholder: string = '';

  @Input()
  type: string = 'text';

  constructor() {}

  onChange: any = () => {};
  onTouch: any = () => {};
  val = ''; // value of the component
  set value(val: string) {
    this.val = val;
    this.onChange(val);
    this.onTouch(val);
  }

  // programmatically writing the value
  writeValue(value: any) {
    this.value = value;
  }
  // method to be triggered on UI change
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  // method to be triggered on component touch
  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }
}
