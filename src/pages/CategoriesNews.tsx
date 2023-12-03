import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'
import logoImage from '../theme/logo.jpg'
import CategoryNews from '../components/CategoryNews'
import { useParams } from 'react-router'

import './CategoriesNews.css'

const CategoriesNews: React.FC = () => {
    const useCurrentPath = () => {
        const { id }: any = useParams()
        console.log(id)
        return id
    }

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
                        <IonTitle size="large">Category News</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <CategoryNews id={useCurrentPath()} />
            </IonContent>
        </IonPage>
    )
}

export default CategoriesNews
