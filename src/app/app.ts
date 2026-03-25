// src/app/app.ts
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseCard } from './course-card/course-card';
import { COURSES } from '../db-data';
import { Course } from './models/course';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CourseCard],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly data = signal({ title: 'Angular 21' });
  onLogoClick() {
    alert('Hello world!');
  }

  onKeyUp(newTitle: string) {
    // Signal-এর নতুন ভ্যালু সেট করা হচ্ছে
    this.data.set({ title: newTitle });
  }

  // এখন পুরো COURSES অ্যারেটিকে একটিমাত্র ভেরিয়েবলে রাখছি
  courses = COURSES;

  // এই মেথডটি Child থেকে পাঠানো ডাটা রিসিভ করবে
  onCardClicked(course: Course) {
    console.log('Parent Component: Received event for course -', course.description);
  }

  trackCourse(index: number, course: Course): number {
    // আমরা ইউনিক আইডেন্টিফায়ার হিসেবে id রিটার্ন করছি
    return course.id;
  }
}
