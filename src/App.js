import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/Home/HomePage';
import About from './Components/About/About';
import Layout from './Components/Layout/Layout';
import UserInfo from './Components/UserInfo/UserInfo';

function App() {
  return (
    <div className="App">
      <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/user_info" element={<UserInfo />} />
        <Route path="/*" element={<h1>This is Error 404</h1>} />
      </Routes>
      </Layout>
    </div>
  );
}

export default App;
