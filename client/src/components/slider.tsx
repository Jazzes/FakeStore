import React, {ReactEventHandler, useState} from 'react';

interface ISlider{
    autoPlay: boolean,
    autoPlayTime: number,
    image: string[],
}


const Slider = (props :ISlider) => {
    const [items, setItems] = useState([])
    const [slide, setSlide] = useState(0)
    const [touchPosition, setTouchPosition] = useState(null)

    const changeSlide = (direction : number = 1) => {
        let slideNumber

        if (slide + direction < 0) {
            slideNumber = items.length - 1
        } else {
            slideNumber = (slide + direction) % items.length
        }

        setSlide(slideNumber)
    }

    const goToSlide = (number: number) => {
        setSlide(number % items.length)
    }

    const handleTouchStart = (e: any) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }

    const handleTouchMove = (e: any) => {
        if (touchPosition === null) {
            return
        }

        const currentPosition = e.touches[0].clientX
        const direction = touchPosition - currentPosition

        if (direction > 10) {
            changeSlide(1)
        }

        if (direction < -10) {
            changeSlide(-1)
        }

        setTouchPosition(null)
    }





    return (
        <div>
        </div>
    )
}

export default Slider;