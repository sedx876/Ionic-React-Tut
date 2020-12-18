import React from 'react';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonIcon,
  IonMenuButton,
  IonButton
} from '@ionic/react';

const Home = () => (
  <>
    <IonHeader>
      <IonToolbar>
        <IonMenuButton slot="start" />
        <IonTitle>Home</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonList>
        <IonItem>
          <IonIcon name="paper-plane" slot="start" />
          Beards
        </IonItem>
        <IonItem>
          <IonIcon name="musical-notes" slot="start" />
          Guitars
        </IonItem>
        <IonItem>
          <IonIcon name="cafe" slot="start" />
          Bourbon
        </IonItem>
      </IonList>
      <IonButton onClick={event => console.log(event)}>
        Make It Ripple
      </IonButton>
    </IonContent>
  </>
);

export default Home;
