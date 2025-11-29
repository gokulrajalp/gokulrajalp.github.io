import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { services } from '../../data/portfolio.data';
import { AnimationService } from '../../services/animation.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="services-page">
      <!-- Hero Section -->
      <section class="services-hero section">
        <div class="container">
          <div class="hero-content fade-up">
            <h1 class="page-title">My Services</h1>
            <p class="page-subtitle">Premium solutions for world-class results</p>
          </div>
        </div>
      </section>

      <!-- Services Grid -->
      <section class="services-grid-section section">
        <div class="container">
          <div class="services-grid">
            <div class="service-card glass card-hover fade-up" *ngFor="let service of services; let i = index">
              <div class="service-header">
                <div class="service-icon">{{ service.icon }}</div>
                <h2 class="service-title">{{ service.title }}</h2>
              </div>
              <p class="service-description">{{ service.description }}</p>
              <div class="service-features">
                <h3 class="features-title">Key Features:</h3>
                <ul class="features-list">
                  <li *ngFor="let feature of service.features">{{ feature }}</li>
                </ul>
              </div>
              <div class="service-cta">
                <a routerLink="/contact" class="btn-primary">Get Started</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Process Section -->
      <section class="process-section section">
        <div class="container">
          <div class="section-header fade-up">
            <h2 class="section-title">My Process</h2>
            <p class="section-subtitle">How I deliver exceptional results</p>
          </div>
          <div class="process-steps">
            <div class="process-step fade-up" *ngFor="let step of processSteps; let i = index">
              <div class="step-number">{{ i + 1 }}</div>
              <h3 class="step-title">{{ step.title }}</h3>
              <p class="step-description">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="cta-section section">
        <div class="container">
          <div class="cta-content glass-strong fade-up">
            <h2 class="cta-title">Ready to Transform Your Business?</h2>
            <p class="cta-text">Let's discuss how I can help you achieve your goals</p>
            <a routerLink="/contact" class="btn-primary">Start a Conversation</a>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .services-page {
      padding-top: 80px;
    }

    .section {
      padding: 100px 0;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 40px;
    }

    .services-hero {
      text-align: center;
      background: linear-gradient(135deg, rgba(0, 245, 255, 0.1), rgba(176, 38, 255, 0.1));
    }

    .page-title {
      font-size: 4rem;
      font-weight: 900;
      margin-bottom: 15px;
      background: linear-gradient(135deg, #00f5ff, #b026ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .page-subtitle {
      font-size: 1.5rem;
      color: rgba(255, 255, 255, 0.8);
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 40px;
    }

    .service-card {
      padding: 40px;
      border-radius: 20px;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .service-card:hover {
      transform: translateY(-10px) scale(1.02);
      box-shadow: 0 20px 40px rgba(0, 245, 255, 0.3);
    }

    .service-header {
      margin-bottom: 20px;
    }

    .service-icon {
      font-size: 4rem;
      margin-bottom: 15px;
    }

    .service-title {
      font-size: 2rem;
      font-weight: 800;
      margin-bottom: 15px;
      background: linear-gradient(135deg, #00f5ff, #b026ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .service-description {
      font-size: 1.1rem;
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.6;
      margin-bottom: 30px;
    }

    .service-features {
      margin-bottom: 30px;
    }

    .features-title {
      font-size: 1.2rem;
      font-weight: 700;
      color: #00f5ff;
      margin-bottom: 15px;
    }

    .features-list {
      list-style: none;
      padding: 0;
    }

    .features-list li {
      padding: 10px 0;
      padding-left: 25px;
      position: relative;
      color: rgba(255, 255, 255, 0.7);
      line-height: 1.6;
    }

    .features-list li::before {
      content: '→';
      position: absolute;
      left: 0;
      color: #00f5ff;
      font-weight: bold;
    }

    .service-cta {
      margin-top: 20px;
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

    .process-steps {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 30px;
    }

    .process-step {
      text-align: center;
      padding: 30px;
    }

    .step-number {
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, #00f5ff, #b026ff);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      font-weight: 800;
      margin: 0 auto 20px;
      box-shadow: 0 0 20px rgba(0, 245, 255, 0.5);
    }

    .step-title {
      font-size: 1.3rem;
      font-weight: 700;
      color: #00f5ff;
      margin-bottom: 15px;
    }

    .step-description {
      color: rgba(255, 255, 255, 0.7);
      line-height: 1.6;
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
      .page-title {
        font-size: 2.5rem;
      }

      .services-grid {
        grid-template-columns: 1fr;
      }

      .process-steps {
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
export class ServicesComponent implements OnInit, AfterViewInit {
  services = services;
  processSteps = [
    {
      title: 'Discovery',
      description: 'Understanding your business goals, challenges, and requirements in depth'
    },
    {
      title: 'Strategy',
      description: 'Developing a customized strategy tailored to your unique needs'
    },
    {
      title: 'Development',
      description: 'Building high-quality solutions with cutting-edge technology'
    },
    {
      title: 'Delivery',
      description: 'Deploying and optimizing your solution for maximum impact'
    }
  ];

  constructor(private animationService: AnimationService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.animationService.initScrollAnimations();
  }
}

