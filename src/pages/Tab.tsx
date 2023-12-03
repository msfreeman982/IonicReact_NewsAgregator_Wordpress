import { IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import ExploreContainer from '../components/ExploreContainer'
import logoImage from '../theme/logo.jpg'
import React from 'react'

import './Tab.css'

const Tab: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <div className="w-full">
                        <img src={logoImage} />
                    </div>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">News</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <ExploreContainer name={''} />
            </IonContent>
        </IonPage>
    )
}

export default Tab
