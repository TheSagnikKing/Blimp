import React from 'react'
import style from './NewsCard.module.css'
import { useNavigate } from 'react-router-dom'

const NewsCard = ({ index, articleItem }) => {
  const navigate = useNavigate()

  const time = articleItem?.createdAt.split("T")[1].split(".")[0]

  return (
    <div
      onClick={() => {
        window.scrollTo(0, 0)
        navigate("/news-detail")
      }}
      style={{ borderTop: index === 0 ? 'none' : '0.1rem solid rgba(232, 232, 232, 1)' }}
      className={style.newscardItem}>
      <div>
        <p>{time}</p>
        <h2>{articleItem.title}</h2>
      </div>

      <img src={articleItem?.image} alt="" />
    </div>
  )
}

export default NewsCard
