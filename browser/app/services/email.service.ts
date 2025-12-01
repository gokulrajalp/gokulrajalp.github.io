import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  constructor() {}

  sendEmail(data: EmailData): Observable<{ success: boolean; message: string }> {
    // In production, replace this with actual email service integration
    // Examples: SendGrid, EmailJS, AWS SES, etc.
    
    console.log('Email data:', data);
    
    // Simulate API call
    return of({
      success: true,
      message: 'Thank you for your message! I will get back to you soon.'
    }).pipe(delay(1000));
  }
}

