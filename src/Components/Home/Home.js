import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='app__home'>
        <div className='gt_timetable'>
            <Link to={`/GT`}>
                <div>
                    <p>CS Class B</p>
                </div>
                <div style={{textAlign: "center"}}>
                    <p>Time Generated</p>
                    <p>14 SEPT</p>
                </div>
            </Link>
        </div>
        <div className='gt_timetable'>
            <div>
                <p>CS Class B</p>
            </div>
            <div style={{textAlign: "center"}}>
                <p>Time Generated</p>
                <p>14 SEPT</p>
            </div>
        </div>
        <div className='gt_timetable'>
            <div>
                <p>CS Class B</p>
            </div>
            <div style={{textAlign: "center"}}>
                <p>Time Generated</p>
                <p>14 SEPT</p>
            </div>
        </div>
        <div className='gt_timetable'>
            <div>
                <p>CS Class B</p>
            </div>
            <div style={{textAlign: "center"}}>
                <p>Time Generated</p>
                <p>14 SEPT</p>
            </div>
        </div>
    </div>
  )
}

export default Home