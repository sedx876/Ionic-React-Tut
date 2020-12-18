import React from 'react';
import { IonApp, IonPage, IonSplitPane, IonRouterOutlet } from '@ionic/react';
import { BrowserRouter, Route } from 'react-router-dom';
import '@ionic/core/css/ionic.bundle.css';
import Menu from './Menu';
import Home from './Home';
import About from './About';

function App() {
  return (
    <BrowserRouter>
      <IonApp>
        <IonSplitPane contentId="main">
          <Menu />
          <IonPage id="main">
            <IonRouterOutlet>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
            </IonRouterOutlet>
          </IonPage>
        </IonSplitPane>
      </IonApp>
    </BrowserRouter>
  );
}

export default App;