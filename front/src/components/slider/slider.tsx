import React, {useCallback, useEffect, useState} from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component"

interface ISlider{
    autoPlay: boolean,
    autoPlayTime: number,
    image: string[],
    header: string,
    title: string,
}

const Slider = (props :ISlider) => {
    const [slide, setSlide] = useState(0);

    const changeSlide = useCallback( (direction : number) => {
        setSlide((props.image.length + slide + direction) % props.image.length)
    },[props.image.length, slide] )

    useEffect(() => {
        if (!props.autoPlay) return

        const interval = setInterval(() => {
            changeSlide(1)
        }, props.autoPlayTime)

        return () => {
            clearInterval(interval)
        }
    }, [slide, props.autoPlay, props.autoPlayTime, changeSlide])

    const chosenDot = (num : number) => {
        if (slide === num){
            return "slider__dot slider__chosen"
        }
        return "slider__dot"
    }


    return (
        <div className="slider">
            <div className="slider__description">
                <div className="slider__header">{props.header}</div>
                <div className="slider__title">{props.title}</div>
            </div>
            <div className="slider__previousSlide" onClick={()=> changeSlide(-1)}></div>
            <LazyLoadImage className="slider__image" alt="" src={props.image[slide]} />
            <div className="slider__nextSlide" onClick={() => changeSlide(1)}></div>
            <div className="slider__dots">
                <div onClick={()=> setSlide(0)} style={{padding: '5px'}}><div className={chosenDot(0)}/></div>
                <div onClick={()=> setSlide(1)} style={{padding: '5px'}}><div className={chosenDot(1)}/></div>
                <div onClick={()=> setSlide(2)} style={{padding: '5px'}}><div className={chosenDot(2)}/></div>
            </div>
        </div>
    )
}

export default Slider;