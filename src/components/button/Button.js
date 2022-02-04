import React from "react"
import "./Button.css"
import classnames from "classnames"

function Button({ children }) {
  return (
    <button className={classnames("button")} type="button">
      {children}
    </button>
  )
}

export default Button
