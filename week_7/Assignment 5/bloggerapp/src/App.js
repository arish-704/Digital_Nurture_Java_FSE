
import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';
import './App.css';


const books = [
  { id: 101, bname: 'Master React', price: 670, isBestseller: true },
  { id: 102, bname: 'Deep Dive into Angular 11', price: 800 },
  { id: 103, bname: 'Mongo Essentials', price: 450 },
];

const blogs = [
    { title: 'React Learning', author: 'Stephen Biz', content: 'Welcome to learning React!' },
    { title: 'Installation', author: 'Schewzdenier', content: 'You can install React from npm.' },
    { title: 'State Management', content: 'A core concept in modern frameworks.' }, 
];

const courses = [
    { name: 'Angular', date: '4/5/2021' },
    { name: 'React', date: '6/3/2020' },
];


function App() {
  
  const [view, setView] = useState('all'); 

  
  const showContent = true; 
  if (!showContent) {
    return <h1>Content is currently hidden.</h1>;
  }

  
  const renderContent = () => {
    switch (view) {
      case 'books':
        return <div className="column"><BookDetails books={books} /></div>;
      case 'blogs':
        return <div className="column"><BlogDetails blogs={blogs} /></div>;
      case 'courses':
        return <div className="column"><CourseDetails courses={courses} /></div>;
      default: // 'all'
        return (
          <>
            <div className="column">
              <h2>Course Details</h2>
              <CourseDetails courses={courses} />
            </div>
            <div className="column v-line">
              <h2>Book Details</h2>
              <BookDetails books={books} />
            </div>
            <div className="column v-line">
              <h2>Blog Details</h2>
              <BlogDetails blogs={blogs} />
            </div>
          </>
        );
    }
  };

  return (
    <div className="App">
      <div className="controls">
        <button onClick={() => setView('all')}>Show All</button>
        <button onClick={() => setView('books')}>Books Only</button>
        <button onClick={() => setView('blogs')}>Blogs Only</button>
        <button onClick={() => setView('courses')}>Courses Only</button>
      </div>
      <div className="container">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;