import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
    @ViewChild('carousel') carousel!: ElementRef;
    currentSlide = 0;
    totalSlides = 7;
    visibleSlides = 3;

    ngOnInit() {
        this.updateDots();
    }

    prevSlide() {
        if (this.currentSlide > 0) {
            this.currentSlide--;
            this.updateCarousel();
            this.updateDots();
        }
    }

    nextSlide() {
        if (this.currentSlide < this.totalSlides - this.visibleSlides) {
            this.currentSlide++;
            this.updateCarousel();
            this.updateDots();
        }
    }

    goToSlide(index: number) {
        if (index >= 0 && index <= this.totalSlides - this.visibleSlides) {
            this.currentSlide = index;
            this.updateCarousel();
            this.updateDots();
        }
    }

    private updateCarousel() {
        const carousel = this.carousel.nativeElement;
        const slideWidth = 100 / this.visibleSlides;
        carousel.style.transform = `translateX(-${this.currentSlide * slideWidth}%)`;
    }

    private updateDots() {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            if (index === this.currentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
}
