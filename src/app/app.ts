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

  // db-data থেকে প্রথম ৩টি কোর্সের ডাটা ভেরিয়েবলে রাখছি
  coreCourse = COURSES[0];
  rxjsCourse = COURSES[1];
  ngrxCourse = COURSES[2];

  // এই মেথডটি Child থেকে পাঠানো ডাটা রিসিভ করবে
  onCardClicked(course: Course) {
    console.log('Parent Component: Received event for course -', course.description);
  }
}
