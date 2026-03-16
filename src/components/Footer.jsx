import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-name"> Prof. Elvis Asare-Bediako</p>
        <p className="footer-org">University University of Energy and Natural Resources (UENR)</p>
        <nav className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/gallery">Gallery</Link>
        </nav>
        <p className="footer-copy">© {year}  Prof. Elvis Asare-Bediako. All rights reserved. <span>Design by </span><a href="http://boresa.netlify.app/" style={{"color":"grey"}}>Abdul-Salim</a></p>
      </div>
    </footer>
  );
}
