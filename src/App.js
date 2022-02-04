import React, { useState } from "react"
import "./App.css"
import Header from "./components/header/Header"
import Conference from "./components/conference/Conference"
import Statistics from "./components/statistics/Statistics"
import Duration from "./components/duration/Duration"

function App() {
  const [isReady, setIsReady] = useState(false)
  const [localStream, setLocalStream] = useState({})

  const handleAppStart = () => {
    setIsReady(true)
    console.log(isReady)

    setLocalStream(localStream)
  }

  return (
    <div className="container">
      <Header onClick={handleAppStart} />
      <Conference />
      <Statistics />
      <Duration title="Total Calls Duration:" time="1h 23m" />
      <Duration title="Average Call Duration:" time="1h 5m" />
    </div>
  )
}

export default App
