// src/app/model/course.ts
export interface Course {
  id: number;
  description: string;
  iconUrl: string;
  longDescription: string;
  category: string;
  lessonsCount?: number; // ? optional (সব কোর্সে এটি নাও থাকতে পারে)
}

