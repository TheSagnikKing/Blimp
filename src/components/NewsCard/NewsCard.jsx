import React from 'react'
import style from './NewsCard.module.css'
import { useNavigate } from 'react-router-dom'

const NewsCard = ({ title, index }) => {
  const navigate = useNavigate()
  return (
    <div
      onClick={() => {
        window.scrollTo(0, 0)
        navigate("/news-detail")
      }}
      style={{ borderTop: index === 0 ? 'none' : '0.1rem solid rgba(232, 232, 232, 1)' }}
      className={style.newscardItem}>
      <div>
        <p>09.25.24</p>
        <h2>{title}</h2>
      </div>

      <img src="https://i.guim.co.uk/img/media/8c7e55864222c13834306b94d1eb1d07d6203f8a/0_165_2440_1464/master/2440.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=ac49ee137245a5325992b15de0c06401" alt="" />
    </div>
  )
}

export default NewsCard
