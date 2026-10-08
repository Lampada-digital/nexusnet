export function StorageSection() {
  return (
    <div>
      <h2 className="section-title">10. Armazenamento Distribuído</h2>
      <p className="text-[var(--nexus-text-muted)] mb-6">
        Camada opcional de armazenamento distribuído que separa claramente 
        <strong className="text-white"> identidade ≠ localização ≠ conteúdo</strong>.
      </p>

      {/* Separation Principle */}
      <div className="gradient-border mb-8">
        <div className="gradient-border-inner">
          <h3 className="text-sm font-semibold text-[var(--nexus-primary)] mb-4 uppercase tracking-wider">Separação Fundamental</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="diagram-box primary text-center">
              <div className="text-2xl mb-2">🔐</div>
              <div className="font-semibold text-sm text-[var(--nexus-primary)]">Identidade</div>
              <div className="text-xs text-[var(--nexus-text-muted)] mt-1">
                Quem publicou? (chave pública)
              </div>
              <div className="code-block text-xs mt-2">
                nx://7F3A...92BC
              </div>
            </div>
            <div className="diagram-box secondary text-center">
              <div className="text-2xl mb-2">📍</div>
              <div className="font-semibold text-sm text-[var(--nexus-secondary)]">Localização</div>
              <div className="text-xs text-[var(--nexus-text-muted)] mt-1">
                Onde está? (nós que armazenam)
              </div>
              <div className="code-block text-xs mt-2">
                DHT → [N1, N5, N12]
              </div>
            </div>
            <div className="diagram-box accent text-center">
              <div className="text-2xl mb-2">📦</div>
              <div className="font-semibold text-sm text-[var(--nexus-accent)]">Conteúdo</div>
              <div className="text-xs text-[var(--nexus-text-muted)] mt-1">
                O quê? (endereçado por hash)
              </div>
              <div className="code-block text-xs mt-2">
                QmXo7...blake3
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Addressing */}
      <h3 className="text-xl font-bold text-white mb-4">Conteúdo Endereçado por Hash</h3>
      <div className="code-block mb-8">
        <span className="comment">/* Content-Addressed Storage */</span>
        <br /><br />
        <span className="comment">// O conteúdo é identificado pelo seu hash, não por localização</span>
        <br />
        <span className="keyword">struct</span> <span className="type">ContentBlock</span> {'{'}
        <br />
        {'  '}hash: [u8; 32],           <span className="comment">// BLAKE3 do conteúdo</span>
        <br />
        {'  '}data: Vec&lt;u8&gt;,            <span className="comment">// Dados (chunk de até 256KB)</span>
        <br />
        {'  '}author: NexusAddress,     <span className="comment">// Identidade do publicador</span>
        <br />
        {'  '}signature: Signature,     <span className="comment">// Assinatura do autor</span>
        <br />
        {'  '}timestamp: Timestamp,
        <br />
        {'  '}encryption: Option&lt;EncryptionInfo&gt;, <span className="comment">// Cifrado? (opcional)</span>
        <br />
        {'}'}
        <br /><br />
        <span className="comment">// Para recuperar conteúdo:</span>
        <br />
        <span className="comment">// 1. Consultar DHT: "quem tem hash X?"</span>
        <br />
        <span className="comment">// 2. Solicitar bloco aos nós identificados</span>
        <br />
        <span className="comment">// 3. Verificar: BLAKE3(data) == hash esperado?</span>
        <br />
        <span className="comment">// 4. Verificar: assinatura do autor é válida?</span>
      </div>

      {/* Features */}
      <h3 className="text-xl font-bold text-white mb-4">Características</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="diagram-box text-left">
          <h4 className="font-semibold text-[var(--nexus-primary)] mb-2">🔄 Replicação</h4>
          <ul className="text-xs text-[var(--nexus-text-muted)] space-y-1">
            <li>• Cada bloco é replicado em pelo menos 3 nós</li>
            <li>• Replicação cruzada (nós em diferentes AS/regiões)</li>
            <li>• Re-replicação automática quando nó sai da rede</li>
            <li>• Fator de replicação configurável pelo publicador</li>
          </ul>
        </div>
        <div className="diagram-box text-left">
          <h4 className="font-semibold text-[var(--nexus-primary)] mb-2">✓ Integridade Verificável</h4>
          <ul className="text-xs text-[var(--nexus-text-muted)] space-y-1">
            <li>• Hash do conteúdo verificado a cada retrieval</li>
            <li>• Assinatura do autor verificada criptograficamente</li>
            <li>• Merkle trees para estruturas grandes</li>
            <li>• Proof-of-storage para nós que armazenam</li>
          </ul>
        </div>
        <div className="diagram-box text-left">
          <h4 className="font-semibold text-[var(--nexus-primary)] mb-2">🔒 Controle de Acesso</h4>
          <ul className="text-xs text-[var(--nexus-text-muted)] space-y-1">
            <li>• Conteúdo pode ser cifrado (acesso apenas com chave)</li>
            <li>• Chaves distribuídas via canal seguro (E2E)</li>
            <li>• Re-keying sem re-publicar conteúdo</li>
            <li>• Revogação de acesso via invalidação de chaves</li>
          </ul>
        </div>
        <div className="diagram-box text-left">
          <h4 className="font-semibold text-[var(--nexus-primary)] mb-2">📝 Versionamento</h4>
          <ul className="text-xs text-[var(--nexus-text-muted)] space-y-1">
            <li>• Cada versão é um novo bloco (content-addressed)</li>
            <li>• Manifesto aponta para versão atual</li>
            <li>• Histórico de versões disponível (se não expirado)</li>
            <li>• Delta encoding para eficiência</li>
          </ul>
        </div>
      </div>

      {/* Fault Tolerance */}
      <h3 className="text-xl font-bold text-white mb-4">Tolerância a Falhas</h3>
      <div className="diagram-box text-left mb-8">
        <ul className="text-sm text-[var(--nexus-text-muted)] space-y-2">
          <li><strong className="text-white">Erasure coding:</strong> Para dados críticos, utiliza Reed-Solomon encoding. Dados são divididos em fragments com redundância — qualquer k de n fragments são suficientes para reconstruir.</li>
          <li><strong className="text-white">Health checks:</strong> Nós que armazenam dados respondem a probes periódicos. Falha em responder resulta em re-replicação.</li>
          <li><strong className="text-white">Graceful degradation:</strong> Se a maioria dos nós de um conteúdo fica offline, o conteúdo ainda pode ser recuperado dos nós restantes.</li>
          <li><strong className="text-white">Recovery priority:</strong> Dados mais acessados são priorizados para re-replicação.</li>
        </ul>
      </div>

      {/* Data Model */}
      <h3 className="text-xl font-bold text-white mb-4">Modelo de Dados</h3>
      <div className="code-block">
        <span className="comment">/* NexusNet Distributed Storage - Data Model */</span>
        <br /><br />
        <span className="keyword">struct</span> <span className="type">StorageManifest</span> {'{'}
        <br />
        {'  '}content_id: ContentHash,    <span className="comment">// BLAKE3 hash</span>
        <br />
        {'  '}author: NexusAddress,
        <br />
        {'  '}version: u64,
        <br />
        {'  '}size: u64,                  <span className="comment">// Tamanho total em bytes</span>
        <br />
        {'  '}chunks: Vec&lt;ChunkRef&gt;,      <span className="comment">// Referências aos chunks</span>
        <br />
        {'  '}replication_factor: u8,     <span className="comment">// Mínimo de réplicas</span>
        <br />
        {'  '}access: AccessPolicy,
        <br />
        {'  '}created_at: Timestamp,
        <br />
        {'  '}expires_at: Option&lt;Timestamp&gt;, <span className="comment">// TTL opcional</span>
        <br />
        {'}'}
        <br /><br />
        <span className="keyword">struct</span> <span className="type">ChunkRef</span> {'{'}
        <br />
        {'  '}index: u32,
        <br />
        {'  '}hash: [u8; 32],            <span className="comment">// Hash do chunk</span>
        <br />
        {'  '}size: u32,
        <br />
        {'  '}providers: Vec&lt;NodeId&gt;,    <span className="comment">// Nós que possuem este chunk</span>
        <br />
        {'}'}
      </div>
    </div>
  );
}
