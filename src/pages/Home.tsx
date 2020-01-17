import { IonContent, IonIcon, IonLabel, IonButton, IonItem, IonHeader, IonPage, IonTitle, IonToolbar, IonCardTitle, IonImg, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonFooter } from '@ionic/react';
import React from 'react';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle color="primary">Test</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard>
          <img src="assets/img/1.jpg" />
          <IonCardHeader>
            <IonCardSubtitle>원준이가 좋아하는</IonCardSubtitle>
            <IonCardTitle>
              박세완
            </IonCardTitle>
          </IonCardHeader>
          <hr />
          <IonCardContent>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas sint praesentium hic doloremque laborum voluptates temporibus atque. Quod id cumque exercitationem, laborum excepturi maiores quasi sequi qui officia. Illum, earum.
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonItem>
            <IonIcon name="pint" slot="start" />
            <IonLabel>ion-item in a card, icon left, button right</IonLabel>
            <IonButton fill="outline" slot="end">View</IonButton>
          </IonItem>
          <IonContent>
            this is content, widthout any paragraph or header tags,
            within an ion-cardcontent element.
          </IonContent>
        </IonCard>
        <IonCard>
          <IonItem href="#" class="activated">
            <IonIcon name="wifi" slot="start" />
            <IonLabel>Card Link Item 1 .activated</IonLabel>
          </IonItem>

          <IonItem href="#">
            <IonIcon name="wine" slot="start" />
            <IonLabel>Card Link Item 2</IonLabel>
          </IonItem>

          <IonItem class="activated">
            <IonIcon name="warning" slot="start" />
            <IonLabel>Card Button Item 1 .activated</IonLabel>
          </IonItem>

          <IonItem>
            <IonIcon name="walk" slot="start" />
            <IonLabel>Card Button Item 2</IonLabel>
          </IonItem>
        </IonCard>
      </IonContent>
      <IonFooter>
        <IonToolbar  >
          <IonButton className="buttont" shape="round">
            <IonIcon name="wifi" />
          </IonButton>
          <IonButton className="buttont">
            <IonIcon name="pin"/>
          </IonButton>
          <IonButton className="buttont">
            <IonIcon name="pricetag"/>
          </IonButton>
          <IonButton className="buttont">
            <IonIcon name="logo-pinterest"/>
          </IonButton>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Home;
