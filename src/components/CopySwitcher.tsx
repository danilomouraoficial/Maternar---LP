import { useState, useEffect } from 'react';
import { Settings, Copy, Check, ChevronDown } from 'lucide-react';
import { COPY_VARIANTS } from '../config/copyVariants';

export default function CopySwitcher() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    // Exibe apenas em desenvolvimento ou se houver ?debug=true na URL
    const params = new URLSearchParams(window.location.search);
    const isDev = import.meta.env.DEV;
    const hasDebug = params.has('debug') || params.has('copy_debug');
    
    if (isDev || hasDebug) {
      setIsVisible(true);
    }

    const updatePath = () => {
      setCurrentPath(window.location.pathname);
    };

    updatePath();
    window.addEventListener('popstate', updatePath);

    // Intercepta alterações de histórico do SPA
    const originalPush = history.pushState;
    const originalReplace = history.replaceState;
    
    history.pushState = function(...args) {
      originalPush.apply(this, args);
      updatePath();
    };
    
    history.replaceState = function(...args) {
      originalReplace.apply(this, args);
      updatePath();
    };

    return () => {
      window.removeEventListener('popstate', updatePath);
      history.pushState = originalPush;
      history.replaceState = originalReplace;
    };
  }, []);

  if (!isVisible) return null;

  const getActiveVariant = (): string => {
    const match = currentPath.match(/^\/(v[1-5])(?:\/|$)/);
    if (match) return match[1];
    return 'v1';
  };

  const activeKey = getActiveVariant();

  const handleSelectVariant = (key: string) => {
    const targetPath = key === 'v1' ? '/' : `/${key}`;
    const params = new URLSearchParams(window.location.search);
    const searchStr = params.toString() ? `?${params.toString()}` : '';
    
    window.history.pushState(null, '', `${targetPath}${searchStr}`);
  };

  const handleCopyLink = (key: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const targetPath = key === 'v1' ? '' : key;
    const fullUrl = `${window.location.origin}/${targetPath}`;
    
    navigator.clipboard.writeText(fullUrl).then(() => {
      setCopiedId(key);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  return (
    <div 
      className="copy-switcher-root" 
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '24px',
        zIndex: 99999,
        fontFamily: 'system-ui, -apple-system, sans-serif',
        fontSize: '13px'
      }}
    >
      {/* Botão de Ativação */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: '#0B2823',
            color: '#FCFAF5',
            padding: '10px 14px',
            borderRadius: '8px',
            border: '1px solid rgba(252, 250, 245, 0.2)',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            fontWeight: 500,
            transition: 'transform 0.2s, background-color 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <Settings size={16} />
          <span>Testar Copy ({activeKey.toUpperCase()})</span>
        </button>
      )}

      {/* Painel do Switcher */}
      {isOpen && (
        <div 
          style={{
            background: '#0B2823',
            color: '#FCFAF5',
            borderRadius: '12px',
            border: '1px solid rgba(252, 250, 245, 0.2)',
            width: '320px',
            boxShadow: '0 8px 30px rgba(0,0,0,0.25)',
            overflow: 'hidden',
          }}
        >
          {/* Cabeçalho */}
          <div 
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '12px 16px',
              borderBottom: '1px solid rgba(252, 250, 245, 0.1)',
              background: 'rgba(0,0,0,0.1)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600 }}>
              <Settings size={14} />
              <span>Painel de Teste de Copy</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'rgba(252, 250, 245, 0.6)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                padding: '4px'
              }}
            >
              <ChevronDown size={16} />
            </button>
          </div>

          {/* Lista de Variações */}
          <div style={{ padding: '8px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {Object.entries(COPY_VARIANTS).map(([key, variant]) => {
              const isActive = activeKey === key;
              return (
                <div 
                  key={key}
                  onClick={() => handleSelectVariant(key)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    background: isActive ? 'rgba(252, 250, 245, 0.1)' : 'transparent',
                    border: isActive ? '1px solid rgba(252, 250, 245, 0.2)' : '1px solid transparent',
                    transition: 'background 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.background = 'rgba(252, 250, 245, 0.05)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.background = 'transparent';
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <span style={{ fontWeight: isActive ? 600 : 400 }}>
                      {key.toUpperCase()} - {variant.name.split(' ')[0]}
                    </span>
                    <span style={{ fontSize: '11px', color: 'rgba(252, 250, 245, 0.5)' }}>
                      {variant.name}
                    </span>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <button
                      onClick={(e) => handleCopyLink(key, e)}
                      title="Copiar Link desta variação"
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: copiedId === key ? '#4ADE80' : 'rgba(252, 250, 245, 0.6)',
                        cursor: 'pointer',
                        padding: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        borderRadius: '4px',
                        transition: 'color 0.2s'
                      }}
                    >
                      {copiedId === key ? <Check size={14} /> : <Copy size={14} />}
                    </button>
                    {isActive && <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#E6A382' }} />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
