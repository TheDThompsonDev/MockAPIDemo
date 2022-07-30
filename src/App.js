import "./css/App.css"
import { ErrorBoundary } from "react-error-boundary"
import Error from "./components/Error.jsx"
import Rewards from "./Rewards.jsx"
import Banking from "./Banking.jsx"

function App() {
  return (
    <div>
      <div className="container">
        <ErrorBoundary
          fallback={
            <Error>
              Uh oh! Something Went Wrong! Sorry For the inconvenience
            </Error>
          }
        >
          <Banking />
        </ErrorBoundary>
        <ErrorBoundary
          fallback={
            <Error>
              Uh oh! Something Went Wrong! Sorry For the inconvenience
            </Error>
          }
        >
          <Rewards />
        </ErrorBoundary>
      </div>
    </div>
  )
}

export default App
