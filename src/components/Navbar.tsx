import logoHorizontal from '../assets/brand/logo-horizontal.svg';

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="container header-nav">
        <a href="#" className="logo-container">
          <img src={logoHorizontal} alt="Maternar" className="logo-img" width={109} height={32} />
        </a>
        <a href="#planos" className="nav-btn">QUERO AGORA · R$ 37,90</a>
      </div>
    </header>
  );
}
