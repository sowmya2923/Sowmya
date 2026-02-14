import { useEffect, useState } from "react"
import "./LoveLetter.css"
import { useNavigate } from "react-router-dom"

function LoveLetter() {
  const navigate = useNavigate()

  const [open, setOpen] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setOpen(true)
    }, 300)
  }, [])

  return (
    <div className="letter-page d-flex justify-content-center align-items-center">

      <div className={`letter-card ${open ? "open" : ""}`}>

        <h2 className="text-danger fw-bold mb-4">
          Love Letter 💌
        </h2>

        <p className="fs-5"><b>[Treasure it in your heart]</b></p>

        <p className="fs-5">* From the moment you entered my life,</p>
        <p className="fs-5">* Everything became brighter and meaningful.</p>
        <p className="fs-5">* Every time I look at you, I fall in love all over again.</p>
        <p className="fs-5">* The beginning of forever started with you.</p>
        <p className="fs-5">* Every heartbeat of mine whispers your name.</p>
        <p className="fs-5">* With you, even ordinary days feel magical.</p>

        <h5 className="mt-4 text-danger">
          <p>Forever Together,<br /></p>
          <p> Arjun<br /> </p>
          <p> 💕</p>
          <p> Sowmya</p>
        </h5>

        <button
          className="btn btn-danger btn-lg mt-4 rounded-pill"
          onClick={() => navigate("/memories")}
        >
          Turn The Page 💖
        </button>

      </div>

    </div>
  )
}

export default LoveLetter
