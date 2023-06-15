import React from 'react'
import "./Portfolio.css"
import work1 from "../../assets/img/work/1.jpg"
import work2 from "../../assets/img/work/2.jpg"
import work3 from "../../assets/img/work/3.jpg"
import work4 from "../../assets/img/work/4.jpg"
import work5 from "../../assets/img/work/5.jpg"
import work6 from "../../assets/img/work/6.jpg"

const workImage=[work1,work2,work3,work4,work5,work6]

export default function Portfolio() {
  return (
    <>
    <div className="portfolio">
      <div className="container">
        <div className="gallery">
          <div className="gallery-left">
            {workImage.map((item,index)=>{
            if(index % 2===0){
              return <img className='gallery-item' key={index} src={item} alt="work" />
            }
          })}
          </div>
          <div className="gallery-right">
            <div className="text-block gallery-item">
              <h2 className="text-block-h">Creative floating scroll with amazing paralax effect</h2>
              <p className="text-block-p">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis doloribus cupiditate amet vel maiores iste dolor .</p>
            </div>
            {workImage.map((item,index)=>{
              if(index % 2!==0){
                return<img className='gallery-item' key={index} src={item} alt='work'/>
              }
            })}

          </div>
        </div>
      </div>
    </div>
    </>
  )
}
