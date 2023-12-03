import React from 'react'
import { useEffect, useState } from 'react'
import { getNewsById } from '../services/getNewsById'
import ImageContainer from './ImageContainer'
import { IonSpinner } from '@ionic/react'

import './ShowNews.css'

interface ContainerProps {
    id: number
}

const ShowNews: React.FC<ContainerProps> = ({ id }) => {
    const [news, setNews] = useState<any>()
    const [isLoading, setIsLoading] = useState<any>(true)

    useEffect(() => {
        getNewsById(id).then((response) => {
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
            {!isLoading && (
                <div className="container-news container-single-news">
                    <ImageContainer id={news?.featured_media} />
                    <div className="container-news-title">{news?.title.rendered}</div>
                    <div
                        className="container-news-content"
                        dangerouslySetInnerHTML={{ __html: news?.content.rendered }}
                    />
                </div>
            )}
        </div>
    )
}

export default React.memo(ShowNews)
