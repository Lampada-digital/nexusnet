export function ArchitectureSection() {
  return (
    <div>
      <h2 className="section-title">1. Arquitetura Geral</h2>
      <p className="text-[var(--nexus-text-muted)] mb-6">
        A NexusNet é projetada como uma <strong className="text-white">rede sobreposta (overlay network)</strong> independente, 
        que opera sobre a infraestrutura de transporte existente (Internet) sem depender de nenhum 
        componente centralizado para seu funcionamento.
      </p>

      {/* Main Architecture Diagram */}
      <div className="gradient-border mb-8">
        <div className="gradient-border-inner">
          <h3 className="text-sm font-semibold text-[var(--nexus-primary)] mb-4 uppercase tracking-wider">Diagrama de Arquitetura</h3>
          <div className="flex flex-col items-center gap-2">
            <div className="diagram-box w-full max-w-md">
              <span className="text-[var(--nexus-text-muted)]">INTERNET</span>
            </div>
            <div className="connector" />
            <div className="diagram-box w-full max-w-md">
              <span className="text-xs text-[var(--nexus-text-muted)]">Transporte Existente (TCP/UDP/TLS)</span>
            </div>
            <div className="connector" />
            <div className="diagram-box primary w-full max-w-md p-4">
              <div className="font-bold text-[var(--nexus-primary)] mb-2">NexusNet Overlay</div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-xs">
                <div className="bg-[var(--nexus-bg)] rounded px-2 py-1">Protocol</div>
                <div className="bg-[var(--nexus-bg)] rounded px-2 py-1">Identity</div>
                <div className="bg-[var(--nexus-bg)] rounded px-2 py-1">Routing</div>
                <div className="bg-[var(--nexus-bg)] rounded px-2 py-1">Discovery</div>
                <div className="bg-[var(--nexus-bg)] rounded px-2 py-1">Services</div>
              </div>
            </div>
            <div className="connector" />
            <div className="flex flex-wrap justify-center gap-4 w-full max-w-lg">
              <div className="diagram-box secondary flex-1 min-w-[100px]">
                <div className="font-semibold text-xs">Nó N1</div>
                <div className="text-xs text-[var(--nexus-text-muted)]">Gateway</div>
              </div>
              <div className="diagram-box secondary flex-1 min-w-[100px]">
                <div className="font-semibold text-xs">Nó N2</div>
                <div className="text-xs text-[var(--nexus-text-muted)]">Relay</div>
              </div>
              <div className="diagram-box secondary flex-1 min-w-[100px]">
                <div className="font-semibold text-xs">Nó N3</div>
                <div className="text-xs text-[var(--nexus-text-muted)]">Serviço</div>
              </div>
            </div>
            <div className="connector" />
            <div className="diagram-box accent w-full max-w-md">
              <span className="text-xs">Serviços NexusNet (nx://)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Component Classification */}
      <h3 className="text-xl font-bold text-white mb-4">Classificação de Componentes</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="diagram-box text-left">
          <h4 className="font-semibold text-[var(--nexus-accent)] mb-2">✅ Componentes Distribuídos</h4>
          <ul className="text-sm text-[var(--nexus-text-muted)] space-y-1">
            <li>• Roteamento (DHT + circuitos)</li>
            <li>• Descoberta de serviços (DHT)</li>
            <li>• Armazenamento (redundante)</li>
            <li>• Indexação (NexusSearch distribuído)</li>
            <li>• Validação de identidade (consenso)</li>
            <li>• Detecção de nós maliciosos</li>
          </ul>
        </div>
        <div className="diagram-box text-left">
          <h4 className="font-semibold text-[var(--nexus-warning)] mb-2">⚠️ Componentes Semi-Centralizados</h4>
          <ul className="text-sm text-[var(--nexus-text-muted)] space-y-1">
            <li>• Bootstrapping (lista inicial de nós)</li>
            <li>• Registro de revogação de chaves</li>
            <li>• Atualizações de software</li>
            <li>• Parâmetros de rede (versão do protocolo)</li>
          </ul>
          <p className="text-xs text-[var(--nexus-text-muted)] mt-2 italic">
            Substituíveis por mecanismos distribuídos ao longo do tempo
          </p>
        </div>
      </div>

      {/* Trust Points */}
      <h3 className="text-xl font-bold text-white mb-4">Pontos de Confiança e Falha</h3>
      
      <div className="overflow-x-auto mb-8">
        <table className="threat-table">
          <thead>
            <tr>
              <th>Componente</th>
              <th>Tipo</th>
              <th>Risco</th>
              <th>Mitigação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bootstrap Nodes</td>
              <td>Semi-centralizado</td>
              <td><span className="badge badge-medium">Médio</span></td>
              <td>Múltiplas fontes, pinning de chaves</td>
            </tr>
            <tr>
              <td>DHT</td>
              <td>Distribuído</td>
              <td><span className="badge badge-low">Baixo</span></td>
              <td>Replicação, verificação criptográfica</td>
            </tr>
            <tr>
              <td>Relay Nodes</td>
              <td>Distribuído</td>
              <td><span className="badge badge-medium">Médio</span></td>
              <td>Circuitos multi-salto, rotação</td>
            </tr>
            <tr>
              <td>Certificados de Identidade</td>
              <td>Auto-soberano</td>
              <td><span className="badge badge-low">Baixo</span></td>
              <td>Web of Trust + revogação distribuída</td>
            </tr>
            <tr>
              <td>Índice NexusSearch</td>
              <td>Distribuído</td>
              <td><span className="badge badge-medium">Médio</span></td>
              <td>Sharding, verificação de autenticidade</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Recovery Mechanisms */}
      <h3 className="text-xl font-bold text-white mb-4">Mecanismos de Recuperação</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="diagram-box text-left">
          <div className="text-[var(--nexus-primary)] font-semibold text-sm mb-2">Falha de Nó</div>
          <p className="text-xs text-[var(--nexus-text-muted)]">
            Roteamento automático por caminhos alternativos. DHT replica dados em múltiplos nós. 
            Circuitos são reconstruídos sem intervenção do usuário.
          </p>
        </div>
        <div className="diagram-box text-left">
          <div className="text-[var(--nexus-primary)] font-semibold text-sm mb-2">Comprometimento Parcial</div>
          <p className="text-xs text-[var(--nexus-text-muted)]">
            Isolamento de nós comprometidos via reputação distribuída. 
            Chaves comprometidas podem ser revogadas sem afetar a rede.
          </p>
        </div>
        <div className="diagram-box text-left">
          <div className="text-[var(--nexus-primary)] font-semibold text-sm mb-2">Catastrófica</div>
          <p className="text-xs text-[var(--nexus-text-muted)]">
            Bootstrap nodes alternativos, snapshots de estado DHT, 
            protocolos de re-sincronização entre nós sobreviventes.
          </p>
        </div>
      </div>

      {/* Protocol Layers */}
      <h3 className="text-xl font-bold text-white mt-8 mb-4">Camadas do Protocolo</h3>
      <div className="flex flex-col gap-2">
        {[
          { name: 'Camada de Aplicação', desc: 'NexusBrowser, NexusSearch, Serviços', color: 'accent' },
          { name: 'Camada de Serviço', desc: 'APIs, mensageria, armazenamento', color: 'accent' },
          { name: 'Camada de Descoberta', desc: 'DHT, diretórios, resolução de endereços', color: 'secondary' },
          { name: 'Camada de Roteamento', desc: 'Circuitos onion, seleção de caminhos', color: 'secondary' },
          { name: 'Camada de Identidade', desc: 'Chaves, certificados, autenticação', color: 'primary' },
          { name: 'Camada de Transporte', desc: 'Criptografia ponto-a-ponto, fragmentação', color: 'primary' },
          { name: 'Camada de Rede (Internet)', desc: 'TCP/UDP — infraestrutura existente', color: '' },
        ].map((layer, i) => (
          <div key={i} className={`diagram-box ${layer.color} text-left flex justify-between items-center`}>
            <div>
              <div className="font-semibold text-sm">{layer.name}</div>
              <div className="text-xs text-[var(--nexus-text-muted)]">{layer.desc}</div>
            </div>
            <div className="text-xs text-[var(--nexus-text-muted)]">L{7-i}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
