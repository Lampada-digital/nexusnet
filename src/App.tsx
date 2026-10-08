import { useState, useEffect, useRef } from 'react';

// Section imports
import { ArchitectureSection } from './sections/Architecture';
import { AddressingSection } from './sections/Addressing';
import { IdentitySection } from './sections/Identity';
import { RoutingSection } from './sections/Routing';
import { MetadataSection } from './sections/Metadata';
import { BrowserSection } from './sections/Browser';
import { SearchSection } from './sections/Search';
import { DiscoverySection } from './sections/Discovery';
import { ServicesSection } from './sections/Services';
import { StorageSection } from './sections/Storage';
import { SecuritySection } from './sections/Security';
import { TrustSection } from './sections/Trust';
import { IntegrationSection } from './sections/Integration';
import { DevelopmentSection } from './sections/Development';
import { StackSection } from './sections/Stack';
import { DeliverablesSection } from './sections/Deliverables';

const sections = [
  { id: 'architecture', label: '1. Arquitetura Geral', icon: '🏗️' },
  { id: 'addressing', label: '2. Endereçamento', icon: '📍' },
  { id: 'identity', label: '3. Identidade Criptográfica', icon: '🔐' },
  { id: 'routing', label: '4. Roteamento', icon: '🔀' },
  { id: 'metadata', label: '5. Minimização de Metadados', icon: '🛡️' },
  { id: 'browser', label: '6. NexusBrowser', icon: '🌐' },
  { id: 'search', label: '7. NexusSearch', icon: '🔍' },
  { id: 'discovery', label: '8. Descoberta Distribuída', icon: '🗺️' },
  { id: 'services', label: '9. Sistema de Serviços', icon: '⚙️' },
  { id: 'storage', label: '10. Armazenamento', icon: '💾' },
  { id: 'security', label: '11. Segurança', icon: '🔒' },
  { id: 'trust', label: '12. Modelo de Confiança', icon: '🤝' },
  { id: 'integration', label: '13. Integração', icon: '🔗' },
  { id: 'development', label: '14. Desenvolvimento', icon: '📋' },
  { id: 'stack', label: '15. Stack Tecnológica', icon: '🛠️' },
  { id: 'deliverables', label: '16. Entregáveis', icon: '📦' },
];

function App() {
  const [activeSection, setActiveSection] = useState('architecture');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;
      const sectionElements = sections.map(s => document.getElementById(s.id));
      const scrollPos = contentRef.current.scrollTop + 100;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    const el = contentRef.current;
    if (el) el.addEventListener('scroll', handleScroll);
    return () => { if (el) el.removeEventListener('scroll', handleScroll); };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setSidebarOpen(false);
    }
  };

  const renderSection = (id: string) => {
    switch (id) {
      case 'architecture': return <ArchitectureSection />;
      case 'addressing': return <AddressingSection />;
      case 'identity': return <IdentitySection />;
      case 'routing': return <RoutingSection />;
      case 'metadata': return <MetadataSection />;
      case 'browser': return <BrowserSection />;
      case 'search': return <SearchSection />;
      case 'discovery': return <DiscoverySection />;
      case 'services': return <ServicesSection />;
      case 'storage': return <StorageSection />;
      case 'security': return <SecuritySection />;
      case 'trust': return <TrustSection />;
      case 'integration': return <IntegrationSection />;
      case 'development': return <DevelopmentSection />;
      case 'stack': return <StackSection />;
      case 'deliverables': return <DeliverablesSection />;
      default: return null;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Mobile menu button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-[var(--nexus-surface)] border border-[var(--nexus-border)]"
      >
        <span className="text-[var(--nexus-primary)] text-xl">☰</span>
      </button>

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-40 w-72 
        bg-[var(--nexus-surface)] border-r border-[var(--nexus-border)]
        transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        flex flex-col overflow-hidden
      `}>
        {/* Logo */}
        <div className="p-6 border-b border-[var(--nexus-border)]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--nexus-primary)] to-[var(--nexus-secondary)] flex items-center justify-center pulse-glow">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">NexusNet</h1>
              <p className="text-xs text-[var(--nexus-text-muted)]">Infraestrutura Privada</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          {sections.map(section => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`sidebar-link w-full text-left flex items-center gap-2 ${
                activeSection === section.id ? 'active' : ''
              }`}
            >
              <span>{section.icon}</span>
              <span className="truncate">{section.label}</span>
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-[var(--nexus-border)]">
          <div className="text-xs text-[var(--nexus-text-muted)]">
            <p>Segurança → Privacidade →</p>
            <p>Verificabilidade → Descentralização</p>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <main ref={contentRef} className="flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto px-6 py-12 lg:px-12">
          {/* Hero */}
          <header className="mb-16 pt-8">
            <div className="gradient-border mb-8">
              <div className="gradient-border-inner text-center">
                <h1 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-[var(--nexus-primary)] via-[var(--nexus-secondary)] to-[var(--nexus-accent)] bg-clip-text text-transparent">
                  NexusNet
                </h1>
                <p className="text-lg text-[var(--nexus-text-muted)] max-w-2xl mx-auto">
                  Infraestrutura de comunicação sobreposta independente com arquitetura orientada 
                  a privacidade, segurança e descentralização.
                </p>
                <div className="flex flex-wrap justify-center gap-3 mt-6">
                  {['Protocolo Próprio', 'Identidade Criptográfica', 'Roteamento Distribuído', 'Zero Trust'].map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium border border-[var(--nexus-border)] bg-[var(--nexus-surface-2)] text-[var(--nexus-primary)]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="diagram-box primary">
                <div className="text-2xl mb-2">🔐</div>
                <div className="font-semibold text-sm">Privacidade por Design</div>
                <div className="text-xs text-[var(--nexus-text-muted)] mt-1">Minimização de metadados em todas as camadas</div>
              </div>
              <div className="diagram-box secondary">
                <div className="text-2xl mb-2">🌐</div>
                <div className="font-semibold text-sm">Descentralização Total</div>
                <div className="text-xs text-[var(--nexus-text-muted)] mt-1">Sem dependência de DNS, buscadores ou autoridades centrais</div>
              </div>
              <div className="diagram-box accent">
                <div className="text-2xl mb-2">✓</div>
                <div className="font-semibold text-sm">Verificabilidade</div>
                <div className="text-xs text-[var(--nexus-text-muted)] mt-1">Identidade criptográfica em cada nó e serviço</div>
              </div>
            </div>
          </header>

          {/* Sections */}
          {sections.map(section => (
            <section key={section.id} id={section.id} className="mb-20 scroll-mt-8">
              {renderSection(section.id)}
            </section>
          ))}

          {/* Footer */}
          <footer className="border-t border-[var(--nexus-border)] pt-8 pb-12 text-center">
            <p className="text-sm text-[var(--nexus-text-muted)]">
              NexusNet — Infraestrutura de Comunicação Privada e Descentralizada
            </p>
            <p className="text-xs text-[var(--nexus-text-muted)] mt-2">
              Segurança → Privacidade → Verificabilidade → Descentralização → Disponibilidade → Desempenho
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default App;
