import React from 'react';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonMenuButton,
  IonList,
  IonItem,
  IonIcon,
  IonBackButton,
  IonButtons
} from '@ionic/react';

const About = () => (
  <>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          {/* TODO why doesn’t this show up? */}
          <IonBackButton goBack={() => {}} />
          <IonMenuButton />
        </IonButtons>
        <IonTitle>About</IonTitle>
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
    </IonContent>
  </>
);

export default About;
