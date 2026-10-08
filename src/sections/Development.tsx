export function DevelopmentSection() {
  return (
    <div>
      <h2 className="section-title">14. Plano de Desenvolvimento</h2>
      <p className="text-[var(--nexus-text-muted)] mb-6">
        Construção incremental em 12 fases, priorizando segurança e privacidade desde o primeiro componente.
      </p>

      {/* Phases */}
      <div className="mb-8">
        {[
          {
            phase: 1, title: 'Protocolo Básico', status: 'Fundação',
            desc: 'Definição do formato de pacotes, handshake criptográfico (Noise Protocol), especificação de mensagens.',
            deliverables: ['Especificação do protocolo (RFC-like)', 'Implementação do handshake', 'Testes de interoperabilidade']
          },
          {
            phase: 2, title: 'Nós NexusNet', status: 'Infraestrutura',
            desc: 'Implementação do nó básico: aceitação de conexões, processamento de pacotes, logging mínimo.',
            deliverables: ['Binário do nó (Rust)', 'Configuração mínima', 'Docker image']
          },
          {
            phase: 3, title: 'Comunicação Multi-Nó', status: 'Rede',
            desc: 'Nós se conectam entre si, formam rede básica, troca de mensagens relay.',
            deliverables: ['Peer discovery básico', 'Message relay', 'Teste com 10+ nós']
          },
          {
            phase: 4, title: 'Identidade Criptográfica', status: 'Segurança',
            desc: 'Sistema de identidade completo: geração, armazenamento, autenticação, rotação.',
            deliverables: ['Key generation (Ed25519/X25519)', 'Secure storage', 'Authentication flow']
          },
          {
            phase: 5, title: 'Descoberta Distribuída', status: 'DHT',
            desc: 'Implementação da DHT Kademlia-like, registros assinados, resolução de endereços.',
            deliverables: ['DHT implementation', 'Record storage/retrieval', 'Bootstrap mechanism']
          },
          {
            phase: 6, title: 'Roteamento Onion', status: 'Privacidade',
            desc: 'Circuitos multi-salto, criptografia em camadas, seleção de nós, rotação.',
            deliverables: ['Circuit construction', 'Onion encryption', 'Path selection algorithm']
          },
          {
            phase: 7, title: 'Serviços nx://', status: 'Aplicação',
            desc: 'Serviços podem ser hospedados e acessados via endereços NexusNet.',
            deliverables: ['Service hosting', 'Manifest protocol', 'Content serving']
          },
          {
            phase: 8, title: 'NexusBrowser', status: 'Interface',
            desc: 'Navegador funcional com suporte a nx://, anti-fingerprinting, gestão de identidades.',
            deliverables: ['Browser core', 'nx:// rendering', 'Privacy protections']
          },
          {
            phase: 9, title: 'NexusSearch', status: 'Busca',
            desc: 'Motor de busca distribuído, indexação, consulta anônima.',
            deliverables: ['Indexer nodes', 'Distributed index', 'Query protocol']
          },
          {
            phase: 10, title: 'Armazenamento Distribuído', status: 'Dados',
            desc: 'Camada de armazenamento content-addressed, replicação, versionamento.',
            deliverables: ['Content-addressed storage', 'Replication protocol', 'Integrity verification']
          },
          {
            phase: 11, title: 'Privacidade e Minimização', status: 'Hardening',
            desc: 'Auditoria de metadados, padding, traffic shaping, anti-correlation.',
            deliverables: ['Metadata audit', 'Traffic analysis resistance', 'Padding optimization']
          },
          {
            phase: 12, title: 'Escalabilidade e Auditoria', status: 'Produção',
            desc: 'Testes de carga, auditoria de segurança, hardening final, documentação completa.',
            deliverables: ['Security audit', 'Performance benchmarks', 'Production deployment guide']
          },
        ].map((phase, i) => (
          <div key={i} className="phase-item">
            <div className="flex items-center gap-3 mb-1">
              <span className="text-xs font-bold text-[var(--nexus-primary)]">FASE {phase.phase}</span>
              <span className="badge badge-low">{phase.status}</span>
            </div>
            <h4 className="font-bold text-white text-lg mb-1">{phase.title}</h4>
            <p className="text-sm text-[var(--nexus-text-muted)] mb-2">{phase.desc}</p>
            <div className="flex flex-wrap gap-2">
              {phase.deliverables.map((d, j) => (
                <span key={j} className="text-xs px-2 py-0.5 rounded bg-[var(--nexus-surface-2)] border border-[var(--nexus-border)] text-[var(--nexus-text-muted)]">
                  {d}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Directory Structure */}
      <h3 className="text-xl font-bold text-white mb-4">Estrutura de Diretórios</h3>
      <div className="code-block">
        <span className="comment">/* NexusNet Project Structure */</span>
        <br /><br />
        nexusnet/
        <br />
        ├── <span className="type">crates/</span>                    <span className="comment">// Rust crates</span>
        <br />
        │   ├── <span className="type">nexus-protocol/</span>           <span className="comment">// Especificação e implementação do protocolo</span>
        <br />
        │   │   ├── src/
        <br />
        │   │   │   ├── packet.rs          <span className="comment">// Formato de pacotes</span>
        <br />
        │   │   │   ├── handshake.rs       <span className="comment">// Noise Protocol handshake</span>
        <br />
        │   │   │   ├── crypto.rs          <span className="comment">// Operações criptográficas</span>
        <br />
        │   │   │   └── lib.rs
        <br />
        │   ├── <span className="type">nexus-identity/</span>           <span className="comment">// Sistema de identidade</span>
        <br />
        │   │   ├── src/
        <br />
        │   │   │   ├── keypair.rs         <span className="comment">// Geração e gestão de chaves</span>
        <br />
        │   │   │   ├── address.rs         <span className="comment">// Endereços nx://</span>
        <br />
        │   │   │   ├── certificate.rs     <span className="comment">// Certificados</span>
        <br />
        │   │   │   └── lib.rs
        <br />
        │   ├── <span className="type">nexus-routing/</span>            <span className="comment">// Roteamento onion</span>
        <br />
        │   │   ├── src/
        <br />
        │   │   │   ├── circuit.rs         <span className="comment">// Construção de circuitos</span>
        <br />
        │   │   │   ├── onion.rs           <span className="comment">// Criptografia em camadas</span>
        <br />
        │   │   │   ├── path.rs            <span className="comment">// Seleção de caminhos</span>
        <br />
        │   │   │   └── lib.rs
        <br />
        │   ├── <span className="type">nexus-dht/</span>                <span className="comment">// DHT distribuída</span>
        <br />
        │   │   ├── src/
        <br />
        │   │   │   ├── kademlia.rs        <span className="comment">// Implementação Kademlia</span>
        <br />
        │   │   │   ├── records.rs         <span className="comment">// Registros assinados</span>
        <br />
        │   │   │   └── lib.rs
        <br />
        │   ├── <span className="type">nexus-node/</span>               <span className="comment">// Binário do nó</span>
        <br />
        │   │   ├── src/
        <br />
        │   │   │   ├── main.rs
        <br />
        │   │   │   ├── relay.rs           <span className="comment">// Funcionalidade de relay</span>
        <br />
        │   │   │   └── config.rs
        <br />
        │   └── <span className="type">nexus-storage/</span>            <span className="comment">// Armazenamento distribuído</span>
        <br />
        │       ├── src/
        <br />
        │       │   ├── content.rs         <span className="comment">// Content-addressed storage</span>
        <br />
        │       │   ├── replication.rs     <span className="comment">// Replicação</span>
        <br />
        │       │   └── lib.rs
        <br />
        ├── <span className="type">browser/</span>                    <span className="comment">// NexusBrowser (TypeScript/Electron)</span>
        <br />
        │   ├── src/
        <br />
        │   │   ├── main/                  <span className="comment">// Processo principal</span>
        <br />
        │   │   ├── renderer/              <span className="comment">// Interface do navegador</span>
        <br />
        │   │   └── network/               <span className="comment">// Integração com rede</span>
        <br />
        │   └── package.json
        <br />
        ├── <span className="type">search/</span>                     <span className="comment">// NexusSearch</span>
        <br />
        │   ├── indexer/                   <span className="comment">// Serviço de indexação</span>
        <br />
        │   └── query/                     <span className="comment">// Serviço de consulta</span>
        <br />
        ├── <span className="type">tools/</span>                      <span className="comment">// Ferramentas auxiliares (Python)</span>
        <br />
        │   ├── keygen.py                  <span className="comment">// Geração de chaves</span>
        <br />
        │   ├── network-monitor.py         <span className="comment">// Monitoramento</span>
        <br />
        │   └── benchmark.py              <span className="comment">// Testes de desempenho</span>
        <br />
        ├── <span className="type">docs/</span>                       <span className="comment">// Documentação</span>
        <br />
        │   ├── protocol-spec.md
        <br />
        │   ├── threat-model.md
        <br />
        │   └── deployment.md
        <br />
        ├── <span className="type">tests/</span>                      <span className="comment">// Testes de integração</span>
        <br />
        ├── docker-compose.yml
        <br />
        ├── Cargo.toml                     <span className="comment">// Workspace Rust</span>
        <br />
        └── README.md
      </div>
    </div>
  );
}
