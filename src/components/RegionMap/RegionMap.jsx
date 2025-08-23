import React from 'react'
import style from './RegionMap.module.css'
import regionMapImage from '../../assets/RegionMap.jpg'

const RegionMap = () => {
  return (
    <div className={style.RegionMapContainer}>
      <img src={regionMapImage} alt="" />
    </div>
  )
}

export default RegionMap
