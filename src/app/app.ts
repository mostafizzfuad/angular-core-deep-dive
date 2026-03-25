// src/app/app.ts
import { Component, signal } from '@angular/core';
import { NgFor } from '@angular/common';
import { CourseCard } from './course-card/course-card';
import { COURSES } from '../db-data';

@Component({
  selector: 'app-root',
  imports: [CourseCard, NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly data = signal({ title: 'Angular 21' });

  // পুরো কোর্সের লিস্ট একটি ভেরিয়েবলে রাখছি
  courses = COURSES;
}
