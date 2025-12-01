import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { milestones } from '../../data/portfolio.data';
import { AnimationService } from '../../services/animation.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="about-page">
      <!-- Hero Section -->
      <section class="about-hero section">
        <div class="container">
          <div class="hero-content fade-up">
            <h1 class="page-title">About Me</h1>
            <p class="page-subtitle">Indian Entrepreneur & Visionary</p>
          </div>
        </div>
      </section>

      <!-- Profile Section -->
      <section class="profile-section section">
        <div class="container">
          <div class="profile-content">
            <div class="profile-text fade-up">
              <h2 class="section-title">Gokulraja L P</h2>
              <h3 class="profile-role">Founder of Gentrobyte AI Labs</h3>
              <div class="profile-description">
                <p>
                  I'm <strong>Gokulraja L P</strong> (also known as <strong>gokulrajalp</strong> or <strong>gokul raja l p</strong>), 
                  a passionate Indian entrepreneur dedicated to transforming businesses through 
                  cutting-edge technology. As the founder of <strong>Gentrobyte AI Labs</strong>, 
                  I lead a team that builds intelligent AI agents, custom software solutions (Web Applications, 
                  Mobile Apps, Enterprise Applications, ERP, CRM, LMS, HRM), and digital marketing & SEO strategies 
                  that drive real results globally.
                </p>
                <p>
                  My journey began with a simple vision: to put <strong>India on top of global tech</strong>. 
                  This vision drives everything I do, from developing AI agents that automate complex 
                  workflows to building scalable software systems and business automation platforms 
                  (ERP, CRM, LMS, HRM) that power businesses worldwide.
                </p>
                <p>
                  With years of experience in AI Agent Development, Software Development (Web Apps, Mobile Apps, 
                  Enterprise Apps), Business Automation Platforms, Digital Marketing, and Global SEO Services, 
                  I've helped numerous businesses achieve unprecedented growth through innovative 
                  technology solutions. My approach combines technical excellence with business acumen, 
                  ensuring that every project delivers measurable value.
                </p>
              </div>
            </div>
            <div class="profile-image fade-up">
              <div class="image-container glass">
                <img src="assets/images/gokulrajalp.jpg" alt="Gokulraja L P - Indian Entrepreneur & Founder of Gentrobyte AI Labs" class="profile-photo" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Timeline Section -->
      <section class="timeline-section section">
        <div class="container">
          <div class="section-header fade-up">
            <h2 class="section-title">My Journey</h2>
            <p class="section-subtitle">Milestones that shaped my path</p>
          </div>
          <div class="timeline">
            <div class="timeline-item fade-up" *ngFor="let milestone of milestones; let i = index">
              <div class="timeline-marker">
                <div class="marker-icon">{{ milestone.icon }}</div>
                <div class="marker-line" *ngIf="i < milestones.length - 1"></div>
              </div>
              <div class="timeline-content glass">
                <div class="timeline-year">{{ milestone.year }}</div>
                <h3 class="timeline-title">{{ milestone.title }}</h3>
                <p class="timeline-description">{{ milestone.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Vision Section -->
      <section class="vision-section section">
        <div class="container">
          <div class="vision-content glass-strong fade-up">
            <h2 class="vision-title">Vision: India on Top of Global Tech</h2>
            <div class="vision-text">
              <p>
                My ultimate vision is to position India as the global leader in technology innovation. 
                Through Gentrobyte AI Labs, I'm working towards this goal by:
              </p>
              <ul class="vision-list">
                <li>Building world-class AI solutions that compete on a global scale</li>
                <li>Developing innovative software systems that set new industry standards</li>
                <li>Empowering businesses with cutting-edge digital marketing strategies</li>
                <li>Creating opportunities for Indian talent to shine on the world stage</li>
                <li>Fostering a culture of innovation and excellence in everything we do</li>
              </ul>
              <p>
                Every project, every client, and every innovation brings us one step closer to 
                realizing this vision. Together, we're not just building technology—we're building 
                the future of India's tech dominance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Skills Section -->
      <section class="skills-section section">
        <div class="container">
          <div class="section-header fade-up">
            <h2 class="section-title">Core Expertise</h2>
          </div>
          <div class="skills-grid">
            <div class="skill-card glass card-hover fade-up" *ngFor="let skill of skills">
              <div class="skill-icon">{{ skill.icon }}</div>
              <h3 class="skill-name">{{ skill.name }}</h3>
              <p class="skill-level">{{ skill.level }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .about-page {
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

    .about-hero {
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

    .profile-content {
      display: grid;
      grid-template-columns: 1.5fr 1fr;
      gap: 60px;
      align-items: start;
    }

    .section-title {
      font-size: 2.5rem;
      font-weight: 800;
      margin-bottom: 20px;
      background: linear-gradient(135deg, #00f5ff, #b026ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .profile-role {
      font-size: 1.3rem;
      color: #00f5ff;
      margin-bottom: 30px;
      font-weight: 600;
    }

    .profile-description {
      line-height: 1.8;
    }

    .profile-description p {
      font-size: 1.1rem;
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 20px;
    }

    .profile-description strong {
      color: #00f5ff;
    }

    .profile-image {
      position: sticky;
      top: 100px;
    }

    .image-container {
      width: 100%;
      aspect-ratio: 1;
      border-radius: 20px;
      overflow: hidden;
      position: relative;
    }

    .profile-photo {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .image-container:hover .profile-photo {
      transform: scale(1.05);
    }

    .section-header {
      text-align: center;
      margin-bottom: 60px;
    }

    .section-subtitle {
      font-size: 1.2rem;
      color: rgba(255, 255, 255, 0.7);
    }

    .timeline {
      position: relative;
      max-width: 800px;
      margin: 0 auto;
    }

    .timeline-item {
      display: flex;
      gap: 30px;
      margin-bottom: 40px;
      position: relative;
    }

    .timeline-marker {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
    }

    .marker-icon {
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, #00f5ff, #b026ff);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      z-index: 1;
      box-shadow: 0 0 20px rgba(0, 245, 255, 0.5);
    }

    .marker-line {
      width: 2px;
      flex: 1;
      background: linear-gradient(180deg, #00f5ff, #b026ff);
      margin-top: 10px;
    }

    .timeline-content {
      flex: 1;
      padding: 30px;
      border-radius: 12px;
      margin-top: 10px;
    }

    .timeline-year {
      color: #00f5ff;
      font-weight: 700;
      font-size: 1.2rem;
      margin-bottom: 10px;
    }

    .timeline-title {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 10px;
      color: #ffffff;
    }

    .timeline-description {
      color: rgba(255, 255, 255, 0.7);
      line-height: 1.6;
    }

    .vision-section {
      background: linear-gradient(135deg, rgba(0, 245, 255, 0.1), rgba(176, 38, 255, 0.1));
    }

    .vision-content {
      padding: 60px;
      border-radius: 20px;
    }

    .vision-title {
      font-size: 2.5rem;
      font-weight: 800;
      margin-bottom: 30px;
      text-align: center;
      background: linear-gradient(135deg, #00f5ff, #b026ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .vision-text {
      line-height: 1.8;
    }

    .vision-text p {
      font-size: 1.1rem;
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 20px;
    }

    .vision-list {
      list-style: none;
      padding: 0;
      margin: 30px 0;
    }

    .vision-list li {
      padding: 15px 0;
      padding-left: 30px;
      position: relative;
      color: rgba(255, 255, 255, 0.8);
      font-size: 1.1rem;
    }

    .vision-list li::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: #00f5ff;
      font-weight: bold;
      font-size: 1.2rem;
    }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 30px;
    }

    .skill-card {
      padding: 30px;
      text-align: center;
      border-radius: 12px;
    }

    .skill-icon {
      font-size: 3rem;
      margin-bottom: 15px;
    }

    .skill-name {
      font-size: 1.2rem;
      font-weight: 700;
      margin-bottom: 10px;
      color: #00f5ff;
    }

    .skill-level {
      color: rgba(255, 255, 255, 0.7);
      font-size: 0.9rem;
    }

    @media (max-width: 768px) {
      .page-title {
        font-size: 2.5rem;
      }

      .profile-content {
        grid-template-columns: 1fr;
      }

      .profile-image {
        position: static;
      }

      .timeline-item {
        flex-direction: column;
      }

      .marker-line {
        display: none;
      }

      .vision-content {
        padding: 40px 20px;
      }

      .vision-title {
        font-size: 1.8rem;
      }

      .skills-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  `]
})
export class AboutComponent implements OnInit, AfterViewInit {
  milestones = milestones;
  skills = [
    { icon: '🤖', name: 'AI/ML', level: 'Expert' },
    { icon: '💻', name: 'Full-Stack Dev', level: 'Advanced' },
    { icon: '☁️', name: 'Cloud Architecture', level: 'Expert' },
    { icon: '📊', name: 'Data Analytics', level: 'Advanced' },
    { icon: '🚀', name: 'DevOps', level: 'Advanced' },
    { icon: '📱', name: 'Mobile Development', level: 'Intermediate' }
  ];

  constructor(private animationService: AnimationService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.animationService.initScrollAnimations();
  }
}

