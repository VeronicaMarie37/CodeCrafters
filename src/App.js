import React from 'react';
import Header from './components/Header';
import NavigationBar from './components/NavigationBar';
import CourseList from './components/CourseList'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <NavigationBar />
      <CourseList /> 
    </div>
  );
}

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import CourseList from './components/CourseList';
// import AddCourse from './components/AddCourse';
// import EditCourse from './components/EditCourse';
// import CourseDetails from './components/CourseDetails';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<CourseList />} />
//         <Route path="/courses/add" element={<AddCourse />} />
//         <Route path="/courses/:id/edit" element={<EditCourse />} />
//         <Route path="/courses/:id" element={<CourseDetails />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


