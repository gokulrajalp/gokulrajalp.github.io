import { Injectable } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  private scrollTrigger: typeof ScrollTrigger;

  constructor() {
    gsap.registerPlugin(ScrollTrigger);
    this.scrollTrigger = ScrollTrigger;
  }

  initScrollAnimations(): void {
    // Use setTimeout to ensure DOM is ready
    setTimeout(() => {
      // Kill existing ScrollTriggers to prevent duplicates
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars && trigger.vars.trigger) {
          const triggerEl = trigger.vars.trigger as HTMLElement;
          if (triggerEl && (triggerEl.classList.contains('fade-up') || triggerEl.classList.contains('scale-in'))) {
            trigger.kill();
          }
        }
      });

      // Fade up animation for elements with .fade-up class
      gsap.utils.toArray<HTMLElement>('.fade-up').forEach((element) => {
        // Check if element is already in viewport
        const rect = element.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isInViewport && rect.top < window.innerHeight * 0.8) {
          // Already visible, just ensure it stays visible
          gsap.set(element, { opacity: 1, y: 0, visibility: 'visible', clearProps: 'all' });
        } else {
          // Not visible yet, set initial state and animate
          gsap.set(element, { opacity: 0, y: 30 });
          
          gsap.to(element, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 85%',
              toggleActions: 'play none none none',
              once: true,
              onEnter: () => {
                gsap.set(element, { opacity: 1, y: 0, visibility: 'visible' });
              },
              onLeave: () => {
                gsap.set(element, { opacity: 1, y: 0, visibility: 'visible' });
              },
              onEnterBack: () => {
                gsap.set(element, { opacity: 1, y: 0, visibility: 'visible' });
              }
            }
          });
        }
      });

      // Scale animation for elements with .scale-in class
      gsap.utils.toArray<HTMLElement>('.scale-in').forEach((element) => {
        // Check if element is already in viewport
        const rect = element.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isInViewport && rect.top < window.innerHeight * 0.8) {
          // Already visible, just ensure it stays visible
          gsap.set(element, { opacity: 1, scale: 1, visibility: 'visible', clearProps: 'all' });
        } else {
          // Not visible yet, set initial state and animate
          gsap.set(element, { opacity: 0, scale: 0.9 });
          
          gsap.to(element, {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 85%',
              toggleActions: 'play none none none',
              once: true,
              onEnter: () => {
                gsap.set(element, { opacity: 1, scale: 1, visibility: 'visible' });
              },
              onLeave: () => {
                gsap.set(element, { opacity: 1, scale: 1, visibility: 'visible' });
              },
              onEnterBack: () => {
                gsap.set(element, { opacity: 1, scale: 1, visibility: 'visible' });
              }
            }
          });
        }
      });

      // Refresh ScrollTrigger after animations are set up
      ScrollTrigger.refresh();
    }, 200);
  }

  cleanupAnimations(): void {
    // Kill all ScrollTriggers
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }

  animateCounter(element: HTMLElement, target: number, duration: number = 2): void {
    const obj = { value: 0 };
    gsap.to(obj, {
      value: target,
      duration: duration,
      ease: 'power2.out',
      onUpdate: () => {
        element.textContent = Math.floor(obj.value).toString();
      }
    });
  }

  parallax(element: HTMLElement, speed: number = 0.5): void {
    gsap.to(element, {
      y: speed * 100,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  }

  staggerAnimation(elements: HTMLElement[], delay: number = 0.1): void {
    gsap.fromTo(
      elements,
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: delay,
        scrollTrigger: {
          trigger: elements[0],
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }

  textReveal(element: HTMLElement): void {
    const text = element.textContent || '';
    element.textContent = '';
    element.style.opacity = '1';

    text.split('').forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.opacity = '0';
      element.appendChild(span);

      gsap.to(span, {
        opacity: 1,
        duration: 0.05,
        delay: index * 0.02,
        ease: 'power2.out'
      });
    });
  }

  wipeReveal(element: HTMLElement): void {
    gsap.fromTo(
      element,
      {
        clipPath: 'inset(0 100% 0 0)'
      },
      {
        clipPath: 'inset(0 0% 0 0)',
        duration: 1.5,
        ease: 'power3.inOut'
      }
    );
  }
}

