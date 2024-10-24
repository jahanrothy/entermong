export interface UserFormInput {
  // text
  full_name?: string;
  email?: string;
  password?: string;
  retype_password?: string;
  about_me?: string;
  date_of_birth?: Date | string;
  address?: string;
  phone_number?: number | string;
  teacher_introduction?: string;
  teacher_education?: string;
  teacher_experience?: string;
  teacher_specialization?: string;

  // select
  role?: string;
  is_active?: boolean | string;
  gender?: string;
  province?: string | number;
  country?: string | number;
  city?: string | number;

  // file
  profile_picture: File;
  cv: File;
}

export interface CustomPageInput {
  title: string;
  content: string;
}

export interface CourseCategoryInput {
  icon: File;
  name: string;
}

export interface CourseKeywordInput {
  name: string;
}

export interface ChapterInput {
  chapter?: string;
  course?: string;
}

export interface VideoInput {
  name: string;
  chapter: string;
  video: File;
}

export interface LiveClassInput {
  name: string;
  zoomLink: string;
  started_at: Date;
  finished_at: Date;
  status: string;
  course: string;
}
