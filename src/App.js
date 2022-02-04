import React from "react"
import "./App.css"
import Header from "./components/header/Header"
import Conference from "./components/conference/Conference"
import Statistics from "./components/statistics/Statistics"
import Duration from "./components/duration/Duration"

function App() {
  return (
    <div className="container">
      <Header />
      <Conference />
      <Statistics />
      <Duration title="Total Calls Duration:" time="1h 23m" />
      <Duration title="Average Call Duration:" time="1h 5m" />
    </div>
  )
}

export default App
