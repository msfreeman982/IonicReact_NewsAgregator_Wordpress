import React from 'react'
import { useEffect, useState } from 'react'
import { getNewsImage } from '../services/getNewsImage'
import { IonImg, IonSpinner } from '@ionic/react'

import './ImageContainer.css'

interface ContainerProps {
    id: number
}

const ImageContainer: React.FC<ContainerProps> = ({ id }) => {
    const [image, setImages] = useState<any>()
    const [isLoading, setIsLoading] = useState<any>(true)

    const getImage = async (id: number) => {
        return await getNewsImage(id).then((data) => data.toString())
    }

    useEffect(() => {
        ;(async () => {
            const imageLink = await getImage(id)
            setImages(imageLink)
            setIsLoading(false)
        })()
    })

    return <>{isLoading ? <IonSpinner color="danger"></IonSpinner> : <IonImg src={image} />}</>
}

export default React.memo(ImageContainer)
