import React from 'react'
import { useEffect, useState } from 'react'
import { getCategoryList } from '../services/getCategory'
import { IonSpinner } from '@ionic/react'

import './Categories.css'

interface ContainerProps {
    name?: string
}

const Categories: React.FC<ContainerProps> = () => {
    const [category, setCategory] = useState<any>()
    const [isLoading, setIsLoading] = useState<any>(true)

    useEffect(() => {
        getCategoryList().then((response) => {
            setCategory(response)
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
            {category &&
                category.map((item: any) => {
                    return (
                        <div key={item?.id} className="container-news">
                            <a key={item?.id} href={'/сategoryNews/' + item?.id}>
                                <div className="container-news-title">{item?.name}</div>
                            </a>
                        </div>
                    )
                })}
        </div>
    )
}

export default React.memo(Categories)
