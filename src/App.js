// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './googleSignin/SignIn';
import Home from './googleSignin/Home'; // Import Home component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<Home />} /> {/* Use /home route for Home component */}
      </Routes>
    </Router>
  )
}

export default App;
