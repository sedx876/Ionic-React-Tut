import React from 'react'
import { IonApp, IonCard, IonCardContent } from '@ionic/react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import '@ionic/core/css/ionic.bundle.css'

function App() {
  return (
    <Router>
      <IonApp>
        <Route path='/:tab(Home)'/>
      </IonApp>
    </Router>
  );
}

export default App;
