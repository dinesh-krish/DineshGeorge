import {Directive, ElementRef, Input} from '@angular/core';

/**
 * Generated class for the FocusEventDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[focus-event]' // Attribute selector
})
export class FocusEventDirective {

    @Input() appAutofocus: boolean;
    private el: any;
    constructor(private elementRef:ElementRef,) {
        this.el = this.elementRef.nativeElement;

    }
    ngOnInit() {
        this.el.focus();
    }
    ngOnChanges(){
        this.el.focus();
    }
}
