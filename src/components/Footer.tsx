import logoHorizontal from '../assets/brand/logo-horizontal.svg';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <a href="#" className="logo-container">
          <img src={logoHorizontal} alt="Maternar" className="logo-img" width={109} height={32} loading="lazy" />
        </a>
        <p>&copy; 2026 Maternar App. Todos os direitos reservados. Esta página é de caráter institucional e publicitário
          do Maternar.</p>
        <div className="footer-links">
          <a href="#">Termos de Uso</a>
          <a href="#">Privacidade</a>
        </div>
      </div>
    </footer>
  );
}
