import { Directive, ElementRef, Renderer2 } from '@angular/core';

// https://www.digitalocean.com/community/tutorials/angular-viewchild-access-component-es#uso-de-viewchild-con-directivas

/**
 * La directiva buscará elementos con el atributo appShark y preparará el texto en el elemento con la palabra Tiburoncin:
*/
@Directive({
  selector: '[appShark]'
})
export class SharkDirective {
  animal = 'Delfin';

  constructor(el: ElementRef, renderer: Renderer2) {
    let tiburon = renderer.createText('Tiburoncin ');
    renderer.appendChild(el.nativeElement, tiburon);
   }

}
