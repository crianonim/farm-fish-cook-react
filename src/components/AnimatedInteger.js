import React, { useRef, useState, useEffect } from "react";

const interpolate = (from, to, time = 1000, fps = 60) => (to - from) / (time / fps)

export default ({ number, time = 1000, fps = 60, shake = false, changeColor = false, showDelta = false }) => {
    const [displayedNumber, setDisplayedNumber] = useState(number);
    const [animating, setAnimating] = useState(false);
    const [delta, setDelta] = useState(0);
    const [percent, setPercent] = useState(0);
    const data = useRef({ number, step: 0 })
    useEffect(() => {
        setDelta(number - data.current.number);
        data.current.step = interpolate(data.current.number, number, time, fps)
        setPercent(0)
        if (number !== data.current) {
            const animateNumber = () => {
                setAnimating(true)
                return setTimeout(() => {
                    const rounded = Math.round(data.current.number)
                    if ((data.current.step > 0 && rounded < number) || (data.current.step < 0 && rounded > number)) {
                        // console.log(Math.round(data.current.number), number, step)
                        setDisplayedNumber(Math.round(data.current.number));
                        data.current.number += data.current.step;
                        setPercent(n => n + fps / time)
                        return animateNumber();
                    } else {
                        setAnimating(false);
                        data.current.number = number;
                        setDisplayedNumber(number);
                    }

                }, 1000 / fps)
            }
            animateNumber();
        } else {
            console.log("Not animating")
        }
    }, [number, fps, time])
    const transform = shake ? `translate(${animating ? (Math.random() * 2 - 1) : 0}px, ${animating ? (Math.random() * 2 - 1) : 0}px)` : null;
    const color = (changeColor && animating) ? (data.current.step > 0 ? "green" : "red") : null
    const style = { display: 'inline-block', transition: 'color 0.2s', transform, color }


    return (<span>
        <span style={style}>{displayedNumber}</span>
        {showDelta && animating && (delta !== 0) ? <span style={{ ...style, position: 'absolute', transform: `translate(-50%,-${100 * percent}%)` }}>{delta}</span> : null}
    </span>)
}