// src/app/course-card/course-card.ts
import { Component, input } from '@angular/core';
import { Course } from '../models/course';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-course-card',
  imports: [NgClass],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard {
  // ডাটা রিসিভ করার ইনপুট (Parent থেকে আসা ডাটা)
  course = input.required<Course>();

  // Parent থেকে index রিসিভ করার জন্য
  index = input.required<number>();

  // Parent থেকে isEven রিসিভ করার জন্য (ডিফল্ট false দিলাম)
  isEven = input<boolean>(false);
}
