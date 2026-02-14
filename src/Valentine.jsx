import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Valentine.css"
import teddy from "./assets/hug-love.gif"

function ValentineProposal() {

  const navigate = useNavigate()
  const [noPosition, setNoPosition] = useState({ top: "60%", left: "55%" })
  const [accepted, setAccepted] = useState(false)

  const moveNoButton = () => {
    const randomTop = Math.random() * 70
    const randomLeft = Math.random() * 70

    setNoPosition({
      top: `${randomTop}%`,
      left: `${randomLeft}%`
    })
  }

  const handleYes = () => {
    setAccepted(true)

    setTimeout(() => {
      navigate("/homePage")
    }, 4500)
  }

  return (
    <div className="proposal-container">

      <img src={teddy} alt="teddy" className="proposal-teddy" />

      <h1 className="proposal-text">
        Will You Be My Valentine Forever? 💖
      </h1>
      

      {!accepted && (
        <div className="button-area">
          <button
            className="btn btn-danger btn-lg rounded-pill yes-btn"
            onClick={handleYes}
          >
            Yes 💕
          </button>

          <button
            className="btn btn-outline-danger btn-lg rounded-pill no-btn"
            style={{ top: noPosition.top, left: noPosition.left }}
            onMouseEnter={moveNoButton}
          >
            No 💔
          </button>
        </div>
      )}

      {accepted && (
        <div className="celebration">
          <h2>Yayyyyy! 🥰💞</h2>
          <p>You just made my world brighter ✨</p>
        </div>
      )}

    </div>
  )
}

export default ValentineProposal
