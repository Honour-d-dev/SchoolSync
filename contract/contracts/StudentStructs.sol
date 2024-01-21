// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.19;

struct Student {
  string studentId; //matriculation number
  string name;
  string studentInfo;
}

struct Document {
  string name;
  string uri;
}

struct Course {
  string courseCode;
  string courseTitle;
  uint8 unit;
  uint8 score;
}

struct Session {
  Course[] firstSemester;
  Course[] secondSemester;
}

enum Semester {
  FIRST,
  SECOND
}

enum StudentStatus {
  NOT_A_STUDENT, //default
  UNREGISTERED,
  REGISTERED
}

/** solely used for uploading documents */
struct DocumentWithId {
  string studentId;
  Document document;
}
/**StudentCourseData */
struct CourseWithId {
  string id;
  Course course;
}
