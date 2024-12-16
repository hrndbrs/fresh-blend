import {
  Component,
  HostBinding,
  TemplateRef,
  computed,
  contentChild,
  input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import cn from '@/lib/utils/cn';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  imports: [CommonModule],
})
export class Card {
  class = input<string>();
  imagePosition = input<'front' | 'back'>('front');
  c = input<string>('', { alias: 'bodyClass' });
  illustration = contentChild<TemplateRef<HTMLImageElement>>('illustration');

  bodyClass = computed(() =>
    cn('py-2 px-3 flex flex-col gap-3 text-sm', this.c())
  );
  @HostBinding('class') get className(): string {
    return cn('flex flex-col shadow', this.class());
  }
}
