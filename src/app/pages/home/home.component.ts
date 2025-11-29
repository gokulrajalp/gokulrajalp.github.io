import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimationService } from '../../services/animation.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="home-page">
      <!-- Hero Section -->
      <section class="hero-section" #heroSection>
        <div class="hero-background">
          <div class="background-logo"></div>
          <div class="gradient-blob blob-1"></div>
          <div class="gradient-blob blob-2"></div>
          <div class="gradient-blob blob-3"></div>
        </div>
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-name" #heroName>Gokulraja L P</h1>
            <h2 class="hero-title fade-up">Indian Entrepreneur & Founder of Gentrobyte AI Labs</h2>
            <p class="hero-tagline fade-up">Building AI Agents, Intelligent Software Systems & Digital Growth Engines</p>
            <div class="hero-cta fade-up">
              <a routerLink="/projects" class="btn-primary">View My Work</a>
              <a routerLink="/contact" class="btn-secondary">Get In Touch</a>
            </div>
          </div>
        </div>
        <div class="scroll-indicator">
          <div class="mouse">
            <div class="wheel"></div>
          </div>
          <p>Scroll to explore</p>
        </div>
      </section>

      <!-- About Preview Section -->
      <section class="about-preview section" #aboutPreview>
        <div class="container">
          <div class="section-header fade-up">
            <h2 class="section-title">About Me</h2>
            <p class="section-subtitle">Passionate entrepreneur building the future of AI</p>
          </div>
          <div class="about-content">
            <div class="about-text fade-up">
              <p>
                I'm <strong>Gokulraja L P</strong> (also known as <strong>gokulrajalp</strong> or <strong>gokul raja l p</strong>), 
                an Indian entrepreneur and the founder of <strong>Gentrobyte AI Labs</strong>. 
                I specialize in AI Agent Development, Software Development (Web Apps, Mobile Apps, Enterprise Apps, ERP, CRM, LMS, HRM), 
                and Digital Marketing & SEO Services globally. My mission is to help businesses leverage cutting-edge technology 
                to achieve unprecedented growth.
              </p>
              <p>
                With a vision to put <strong>India on top of global tech</strong>, I'm building AI agents, 
                intelligent software systems, business automation platforms (ERP, CRM, LMS, HRM), 
                and digital growth engines that transform how businesses operate worldwide.
              </p>
              <a routerLink="/about" class="btn-secondary">Learn More About Me</a>
            </div>
            <div class="about-stats fade-up">
              <div class="stat-card glass">
                <div class="stat-number" #stat1>50+</div>
                <div class="stat-label">Projects Delivered</div>
              </div>
              <div class="stat-card glass">
                <div class="stat-number" #stat2>30+</div>
                <div class="stat-label">Happy Clients</div>
              </div>
              <div class="stat-card glass">
                <div class="stat-number" #stat3>5+</div>
                <div class="stat-label">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Services Preview Section -->
      <section class="services-preview section" #servicesPreview>
        <div class="container">
          <div class="section-header fade-up">
            <h2 class="section-title">What I Offer</h2>
            <p class="section-subtitle">Premium services for world-class results</p>
          </div>
          <div class="services-grid">
            <div class="service-card glass card-hover fade-up" *ngFor="let service of services">
              <div class="service-icon">{{ service.icon }}</div>
              <h3 class="service-title">{{ service.title }}</h3>
              <p class="service-description">{{ service.description }}</p>
              <a routerLink="/services" class="service-link">Learn More →</a>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="cta-section section">
        <div class="container">
          <div class="cta-content glass-strong fade-up">
            <h2 class="cta-title">Ready to Transform Your Business?</h2>
            <p class="cta-text">Let's build something amazing together</p>
            <a routerLink="/contact" class="btn-primary">Start a Project</a>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .home-page {
      width: 100%;
      overflow-x: hidden;
    }

    .hero-section {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
      padding-top: 80px;
    }

    .hero-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      overflow: hidden;
    }

    .background-logo {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background-image: url('/assets/images/LandingAndBackgroundLogo.png');
      background-size: 80% auto;
      background-position: center center;
      background-repeat: no-repeat;
      opacity: 0.4;
      z-index: 0;
    }

    .gradient-blob {
      position: absolute;
      border-radius: 50%;
      filter: blur(80px);
      opacity: 0.3;
      animation: float 20s ease-in-out infinite;
    }

    .blob-1 {
      width: 500px;
      height: 500px;
      background: linear-gradient(135deg, #00f5ff, #0066ff);
      top: -200px;
      left: -200px;
      animation-delay: 0s;
    }

    .blob-2 {
      width: 400px;
      height: 400px;
      background: linear-gradient(135deg, #b026ff, #0066ff);
      bottom: -150px;
      right: -150px;
      animation-delay: 5s;
    }

    .blob-3 {
      width: 300px;
      height: 300px;
      background: linear-gradient(135deg, #00f5ff, #b026ff);
      top: 50%;
      right: 10%;
      animation-delay: 10s;
    }

    .hero-content {
      position: relative;
      z-index: 1;
      text-align: center;
      max-width: 900px;
      padding: 0 20px;
    }

    .hero-name {
      font-size: 5rem;
      font-weight: 900;
      margin-bottom: 20px;
      background: linear-gradient(135deg, #00f5ff, #b026ff, #0066ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      line-height: 1.2;
    }

    .hero-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: #00f5ff;
      margin-bottom: 15px;
    }

    .hero-tagline {
      font-size: 1.2rem;
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 40px;
      line-height: 1.6;
    }

    .hero-cta {
      display: flex;
      gap: 20px;
      justify-content: center;
      flex-wrap: wrap;
    }

    .scroll-indicator {
      position: absolute;
      bottom: 40px;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      z-index: 1;
    }

    .mouse {
      width: 30px;
      height: 50px;
      border: 2px solid #00f5ff;
      border-radius: 15px;
      margin: 0 auto 10px;
      position: relative;
    }

    .wheel {
      width: 4px;
      height: 10px;
      background: #00f5ff;
      border-radius: 2px;
      position: absolute;
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
      animation: scroll 2s infinite;
    }

    @keyframes scroll {
      0% { opacity: 1; transform: translateX(-50%) translateY(0); }
      100% { opacity: 0; transform: translateX(-50%) translateY(20px); }
    }

    .scroll-indicator p {
      color: rgba(255, 255, 255, 0.6);
      font-size: 0.9rem;
    }

    .section {
      padding: 100px 0;
      position: relative;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 40px;
    }

    .section-header {
      text-align: center;
      margin-bottom: 60px;
    }

    .section-title {
      font-size: 3rem;
      font-weight: 800;
      margin-bottom: 15px;
      background: linear-gradient(135deg, #00f5ff, #b026ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .section-subtitle {
      font-size: 1.2rem;
      color: rgba(255, 255, 255, 0.7);
    }

    .about-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      align-items: center;
    }

    .about-text p {
      font-size: 1.1rem;
      line-height: 1.8;
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 20px;
    }

    .about-text strong {
      color: #00f5ff;
    }

    .about-stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }

    .stat-card {
      padding: 30px;
      text-align: center;
      border-radius: 12px;
    }

    .stat-number {
      font-size: 3rem;
      font-weight: 800;
      background: linear-gradient(135deg, #00f5ff, #b026ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 10px;
    }

    .stat-label {
      color: rgba(255, 255, 255, 0.7);
      font-size: 0.9rem;
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
    }

    .service-card {
      padding: 40px;
      border-radius: 16px;
      text-align: center;
    }

    .service-icon {
      font-size: 4rem;
      margin-bottom: 20px;
    }

    .service-title {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 15px;
      color: #00f5ff;
    }

    .service-description {
      color: rgba(255, 255, 255, 0.7);
      line-height: 1.6;
      margin-bottom: 20px;
    }

    .service-link {
      color: #00f5ff;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s ease;
    }

    .service-link:hover {
      color: #b026ff;
    }

    .cta-section {
      background: linear-gradient(135deg, rgba(0, 245, 255, 0.1), rgba(176, 38, 255, 0.1));
    }

    .cta-content {
      text-align: center;
      padding: 60px;
      border-radius: 20px;
    }

    .cta-title {
      font-size: 2.5rem;
      font-weight: 800;
      margin-bottom: 15px;
      background: linear-gradient(135deg, #00f5ff, #b026ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .cta-text {
      font-size: 1.2rem;
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 30px;
    }

    @media (max-width: 768px) {
      .hero-name {
        font-size: 3rem;
        margin-bottom: 15px;
      }

      .hero-title {
        font-size: 1.2rem;
      }

      .hero-tagline {
        font-size: 1rem;
      }

      .section-title {
        font-size: 2rem;
      }

      .about-content {
        grid-template-columns: 1fr;
        gap: 40px;
      }

      .about-stats {
        grid-template-columns: 1fr;
      }

      .services-grid {
        grid-template-columns: 1fr;
      }

      .cta-content {
        padding: 40px 20px;
      }

      .cta-title {
        font-size: 1.8rem;
      }
    }
  `]
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('heroSection') heroSection!: ElementRef;
  @ViewChild('heroName') heroName!: ElementRef;
  @ViewChild('stat1') stat1!: ElementRef;
  @ViewChild('stat2') stat2!: ElementRef;
  @ViewChild('stat3') stat3!: ElementRef;

  services = [
    { icon: '🤖', title: 'AI Agent Development', description: 'Build intelligent AI agents that automate complex workflows' },
    { icon: '💻', title: 'Software Development', description: 'End-to-end software development from concept to deployment' },
    { icon: '📈', title: 'Digital Marketing', description: 'Data-driven digital marketing strategies to accelerate growth' }
  ];

  constructor(private animationService: AnimationService) {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initAnimations();
  }

  private initAnimations(): void {
    // Hero name wipe reveal animation
    if (this.heroName?.nativeElement) {
      this.animationService.wipeReveal(this.heroName.nativeElement);
    }

    // Parallax effect for hero background
    const blobs = this.heroSection?.nativeElement?.querySelectorAll('.gradient-blob');
    if (blobs) {
      blobs.forEach((blob: HTMLElement, index: number) => {
        gsap.to(blob, {
          y: (index + 1) * 50,
          x: (index + 1) * 30,
          rotation: 360,
          duration: 20 + index * 5,
          repeat: -1,
          ease: 'none'
        });
      });
    }

    // Counter animations for stats
    setTimeout(() => {
      if (this.stat1?.nativeElement) {
        this.animationService.animateCounter(this.stat1.nativeElement, 50);
      }
      if (this.stat2?.nativeElement) {
        this.animationService.animateCounter(this.stat2.nativeElement, 30);
      }
      if (this.stat3?.nativeElement) {
        this.animationService.animateCounter(this.stat3.nativeElement, 5);
      }
    }, 1000);

    // Initialize scroll animations
    this.animationService.initScrollAnimations();
  }
}

