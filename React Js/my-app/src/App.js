import { useState } from 'react' //hook
import Profile from './screens/profile'
import Dashboard from './screens/Dashboard'
import ContactUs from './screens/Contact Us'

import logo from './logo.svg';
import './App.css';

/*
2 Types of components in terms of Concept
a) Screenwise Component (e.g. Dashboard.js, Contact.js, AddForm.js etc)
b) Reusable Component (e.g. CustomBtn.js, InfoCard.js)


2 Types of components in terms of Syntax
a) Functional Component
b) Class Component
*/

function App() {
  const [screen, setScreen] = useState('dashboard')

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setScreen('dashboard')}>Dashboard</button>
        <button onClick={() => setScreen('profile')}>Profile</button>
        <button onClick={() => setScreen('contactUs')}>Contact Us</button>


        {screen === 'dashboard' && <Dashboard />}
        {screen === 'profile' && <Profile />}
        {screen === 'contactUs' && <ContactUs />}
      </header>
    </div>
  );
}

export default App;