import "../css/error.css"

const Error = ({ children }) => {
  return (
    <div>
      <div className="cardContainer">
        <div className="card">
          <div className="cardContent">
            <div className="namedError">Error</div>
            <div className="totalAmountErrorBackground">
              <div className="totalAmountError">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Error
