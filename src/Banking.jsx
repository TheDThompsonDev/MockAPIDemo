import { useEffect, useState } from "react"
import "./server.js"

import Spinner from "./components/spinner.jsx"

const Banking = () => {
  const [bankingInfo, setBankingInfo] = useState([])

  const fetchData = async () => {
    const result = await fetch("/api/banking")
    const bankingRes = await result.json()
    setBankingInfo(bankingRes.accounts)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return bankingInfo.length > 0 ? (
    <div className="cardContainer">
      {bankingInfo.map(({ id, name, total }) => (
        <div className="card" key={id}>
          <div className="named">{name}</div>
          <div className="cardContent">
            <div className="totalAmount">${total}</div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <Spinner />
  )
}

export default Banking
