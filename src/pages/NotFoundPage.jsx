import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="notfound">
      <div className="notfound-card">
        <div className="notfound-code">404</div>
        <h1 className="notfound-title">Page not found</h1>
        <p className="notfound-text">
          The page you’re looking for doesn’t exist (or the link is incorrect).
        </p>
        <div className="notfound-actions">
          <Link className="notfound-btn" to="/">
            Go home
          </Link>
        </div>
      </div>
    </div>
  )
}

