import "./Duration.css"

function Duration({ children }) {
  return (
    <div className="duration__wrapper">
      <h3>{children}</h3>
      <div>{children}</div>
    </div>
  )
}

export default Duration
