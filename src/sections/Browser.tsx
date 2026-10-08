export function BrowserSection() {
  return (
    <div>
      <h2 className="section-title">6. NexusBrowser</h2>
      <p className="text-[var(--nexus-text-muted)] mb-6">
        O NexusBrowser é um navegador projetado nativamente para a NexusNet, compreendendo o protocolo 
        <code className="text-[var(--nexus-primary)]"> nx://</code> e implementando proteções de privacidade em todas as camadas.
      </p>

      {/* Browser Mockup */}
      <div className="gradient-border mb-8">
        <div className="gradient-border-inner p-0 overflow-hidden">
          {/* Title bar */}
          <div className="bg-[var(--nexus-bg)] px-4 py-2 flex items-center gap-3 border-b border-[var(--nexus-border)]">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[var(--nexus-danger)]" />
              <div className="w-3 h-3 rounded-full bg-[var(--nexus-warning)]" />
              <div className="w-3 h-3 rounded-full bg-[var(--nexus-accent)]" />
            </div>
            <div className="flex-1 flex items-center gap-2">
              <div className="flex-1 bg-[var(--nexus-surface-2)] rounded-md px-3 py-1.5 flex items-center gap-2 border border-[var(--nexus-border)]">
                <span className="text-[var(--nexus-accent)] text-xs">🔒</span>
                <span className="text-xs font-mono text-[var(--nexus-primary)]">nx://7F3A92BC4D1E8F6A...E4D1</span>
              </div>
            </div>
            <div className="flex gap-2 text-xs text-[var(--nexus-text-muted)]">
              <span>🛡️</span>
              <span>⚙️</span>
            </div>
          </div>
          {/* Tab bar */}
          <div className="bg-[var(--nexus-surface)] px-4 py-1 flex items-center gap-2 border-b border-[var(--nexus-border)]">
            <div className="bg-[var(--nexus-surface-2)] rounded-t px-3 py-1 text-xs text-[var(--nexus-primary)] border border-[var(--nexus-border)] border-b-0">
              Serviço NexusNet
            </div>
            <div className="text-xs text-[var(--nexus-text-muted)] px-2">+</div>
          </div>
          {/* Content area */}
          <div className="bg-[var(--nexus-surface)] p-8 min-h-[200px] flex flex-col items-center justify-center">
            <div className="text-4xl mb-4">🌐</div>
            <div className="text-lg font-semibold text-white mb-2">Conteúdo NexusNet</div>
            <div className="text-xs text-[var(--nexus-text-muted)] text-center max-w-md">
              Conteúdo carregado via circuito onion. Identidade do serviço verificada criptograficamente. 
              Comunicação ponta-a-ponta cifrada.
            </div>
            <div className="flex gap-4 mt-4 text-xs">
              <span className="text-[var(--nexus-accent)]">✓ Identidade verificada</span>
              <span className="text-[var(--nexus-accent)]">✓ Circuito ativo</span>
              <span className="text-[var(--nexus-accent)]">✓ E2E cifrado</span>
            </div>
          </div>
        </div>
      </div>

      {/* Core Features */}
      <h3 className="text-xl font-bold text-white mb-4">Funcionalidades Principais</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {[
          { icon: '🔐', title: 'Nativo nx://', desc: 'Compreende endereços NexusNet nativamente. Resolução via DHT integrada.' },
          { icon: '🎭', title: 'Isolamento por Site', desc: 'Cada serviço opera em sandbox isolado. Sem compartilhamento de estado entre serviços.' },
          { icon: '🛡️', title: 'Anti-Fingerprinting', desc: 'User-Agent uniforme, APIs de fingerprinting bloqueadas, canvas noise aleatório.' },
          { icon: '🚫', title: 'Bloqueio de Rastreadores', desc: 'Nenhum tracker, beacon ou analytics de terceiros. Sem cookies cross-service.' },
          { icon: '🔑', title: 'Gestão de Identidades', desc: 'Interface para gerenciar múltiplas identidades, pseudônimos e permissões.' },
          { icon: '📦', title: 'Armazenamento Controlado', desc: 'Dados locais cifrados, isolados por serviço, com expiração automática.' },
          { icon: '🔒', title: 'Permissões Granulares', desc: 'Cada permissão é solicitada explicitamente. Sem permissões implícitas.' },
          { icon: '🔄', title: 'Sessões Isoladas', desc: 'Circuitos diferentes para diferentes contextos. Separação total de sessões.' },
        ].map((feature, i) => (
          <div key={i} className="diagram-box text-left">
            <div className="flex items-center gap-2 mb-1">
              <span>{feature.icon}</span>
              <span className="font-semibold text-sm text-white">{feature.title}</span>
            </div>
            <p className="text-xs text-[var(--nexus-text-muted)]">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* Identity Management */}
      <h3 className="text-xl font-bold text-white mb-4">Gerenciamento de Identidades</h3>
      <div className="code-block mb-8">
        <span className="comment">/* NexusBrowser Identity Model */</span>
        <br /><br />
        <span className="keyword">struct</span> <span className="type">BrowserIdentity</span> {'{'}
        <br />
        {'  '}master_key: [u8; 32],        <span className="comment">// Chave mestra (derivada de senha)</span>
        <br />
        {'  '}pseudonyms: HashMap&lt;ServiceId, Pseudonym&gt;,
        <br />
        {'  '}certificates: Vec&lt;Certificate&gt;,
        <br />
        {'}'}
        <br /><br />
        <span className="keyword">struct</span> <span className="type">Pseudonym</span> {'{'}
        <br />
        {'  '}service_id: NexusAddress,
        <br />
        {'  '}pseudonym_key: [u8; 32],     <span className="comment">// Derivada: HMAC(master, service_id)</span>
        <br />
        {'  '}created_at: Timestamp,
        <br />
        {'  '}permissions: Vec&lt;Permission&gt;,
        <br />
        {'}'}
        <br /><br />
        <span className="comment">// Cada serviço vê apenas o pseudônimo correspondente</span>
        <br />
        <span className="comment">// Impossível correlacionar pseudônimos entre serviços</span>
      </div>

      {/* Anti-Fingerprinting Details */}
      <h3 className="text-xl font-bold text-white mb-4">Proteções Anti-Fingerprinting</h3>
      <div className="overflow-x-auto mb-8">
        <table className="threat-table">
          <thead>
            <tr>
              <th>Vetor de Fingerprinting</th>
              <th>Proteção</th>
              <th>Impacto</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>User-Agent</td>
              <td>String uniforme para todos os usuários</td>
              <td><span className="badge badge-low">Eliminado</span></td>
            </tr>
            <tr>
              <td>Canvas fingerprint</td>
              <td>Noise aleatório por sessão</td>
              <td><span className="badge badge-low">Eliminado</span></td>
            </tr>
            <tr>
              <td>WebGL renderer</td>
              <td>API bloqueada ou retornando valores genéricos</td>
              <td><span className="badge badge-low">Eliminado</span></td>
            </tr>
            <tr>
              <td>AudioContext</td>
              <td>API bloqueada</td>
              <td><span className="badge badge-low">Eliminado</span></td>
            </tr>
            <tr>
              <td>Fontes instaladas</td>
              <td>Lista de fontes uniforme</td>
              <td><span className="badge badge-low">Eliminado</span></td>
            </tr>
            <tr>
              <td>Screen resolution</td>
              <td>Valores arredondados para buckets comuns</td>
              <td><span className="badge badge-medium">Reduzido</span></td>
            </tr>
            <tr>
              <td>Timezone</td>
              <td>Sempre UTC</td>
              <td><span className="badge badge-low">Eliminado</span></td>
            </tr>
            <tr>
              <td>Language</td>
              <td>Configurável, mas uniforme entre sessões</td>
              <td><span className="badge badge-medium">Reduzido</span></td>
            </tr>
            <tr>
              <td>Cookies</td>
              <td>Armazenamento isolado por serviço, sem third-party</td>
              <td><span className="badge badge-low">Eliminado</span></td>
            </tr>
            <tr>
              <td>LocalStorage</td>
              <td>Cifrado, isolado, com expiração</td>
              <td><span className="badge badge-low">Controlado</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* No Persistent Identifiers */}
      <div className="diagram-box text-left">
        <h4 className="font-semibold text-[var(--nexus-accent)] mb-2">Princípio: Sem Identificadores Persistentes Desnecessários</h4>
        <ul className="text-sm text-[var(--nexus-text-muted)] space-y-2">
          <li>• <strong className="text-white">Sem cookies de rastreamento:</strong> Cookies são isolados por serviço e expiram automaticamente.</li>
          <li>• <strong className="text-white">Sem supercookies:</strong> Nenhum mecanismo de armazenamento persistente cross-service.</li>
          <li>• <strong className="text-white">Sem evercookies:</strong> Limpeza completa ao fechar sessão.</li>
          <li>• <strong className="text-white">Sem telemetry:</strong> O navegador não envia dados de uso para nenhum servidor.</li>
          <li>• <strong className="text-white">Sem crash reports automáticos:</strong> Dados de crash são locais e opcionais.</li>
        </ul>
      </div>
    </div>
  );
}
