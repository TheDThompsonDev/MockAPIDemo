import { useEffect, useState } from "react"
import Spinner from "./components/spinner.jsx"
import "./server.js"

const Rewards = () => {
  const [reward, setReward] = useState([])

  const fetchData = async () => {
    const rewardResult = await fetch("/api/rewardsPoints")
    const rewardInfo = await rewardResult.json()
    setReward(rewardInfo.accounts)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return reward.length > 0 ? (
    <div className="cardContainer">
      {reward.map(({ id, name, total }) => (
        <div className="card" key={id}>
          <div className="named">{name}</div>
          <div className="cardContent">
            <div className="totalAmount">{total}</div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <Spinner />
  )
}

export default Rewards
