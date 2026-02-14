import "./Floating.css"

function FloatingHearts() {
  return (
    <div className="hearts-container">
      {Array.from({ length: 15 }).map((_, i) => (
        <span key={i} className="heart">💗</span>
      ))}
    </div>
  )
}

export default FloatingHearts
