import React from 'react'
import styles from './CampaignCard.module.css'
import { RightIcon } from '../../icons'
import { useNavigate } from 'react-router-dom'

const CampaignCard = ({ bannerImage, description, campaignName }) => {

    const navigate = useNavigate()

    return (
        <div className={styles.campaignCardContainer} onClick={() => {
            window.scrollTo(0, 0)
            navigate("/feature-detail")
        }}>
            <img src={bannerImage} alt="" />
            <h2>{campaignName}</h2>
            <p>{description}</p>
            <button>
                <span>View More</span>
                <RightIcon />
            </button>
        </div>
    )
}

export default CampaignCard