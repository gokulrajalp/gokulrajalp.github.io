import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-animated-cursor',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="custom-cursor" [style.left.px]="cursorX" [style.top.px]="cursorY">
      <div class="cursor-dot"></div>
      <div class="cursor-outline" [style.left.px]="outlineX" [style.top.px]="outlineY"></div>
    </div>
  `,
  styles: [`
    .custom-cursor {
      position: fixed;
      pointer-events: none;
      z-index: 9998;
      mix-blend-mode: difference;
    }

    .cursor-dot {
      width: 8px;
      height: 8px;
      background: #00f5ff;
      border-radius: 50%;
      position: absolute;
      transform: translate(-50%, -50%);
      box-shadow: 0 0 10px #00f5ff;
    }

    .cursor-outline {
      width: 40px;
      height: 40px;
      border: 2px solid rgba(0, 245, 255, 0.5);
      border-radius: 50%;
      position: absolute;
      transform: translate(-50%, -50%);
      transition: width 0.3s ease, height 0.3s ease, border-color 0.3s ease;
    }

    .custom-cursor:hover .cursor-outline {
      width: 60px;
      height: 60px;
      border-color: #b026ff;
    }

    @media (max-width: 768px) {
      .custom-cursor {
        display: none;
      }
    }
  `]
})
export class AnimatedCursorComponent implements OnInit, OnDestroy {
  cursorX = 0;
  cursorY = 0;
  outlineX = 0;
  outlineY = 0;
  private animationFrame: number | null = null;

  ngOnInit(): void {
    this.updateCursor();
  }

  ngOnDestroy(): void {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    this.cursorX = event.clientX;
    this.cursorY = event.clientY;
  }

  private updateCursor(): void {
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const animate = () => {
      this.outlineX = lerp(this.outlineX, this.cursorX, 0.1);
      this.outlineY = lerp(this.outlineY, this.cursorY, 0.1);
      this.animationFrame = requestAnimationFrame(animate);
    };

    animate();
  }
}

