import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { EmailService } from '../../services/email.service';
import { AnimationService } from '../../services/animation.service';
import { socialLinks, contactInfo } from '../../data/portfolio.data';
import { gsap } from 'gsap';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="contact-page">
      <!-- Hero Section -->
      <section class="contact-hero section">
        <div class="container">
          <div class="hero-content fade-up">
            <h1 class="page-title">Get In Touch</h1>
            <p class="page-subtitle">Let's build something amazing together</p>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="contact-section section">
        <div class="container">
          <div class="contact-content">
            <div class="contact-info fade-up">
              <h2 class="info-title">Let's Connect</h2>
              <p class="info-text">
                I'm always open to discussing new projects, creative ideas, or opportunities 
                to be part of your vision. Feel free to reach out!
              </p>
              <div class="contact-details">
                <div class="contact-item">
                  <div class="contact-icon">📧</div>
                  <div class="contact-text">
                    <h3>Email</h3>
                    <a href="mailto:{{contactInfo.email}}">{{contactInfo.email}}</a>
                  </div>
                </div>
                <div class="contact-item">
                  <div class="contact-icon">📱</div>
                  <div class="contact-text">
                    <h3>WhatsApp</h3>
                    <a [href]="contactInfo.whatsappLink" target="_blank" rel="noopener noreferrer">{{contactInfo.whatsapp}}</a>
                  </div>
                </div>
                <div class="contact-item">
                  <div class="contact-icon">🌍</div>
                  <div class="contact-text">
                    <h3>Location</h3>
                    <p>India</p>
                  </div>
                </div>
              </div>
              <div class="social-section">
                <h3 class="social-title">Follow Me</h3>
                <div class="social-icons">
                  <a [href]="socialLinks.linkedin" target="_blank" rel="noopener noreferrer" class="social-icon" title="LinkedIn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a [href]="socialLinks.github" target="_blank" rel="noopener noreferrer" class="social-icon" title="GitHub">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a [href]="socialLinks.twitter" target="_blank" rel="noopener noreferrer" class="social-icon" title="Twitter/X">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                    </svg>
                  </a>
                  <a [href]="socialLinks.instagram" target="_blank" rel="noopener noreferrer" class="social-icon" title="Instagram">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a [href]="socialLinks.whatsapp" target="_blank" rel="noopener noreferrer" class="social-icon" title="WhatsApp">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div class="contact-form-container fade-up">
              <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="contact-form glass">
                <div class="form-group">
                  <label for="name">Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    formControlName="name" 
                    placeholder="Your name"
                    [class.error]="contactForm.get('name')?.invalid && contactForm.get('name')?.touched"
                  />
                  <span class="error-message" *ngIf="contactForm.get('name')?.invalid && contactForm.get('name')?.touched">
                    Name is required
                  </span>
                </div>
                <div class="form-group">
                  <label for="email">Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    formControlName="email" 
                    placeholder="your.email@example.com"
                    [class.error]="contactForm.get('email')?.invalid && contactForm.get('email')?.touched"
                  />
                  <span class="error-message" *ngIf="contactForm.get('email')?.invalid && contactForm.get('email')?.touched">
                    Valid email is required
                  </span>
                </div>
                <div class="form-group">
                  <label for="subject">Subject *</label>
                  <input 
                    type="text" 
                    id="subject" 
                    formControlName="subject" 
                    placeholder="What's this about?"
                    [class.error]="contactForm.get('subject')?.invalid && contactForm.get('subject')?.touched"
                  />
                  <span class="error-message" *ngIf="contactForm.get('subject')?.invalid && contactForm.get('subject')?.touched">
                    Subject is required
                  </span>
                </div>
                <div class="form-group">
                  <label for="message">Message *</label>
                  <textarea 
                    id="message" 
                    formControlName="message" 
                    rows="6"
                    placeholder="Tell me about your project..."
                    [class.error]="contactForm.get('message')?.invalid && contactForm.get('message')?.touched"
                  ></textarea>
                  <span class="error-message" *ngIf="contactForm.get('message')?.invalid && contactForm.get('message')?.touched">
                    Message is required
                  </span>
                </div>
                <button 
                  type="submit" 
                  class="btn-primary submit-btn"
                  [disabled]="contactForm.invalid || isSubmitting"
                >
                  <span *ngIf="!isSubmitting">Send Message</span>
                  <span *ngIf="isSubmitting">Sending...</span>
                </button>
                <div class="success-message" *ngIf="showSuccess">
                  {{ successMessage }}
                </div>
                <div class="error-message" *ngIf="showError">
                  {{ errorMessage }}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .contact-page {
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

    .contact-hero {
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

    .contact-content {
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      gap: 60px;
    }

    .info-title {
      font-size: 2.5rem;
      font-weight: 800;
      margin-bottom: 20px;
      background: linear-gradient(135deg, #00f5ff, #b026ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .info-text {
      font-size: 1.1rem;
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.8;
      margin-bottom: 40px;
    }

    .contact-details {
      margin-bottom: 40px;
    }

    .contact-item {
      display: flex;
      gap: 20px;
      margin-bottom: 30px;
    }

    .contact-icon {
      font-size: 2rem;
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .contact-text h3 {
      font-size: 1.2rem;
      font-weight: 700;
      color: #00f5ff;
      margin-bottom: 5px;
    }

    .contact-text p {
      color: rgba(255, 255, 255, 0.7);
    }

    .social-section {
      margin-top: 40px;
    }

    .social-title {
      font-size: 1.2rem;
      font-weight: 700;
      color: #00f5ff;
      margin-bottom: 20px;
    }

    .social-icons {
      display: flex;
      gap: 15px;
    }

    .social-icon {
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: rgba(255, 255, 255, 0.7);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .social-icon:hover {
      color: #00f5ff;
      border-color: #00f5ff;
      box-shadow: 0 0 20px rgba(0, 245, 255, 0.5);
      transform: translateY(-3px);
    }

    .contact-form {
      padding: 40px;
      border-radius: 20px;
    }

    .form-group {
      margin-bottom: 25px;
    }

    .form-group label {
      display: block;
      margin-bottom: 8px;
      color: #00f5ff;
      font-weight: 600;
    }

    .form-group input,
    .form-group textarea {
      width: 100%;
      padding: 12px 15px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      color: #ffffff;
      font-size: 1rem;
      font-family: inherit;
      transition: all 0.3s ease;
    }

    .form-group input:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: #00f5ff;
      box-shadow: 0 0 10px rgba(0, 245, 255, 0.3);
    }

    .form-group input.error,
    .form-group textarea.error {
      border-color: #ff4444;
    }

    .form-group textarea {
      resize: vertical;
      min-height: 120px;
    }

    .error-message {
      color: #ff4444;
      font-size: 0.85rem;
      margin-top: 5px;
      display: block;
    }

    .submit-btn {
      width: 100%;
      margin-top: 20px;
    }

    .submit-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .success-message {
      margin-top: 20px;
      padding: 15px;
      background: rgba(0, 255, 0, 0.1);
      border: 1px solid rgba(0, 255, 0, 0.3);
      border-radius: 8px;
      color: #00ff00;
      text-align: center;
    }

    @media (max-width: 768px) {
      .page-title {
        font-size: 2.5rem;
      }

      .contact-content {
        grid-template-columns: 1fr;
      }

      .contact-form {
        padding: 30px 20px;
      }
    }
  `]
})
export class ContactComponent implements OnInit, AfterViewInit {
  contactForm: FormGroup;
  isSubmitting = false;
  showSuccess = false;
  showError = false;
  successMessage = '';
  errorMessage = '';
  socialLinks = socialLinks;
  contactInfo = contactInfo;

  constructor(
    private fb: FormBuilder,
    private emailService: EmailService,
    private animationService: AnimationService
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.animationService.initScrollAnimations();
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.showSuccess = false;
      this.showError = false;

      const formData = this.contactForm.value;

      this.emailService.sendEmail(formData).subscribe({
        next: (response) => {
          this.isSubmitting = false;
          this.showSuccess = true;
          this.successMessage = response.message;
          this.contactForm.reset();
          
          setTimeout(() => {
            this.showSuccess = false;
          }, 5000);
        },
        error: (error) => {
          this.isSubmitting = false;
          this.showError = true;
          this.errorMessage = 'Something went wrong. Please try again later.';
          
          setTimeout(() => {
            this.showError = false;
          }, 5000);
        }
      });
    }
  }
}

