import React from 'react';
import './App.css';
import Layout from './containers/Layout'
import Account from './containers/Account'

function App() {
  return (
    <div className="App">

      <Layout>
        <Account />
      </Layout>

    </div>
  );
}

export default App;