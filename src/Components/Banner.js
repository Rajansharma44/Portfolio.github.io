import React, { useState, useEffect } from 'react';
import './Banner.css';
import roboImg from '../Images/robot.png';

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const toRotate = ["Front-End Developer", "Graphic Designer", "Content Creator"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
    return (
        <main className='main-sec' id='home-sec'>
            <section className='main-sub-sec1'>

                <span className='main-text' >
                    <div>
                        <h1>{`Hi! I'm Chander Mohan`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Voice Over Artist", "Graphic Designer", "Content Creator" ]'><span className="wrap">{text}</span></span></h1>
                    </div>
                    <div>
                        <p>Aspiring voice-over artist with a passion for delivering expressive, engaging, and high-quality vocal performances. Goal-oriented and dedicated to bringing scripts to life through clear communication, emotion, and storytelling. Skilled in voice modulation, pronunciation, audio recording, and content creation, with a strong focus on creating impactful listener experiences and audience engagement</p>
                    </div>
                    <span id='skill-sec'></span>
                </span>
            </section>
            <section className='main-sub-sec2'>
                <img src={roboImg}></img>
            </section>
        </main>
    )
}
export default Banner;
