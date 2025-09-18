import React from 'react'
import styles from './CampaignCard.module.css'
import { RightIcon } from '../../icons'

const CampaignCard = () => {
    return (
        <div className={styles.campaignCardContainer}>
            <img src="https://images.squarespace-cdn.com/content/v1/5005cf7684ae9eec4f9d1861/1519661574416-OJW8U12UBCJMZO7V8Y8P/P6200340.jpg" alt="" />
            <h2>From Good Intentions to Great Impact</h2>
            <p>Having a great idea or a noble cause is just the beginning. At Blimp, we help you turn your passion into real-world results. Our fundraising platform empowers you to rally support, raise funds, and bring your vision to life—because good intentions deserve the chance to make a real impact. Let's make it happen, together.</p>
            <button>
                <span>View More</span>
                <RightIcon />
            </button>
        </div>
    )
}

export default CampaignCard