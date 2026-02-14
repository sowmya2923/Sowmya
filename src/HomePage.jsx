import { useNavigate } from "react-router-dom"

function HomePage() {

  const navigate = useNavigate()

  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-#fff0f5">

      <div className="text-center">

        <h1 className="display-3 text-danger fw-bold">
          To My Bujji Pilla 💕
        </h1>

        <p className="lead mt-3">
          <b>You are my today, my tomorrow, and every beautiful moment in between.</b>
        </p>

        <button
          className="btn btn-danger btn-lg mt-4 rounded-pill"
          onClick={() => navigate("/love-letter")}
        >
          Tap the Heart 💖
        </button>

      </div>

    </div>
  )
}

export default HomePage
