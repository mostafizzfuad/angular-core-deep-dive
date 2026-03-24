// src/app/course-card/course-card.ts
import { Component, input, output } from '@angular/core';
import { Course } from '../models/course';

@Component({
  selector: 'app-course-card',
  imports: [],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard {
  // আধুনিক Signal Input ব্যবহার করে ডাটা রিসিভ করা (এটি required)
  course = input.required<Course>();
}
