export default function AboutCard({ Icon, title, body, body2 }) {
  return (
    <div className="d-flex ps-5" style={{ width: "330px", height: "120px" }}>
      <div className="me-5">
        <Icon />
      </div>
      <div>
        <h5 className="fw-bold">{title}</h5>
        <h6>{body}</h6>
        {
          body2 && <h6>{body2}</h6>
        }
      </div>
    </div>
  )
}
