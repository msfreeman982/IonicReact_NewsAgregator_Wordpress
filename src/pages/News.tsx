import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'
import logoImage from '../theme/logo.jpg'
import ShowNews from '../components/ShowNews'
import { useParams } from 'react-router'

import './News.css'

const News: React.FC = () => {
    const useCurrentPath = () => {
        const { newsId }: any = useParams()

        return newsId
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
                        <IonTitle size="large">News</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <ShowNews id={useCurrentPath()} />
            </IonContent>
        </IonPage>
    )
}

export default News
