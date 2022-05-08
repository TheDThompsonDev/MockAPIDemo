import { useEffect, useState } from "react"
import Spinner from "./spinner.js"
import "./App.css"

function App() {
  const [banking, setBanking] = useState([])

  const fetchData = async () => {
    const result = await fetch("/api/banking")
    const bankingInfo = await result.json()
    setBanking(bankingInfo.accounts)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="container">
      {banking.length > 0 ? (
        <div className="cardContainer">
          {banking.map(({ id, name, total }) => (
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
      )}
    </div>
  )
}

export default App
