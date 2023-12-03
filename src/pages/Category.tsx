import React from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import logoImage from '../theme/logo.jpg'
import Categories from '../components/Categories'
import { useParams } from 'react-router'

import './Category.css'

const Category: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <img src={logoImage} />
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Category</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <Categories />
            </IonContent>
        </IonPage>
    )
}

export default Category
