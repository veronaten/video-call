import "./Screen.css"

function Screen({ children }) {
  return (
    <div className="screen">
      <video playsinline autoPlay>
        <track default kind="captions" srcLang="en" />
        {children}
      </video>
    </div>
  )
}

export default Screen
