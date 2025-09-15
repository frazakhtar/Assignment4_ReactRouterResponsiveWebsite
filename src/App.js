import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/Home/HomePage';
import About from './Components/About/About';
import Layout from './Components/Layout/Layout';
import UserInfo from './Components/UserInfo/UserInfo';
import { ThemeProvider } from '@mui/material';
import theme from './Theme/theme'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/user_info" element={<UserInfo />} />
        <Route path="/*" element={<h1>This is Error 404</h1>} />
      </Routes>
      </Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;
