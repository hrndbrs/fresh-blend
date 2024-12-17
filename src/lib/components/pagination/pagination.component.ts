import { AfterViewInit, effect, output } from '@angular/core';
import { Component, HostBinding, computed, input, signal } from '@angular/core';
import cn from '@/lib/utils/cn';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
})
export class Pagination implements AfterViewInit {
  protected currentPage = signal<number>(1);
  pageChange = output<number>();
  totalPages = input<number>(1);
  restoreScrollPosition = input<boolean>(true);
  class = input<string>();

  hasPrevious = computed(() => this.currentPage() > 1);
  hasNext = computed(() => this.currentPage() < this.totalPages());
  pageIndeces = computed(() => {
    const totalPages = this.totalPages();
    const currentPage = this.currentPage();
    const pagination = [1];

    if (totalPages <= 1) return pagination;

    if (totalPages > 2) pagination.push(2);

    if (currentPage > 5) {
      pagination.push(NaN);
    }

    const start = Math.max(3, currentPage - 2);
    const end = Math.min(totalPages - 2, currentPage + 2);

    for (let i = start; i <= end; i++) {
      pagination.push(i);
    }

    if (currentPage < totalPages - 4) {
      pagination.push(NaN);
    }

    if (totalPages > 3) {
      pagination.push(totalPages - 1);
    }

    if (totalPages > 1) {
      pagination.push(totalPages);
    }

    return pagination;
  });

  @HostBinding('class') get className() {
    return cn(
      'flex items-center ec-text-body-3 text-neutral-500',
      this.class()
    );
  }

  constructor() {
    effect(() => {
      const currentPage = this.currentPage();
      this.pageChange.emit(currentPage);
    });
  }

  ngAfterViewInit(): void {
    this.currentPage.set(1);
  }

  protected setPage(page: number) {
    this.currentPage.set(page);
    this.restoreScrollPosition() &&
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
