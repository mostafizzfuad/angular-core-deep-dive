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
  // ১. ডাটা রিসিভ করার ইনপুট (Parent থেকে আসা ডাটা)
  course = input.required<Course>();

  // ২. Custom Event বা আউটপুট তৈরি করছি (ট্রান্সমিটার)
  courseSelected = output<Course>();

  // ৩. বাটনে ক্লিক করলে এই মেথডটি রান করবে
  onCourseViewed() {
    console.log('Child Component: Button clicked!');

    // ৪. Parent-এর কাছে ইভেন্ট এবং সাথে ডাটা (course object) পাঠিয়ে দিচ্ছি
    this.courseSelected.emit(this.course());
  }
}
