import React from 'react'
import { useState } from 'react'
import BarChart from '../components/BarChart'
import { indiData } from '../data/indiData'

const grap = () => {
    const [userData, setUserData] = useState({
        labels: indiData.map((data))
    })
  return (
    <div>grap</div>
  )
}

export default grap