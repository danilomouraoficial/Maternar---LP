import { useState } from 'react';
import { Mail, ArrowLeft, ExternalLink } from 'lucide-react';
import logoHorizontal from '../assets/brand/logo-horizontal.svg';

export default function Obrigado() {
  const [email] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const emailParam = params.get('email');
      return emailParam ? decodeURIComponent(emailParam).trim() : 'seu e-mail';
    }
    return 'seu e-mail';
  });

  const [provider] = useState<{ name: string; url: string } | null>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const emailParam = params.get('email');
      const cleanEmail = emailParam ? decodeURIComponent(emailParam).trim() : '';
      const domain = cleanEmail.split('@')[1]?.toLowerCase() || '';
      
      if (domain.includes('gmail.com')) {
        return { name: 'Abrir no Gmail', url: 'https://mail.google.com' };
      } else if (
        domain.includes('hotmail.com') || 
        domain.includes('outlook.com') || 
        domain.includes('live.com') ||
        domain.includes('msn.com')
      ) {
        return { name: 'Abrir no Outlook', url: 'https://outlook.live.com' };
      } else if (domain.includes('yahoo')) {
        return { name: 'Abrir no Yahoo Mail', url: 'https://mail.yahoo.com' };
      }
    }
    // Fallback for custom domains or other providers
    return { name: 'Acessar meu e-mail', url: 'https://mail.google.com' };
  });

  return (
    <section className="obrigado-section fade-in visible">
      {/* Editorial Grid Lines matching sales page visual identity */}
      <div className="hero-editorial-line hero-editorial-line--vert" aria-hidden="true" />
      
      <div className="container obrigado-container">
        {/* Header containing only the Logo for maximum focus */}
        <div className="obrigado-header">
          <a href="/" className="logo-container">
            <img src={logoHorizontal} alt="Maternar" className="logo-img" width={109} height={32} />
          </a>
        </div>

        {/* Main Content Editorial Card */}
        <div className="obrigado-card">
          <span className="eyebrow">Quase tudo pronto</span>
          
          <h1 className="headline-lg balance-text">
            Falta apenas <em>um passo</em> para liberar seu acesso!
          </h1>
          
          <p className="body-md obrigado-intro">
            Enviamos um link de confirmação para o endereço abaixo. Por favor, acesse seu e-mail para validar seu cadastro.
          </p>

          {/* Email Highlight Box (Ticket visual style) */}
          <div className="obrigado-email-box">
            <div className="obrigado-email-icon-wrapper">
              <Mail size={18} className="text-[var(--green-sage)]" />
            </div>
            <div className="obrigado-email-details">
              <span className="obrigado-email-label">E-mail cadastrado</span>
              <strong className="obrigado-email-value truncate">{email}</strong>
            </div>
          </div>

          {/* Step-by-Step Instructions */}
          <div className="obrigado-steps">
            <h3 className="obrigado-steps-title">O que fazer agora?</h3>
            
            <ul className="obrigado-steps-list">
              <li className="obrigado-step-item">
                <div className="obrigado-step-number">1</div>
                <div className="obrigado-step-text">
                  <strong>Acesse a sua caixa de entrada</strong> no e-mail indicado acima.
                </div>
              </li>
              <li className="obrigado-step-item">
                <div className="obrigado-step-number">2</div>
                <div className="obrigado-step-text">
                  Procure pelo e-mail enviado pelo <strong>Maternar</strong>. 
                  <span className="obrigado-step-subtext">Caso não encontre, verifique a pasta de *Spam* ou *Promoções*.</span>
                </div>
              </li>
              <li className="obrigado-step-item">
                <div className="obrigado-step-number">3</div>
                <div className="obrigado-step-text">
                  <strong>Clique no link de confirmação</strong> dentro do e-mail para ativar sua conta.
                </div>
              </li>
            </ul>
          </div>

          {/* CTA Buttons */}
          <div className="obrigado-actions">
            {provider && (
              <a 
                href={provider.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn w-full sm:w-auto"
              >
                {provider.name}
                <ExternalLink size={16} />
              </a>
            )}
            
            <a href="/" className="btn btn--outline w-full sm:w-auto">
              <ArrowLeft size={16} />
              Voltar ao site
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
