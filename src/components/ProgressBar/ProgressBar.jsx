import React from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styles from './ProgressBar.module.css'

const ProgressBar = () => {
    return (
        <div className={styles.progressContainer}>
            <div>
                <p>$180,050 USD raised</p>
                <p>$200K goal - 3.9K donations</p>
            </div>

            <div style={{ width: "6rem", height: "6rem" }}>
                <CircularProgressbar
                    value={66}
                    text={`${66}%`}
                    styles={buildStyles({
                        // Rotation of path and trail, in number of turns (0-1)
                        rotation: 0.25,

                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                        strokeLinecap: 'butt',

                        // Text size
                        textSize: "2rem",

                        // How long animation takes to go from one percentage to another, in seconds
                        pathTransitionDuration: 0.5,

                        // Can specify path transition in more detail, or remove it entirely
                        // pathTransition: 'none',

                        // Colors
                        pathColor: "#8FD600",
                        textColor: '#000',
                        trailColor: '#000000',
                        backgroundColor: '#ffffff',
                    })}
                />
            </div>
        </div>
    )
}

export default ProgressBar