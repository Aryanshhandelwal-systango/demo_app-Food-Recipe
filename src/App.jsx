import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from './components/pages/Home/Home';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import PrivateRoute from './components/Routes/PrivateRoute';
import PublicRoute from './components/Routes/PublicRoute';
import DescriptionPage from './components/pages/Description/DescriptionPage';
import NewRecipe from './components/pages/NewRecipe'
import store from './Store/store';
import { Provider } from 'react-redux';

function App() {

  return (
    <Provider store={store}>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
          <Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>} />
          <Route path="/description" element={<PrivateRoute><DescriptionPage /></PrivateRoute>} />
          <Route path="/new-recipe" element={<PrivateRoute><NewRecipe /></PrivateRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
    </Provider>

  );
}

export default App;
