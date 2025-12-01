import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { projects, Project } from '../../data/portfolio.data';
import { AnimationService } from '../../services/animation.service';
import { gsap } from 'gsap';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="projects-page">
      <!-- Hero Section -->
      <section class="projects-hero section">
        <div class="container">
          <div class="hero-content fade-up">
            <h1 class="page-title">My Projects</h1>
            <p class="page-subtitle">Innovative solutions that drive results</p>
          </div>
        </div>
      </section>

      <!-- Projects Grid -->
      <section class="projects-grid-section section">
        <div class="container">
          <div class="projects-grid">
            <div 
              class="project-card glass card-hover fade-up" 
              *ngFor="let project of projects; let i = index"
              (click)="openModal(project)"
            >
              <div class="project-image">
                <img [src]="project.image" [alt]="project.title" />
                <div class="project-overlay">
                  <span class="view-project">View Details →</span>
                </div>
              </div>
              <div class="project-content">
                <h3 class="project-title">{{ project.title }}</h3>
                <p class="project-description">{{ project.description }}</p>
                <div class="project-tags">
                  <span class="tag" *ngFor="let tag of project.tags">{{ tag }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Project Modal -->
      <div class="modal" [class.active]="selectedProject" (click)="closeModal()">
        <div class="modal-content" (click)="$event.stopPropagation()" *ngIf="selectedProject">
          <button class="modal-close" (click)="closeModal()">×</button>
          <div class="modal-body">
            <div class="modal-image">
              <img [src]="selectedProject.image" [alt]="selectedProject.title" />
            </div>
            <div class="modal-info">
              <h2 class="modal-title">{{ selectedProject.title }}</h2>
              <p class="modal-description">{{ selectedProject.longDescription }}</p>
              <div class="modal-tags">
                <span class="tag" *ngFor="let tag of selectedProject.tags">{{ tag }}</span>
              </div>
              <div class="modal-links">
                <a 
                  *ngIf="selectedProject.link" 
                  [href]="selectedProject.link" 
                  target="_blank" 
                  class="btn-primary"
                >
                  View Project
                </a>
                <a 
                  *ngIf="selectedProject.github" 
                  [href]="selectedProject.github" 
                  target="_blank" 
                  class="btn-secondary"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .projects-page {
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

    .projects-hero {
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

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 40px;
    }

    .project-card {
      border-radius: 20px;
      overflow: hidden;
      cursor: pointer;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .project-card:hover {
      transform: translateY(-10px) scale(1.02);
      box-shadow: 0 20px 40px rgba(0, 245, 255, 0.3);
    }

    .project-image {
      width: 100%;
      height: 250px;
      overflow: hidden;
      position: relative;
    }

    .project-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease;
    }

    .project-card:hover .project-image img {
      transform: scale(1.1);
    }

    .project-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 245, 255, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .project-card:hover .project-overlay {
      opacity: 1;
    }

    .view-project {
      color: #0a0a0f;
      font-weight: 700;
      font-size: 1.2rem;
    }

    .project-content {
      padding: 30px;
    }

    .project-title {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 15px;
      color: #00f5ff;
    }

    .project-description {
      color: rgba(255, 255, 255, 0.7);
      line-height: 1.6;
      margin-bottom: 20px;
    }

    .project-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    .tag {
      padding: 5px 15px;
      background: rgba(0, 245, 255, 0.1);
      border: 1px solid rgba(0, 245, 255, 0.3);
      border-radius: 20px;
      font-size: 0.85rem;
      color: #00f5ff;
    }

    .modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.9);
      backdrop-filter: blur(10px);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10000;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
    }

    .modal.active {
      opacity: 1;
      visibility: visible;
    }

    .modal-content {
      max-width: 900px;
      width: 90%;
      max-height: 90vh;
      overflow-y: auto;
      background: rgba(10, 10, 15, 0.95);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 20px;
      padding: 40px;
      position: relative;
      transform: scale(0.8);
      transition: transform 0.3s ease;
    }

    .modal.active .modal-content {
      transform: scale(1);
    }

    .modal-close {
      position: absolute;
      top: 20px;
      right: 20px;
      width: 40px;
      height: 40px;
      background: transparent;
      border: 2px solid #00f5ff;
      border-radius: 50%;
      color: #00f5ff;
      font-size: 1.5rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
    }

    .modal-close:hover {
      background: #00f5ff;
      color: #0a0a0f;
      transform: rotate(90deg);
    }

    .modal-body {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
    }

    .modal-image {
      width: 100%;
      border-radius: 12px;
      overflow: hidden;
    }

    .modal-image img {
      width: 100%;
      height: auto;
      display: block;
    }

    .modal-info {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .modal-title {
      font-size: 2rem;
      font-weight: 800;
      color: #00f5ff;
      margin-bottom: 15px;
    }

    .modal-description {
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.8;
      flex: 1;
    }

    .modal-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    .modal-links {
      display: flex;
      gap: 15px;
      flex-wrap: wrap;
    }

    @media (max-width: 768px) {
      .page-title {
        font-size: 2.5rem;
      }

      .projects-grid {
        grid-template-columns: 1fr;
      }

      .modal-body {
        grid-template-columns: 1fr;
      }

      .modal-content {
        padding: 30px 20px;
      }
    }
  `]
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  projects = projects;
  selectedProject: Project | null = null;

  constructor(private animationService: AnimationService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.animationService.initScrollAnimations();
  }

  openModal(project: Project): void {
    this.selectedProject = project;
    document.body.style.overflow = 'hidden';
    
    // Animate modal in
    setTimeout(() => {
      const modal = document.querySelector('.modal-content');
      if (modal) {
        gsap.fromTo(modal, 
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.3, ease: 'power2.out' }
        );
      }
    }, 10);
  }

  closeModal(): void {
    const modal = document.querySelector('.modal-content');
    if (modal) {
      gsap.to(modal, {
        scale: 0.8,
        opacity: 0,
        duration: 0.2,
        ease: 'power2.in',
        onComplete: () => {
          this.selectedProject = null;
          document.body.style.overflow = '';
        }
      });
    } else {
      this.selectedProject = null;
      document.body.style.overflow = '';
    }
  }
}

