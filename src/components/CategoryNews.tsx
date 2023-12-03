import { useEffect, useState } from 'react'
import { getNewsByCategoryPage } from '../services/getNewsByCategoryPage'
import { getNewsByCategory } from '../services/getNewsByCategory'
import ImageContainer from './ImageContainer'
import React from 'react'
import { IonSpinner } from '@ionic/react'
import { IonIcon, IonLabel, IonTabButton } from '@ionic/react'
import { arrowForward, arrowBack } from 'ionicons/icons'

import './CategoryNews.css'

interface CategoryNewsProps {
    id: number
}

const CategoryNews: React.FC<CategoryNewsProps> = ({ id }) => {
    const [news, setNews] = useState<any>()
    const [page, setPage] = useState<number>(1)
    const [isLoading, setIsLoading] = useState<any>(true)

    const showNext = () => {
        const pageNext = +page + 1
        setPage(pageNext)
        getNewsByCategoryPage(id, pageNext).then((response: any) => {
            setNews(response)
            setIsLoading(false)
        })
    }

    const showPrev = () => {
        const pagePrev = +page - 1
        if (pagePrev < 0) return
        setPage(pagePrev)
        getNewsByCategoryPage(id, pagePrev).then((response: any) => {
            setNews(response)
            setIsLoading(false)
        })
    }

    useEffect(() => {
        getNewsByCategory(id).then((response: any) => {
            setNews(response)
            setIsLoading(false)
        })
    }, [])

    return (
        <div className="container">
            {isLoading && (
                <div className="spinner">
                    <IonSpinner color="danger" />
                </div>
            )}
            {!isLoading &&
                news.map((item: any) => {
                    return (
                        <>
                            {isLoading && (
                                <div className="spinner">
                                    <IonSpinner color="danger" />
                                </div>
                            )}
                            {!isLoading && (
                                <a key={item?.id} href={'/News/' + item?.id}>
                                    <div className="container-news">
                                        <ImageContainer id={item?.featured_media} />
                                        <div className="container-news-title">{item?.title.rendered}</div>
                                    </div>
                                </a>
                            )}
                        </>
                    )
                })}
            {!isLoading && (
                <div className="flex mb40px mt40px">
                    <IonTabButton tab="tab" onClick={() => showPrev()}>
                        <IonIcon aria-hidden="true" icon={arrowBack} />
                        <IonLabel>Back</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="tab" onClick={() => showNext()}>
                        <IonIcon aria-hidden="true" icon={arrowForward} />
                        <IonLabel>Next</IonLabel>
                    </IonTabButton>
                </div>
            )}
        </div>
    )
}

export default React.memo(CategoryNews)
