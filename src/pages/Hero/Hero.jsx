import React from 'react'
import style from "./Hero.module.css"

const Hero = () => {
  return (
    <main className={style.heroContainer}>
      <div className={style.heroContent}>
        <p>Gaza</p>
        <h1><span>GIVING</span> IS THE GREATEST ACT OF GRACE</h1>
        <button>Support a campaign</button>
      </div>
    </main>
  )
}

export default Hero
