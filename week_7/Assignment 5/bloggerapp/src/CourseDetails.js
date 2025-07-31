
import React from 'react';

function CourseDetails({ courses }) {
  return (
    <div>
      {courses.map((course) => (
        <div key={course.name}>
          <h3>{course.name}</h3>
          <h4>{course.date}</h4>
        </div>
      ))}
    </div>
  );
}

export default CourseDetails;