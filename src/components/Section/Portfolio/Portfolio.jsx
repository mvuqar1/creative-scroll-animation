/* eslint-disable array-callback-return */
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import "./Portfolio.css"

import work1 from "../../assets/img/work/1.jpg"
import work2 from "../../assets/img/work/2.jpg"
import work3 from "../../assets/img/work/3.jpg"
import work4 from "../../assets/img/work/4.jpg"
import work5 from "../../assets/img/work/5.jpg"
import work6 from "../../assets/img/work/6.jpg"

const workImage = [work1, work2, work3, work4, work5, work6];
gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const galleryLeftRef = useRef(null);
  const galleryRightRef = useRef(null);
  const textBlockRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: galleryLeftRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        smooth:4.5,
      }
    });

    tl.fromTo(galleryLeftRef.current,{ x: -150 }, { x: 0 });

    const tr = gsap.timeline({
      scrollTrigger: {
        trigger: galleryRightRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        smooth:1.5,
      }
    });

    tr.fromTo(galleryRightRef.current, { x: 150 }, { x: 0 });

    gsap.fromTo(
      textBlockRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5 }
    );
  }, []);

  return (
    <>
      <div className="portfolio">
        <div className="container">
          <div className="gallery">
            <div ref={galleryLeftRef} className="gallery-left">
              {workImage.map((item, index) => {
                if (index % 2 === 0) {
                  return (
                    <img
                      data-speed="0.6"
                      className='gallery-item'
                      key={index}
                      src={item}
                      alt="work"
                      style={{ "--animation-speed": "0.6" }}
                    />
                  );
                }
              })}
            </div>
            <div ref={galleryRightRef} className="gallery-right">
              <div ref={textBlockRef} className="text-block gallery-item">
                <h2 className="text-block-h">Creative floating scroll with amazing parallax effect</h2>
                <p className="text-block-p">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis doloribus cupiditate amet vel maiores iste dolor .</p>
              </div>
              {workImage.map((item, index) => {
                if (index % 2 !== 0) {
                  return (
                    <img
                      data-speed="0.9"
                      className='gallery-item'
                      key={index}
                      src={item}
                      alt='work'
                      style={{ "--animation-speed": "0.9" }}
                    />
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
