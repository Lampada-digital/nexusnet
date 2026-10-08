export function ServicesSection() {
  return (
    <div>
      <h2 className="section-title">9. Sistema de Serviços</h2>
      <p className="text-[var(--nexus-text-muted)] mb-6">
        A NexusNet permite hospedar serviços identificados por endereços <code className="text-[var(--nexus-primary)]">nx://</code>, 
        com identidade verificável e comunicação criptografada ponta-a-ponta.
      </p>

      {/* Service Structure */}
      <div className="gradient-border mb-8">
        <div className="gradient-border-inner">
          <h3 className="text-sm font-semibold text-[var(--nexus-primary)] mb-4 uppercase tracking-wider">Estrutura de um Serviço NexusNet</h3>
          <div className="flex flex-col items-center gap-3">
            <div className="diagram-box primary w-full max-w-md">
              <div className="font-mono text-sm text-[var(--nexus-primary)]">nx://7F3A92BC4D1E8F6A...</div>
            </div>
            <div className="connector" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-lg">
              <div className="diagram-box">
                <div className="text-xs font-semibold">📄 Página</div>
                <div className="text-xs text-[var(--nexus-text-muted)]">HTML/Conteúdo</div>
              </div>
              <div className="diagram-box">
                <div className="text-xs font-semibold">🔌 API</div>
                <div className="text-xs text-[var(--nexus-text-muted)]">Endpoints</div>
              </div>
              <div className="diagram-box">
                <div className="text-xs font-semibold">📁 Arquivos</div>
                <div className="text-xs text-[var(--nexus-text-muted)]">Downloads</div>
              </div>
              <div className="diagram-box">
                <div className="text-xs font-semibold">⚡ App</div>
                <div className="text-xs text-[var(--nexus-text-muted)]">Aplicação</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Manifest */}
      <h3 className="text-xl font-bold text-white mb-4">Manifesto do Serviço</h3>
      <div className="code-block mb-8">
        <span className="comment">/* NexusNet Service Manifest */</span>
        <br />
        <span className="comment">/* Publicado na DHT e assinado com a chave do serviço */</span>
        <br /><br />
        <span className="keyword">struct</span> <span className="type">ServiceManifest</span> {'{'}
        <br />
        {'  '}version: u32,
        <br />
        {'  '}identity: NexusAddress,
        <br />
        {'  '}name: String,                    <span className="comment">// Nome legível do serviço</span>
        <br />
        {'  '}description: String,             <span className="comment">// Descrição</span>
        <br />
        {'  '}endpoints: Vec&lt;Endpoint&gt;,        <span className="comment">// Endpoints disponíveis</span>
        <br />
        {'  '}capabilities: Vec&lt;Capability&gt;,   <span className="comment">// Capacidades do serviço</span>
        <br />
        {'  '}content_hash: [u8; 32],          <span className="comment">// Hash do conteúdo atual</span>
        <br />
        {'  '}updated_at: Timestamp,
        <br />
        {'  '}signature: Signature,            <span className="comment">// Assinado com chave privada do serviço</span>
        <br />
        {'}'}
        <br /><br />
        <span className="keyword">struct</span> <span className="type">Endpoint</span> {'{'}
        <br />
        {'  '}path: String,                    <span className="comment">// "/api/v1/data"</span>
        <br />
        {'  '}method: Method,                  <span className="comment">// GET, POST, etc.</span>
        <br />
        {'  '}auth_required: bool,             <span className="comment">// Requer autenticação?</span>
        <br />
        {'  '}content_type: String,            <span className="comment">// "application/json"</span>
        <br />
        {'}'}
      </div>

      {/* Identity Verification */}
      <h3 className="text-xl font-bold text-white mb-4">Verificação de Identidade do Serviço</h3>
      <div className="diagram-box text-left mb-8">
        <h4 className="font-semibold text-[var(--nexus-accent)] mb-2">Fluxo de Verificação</h4>
        <div className="space-y-2 text-sm text-[var(--nexus-text-muted)]">
          <div className="flow-step">
            <span className="flow-arrow">→</span>
            <span>Cliente resolve nx://7F3A... via DHT</span>
          </div>
          <div className="flow-step">
            <span className="flow-arrow">→</span>
            <span>Estabelece circuito onion até o serviço</span>
          </div>
          <div className="flow-step">
            <span className="flow-arrow">→</span>
            <span>Serviço apresenta certificado (chave pública + assinatura)</span>
          </div>
          <div className="flow-step">
            <span className="flow-arrow">→</span>
            <span>Cliente verifica: SHA-256(chave pública) == identity_hash do endereço?</span>
          </div>
          <div className="flow-step">
            <span className="flow-arrow">→</span>
            <span>Cliente verifica: assinatura é válida para a chave apresentada?</span>
          </div>
          <div className="flow-step">
            <span className="flow-arrow">→</span>
            <span>Cliente verifica: não há revogação ativa para esta identidade?</span>
          </div>
          <div className="flow-step">
            <span className="flow-arrow">✓</span>
            <span className="text-[var(--nexus-accent)]">Identidade confirmada — comunicação segura estabelecida</span>
          </div>
        </div>
      </div>

      {/* Service Types */}
      <h3 className="text-xl font-bold text-white mb-4">Tipos de Serviço</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="diagram-box text-left">
          <div className="text-[var(--nexus-primary)] font-semibold text-sm mb-2">📄 Static Content</div>
          <p className="text-xs text-[var(--nexus-text-muted)]">
            Páginas estáticas, documentos, imagens. Conteúdo endereçado por hash, 
            servido via armazenamento distribuído ou diretamente pelo nó do serviço.
          </p>
        </div>
        <div className="diagram-box text-left">
          <div className="text-[var(--nexus-primary)] font-semibold text-sm mb-2">⚡ Dynamic App</div>
          <p className="text-xs text-[var(--nexus-text-muted)]">
            Aplicações interativas. O serviço executa lógica e responde via API. 
            Autenticação opcional via identidade NexusNet do usuário.
          </p>
        </div>
        <div className="diagram-box text-left">
          <div className="text-[var(--nexus-primary)] font-semibold text-sm mb-2">🔗 Gateway</div>
          <p className="text-xs text-[var(--nexus-text-muted)]">
            Serviços que fazem ponte entre NexusNet e outros sistemas. 
            Podem prover acesso a dados externos de forma controlada e auditável.
          </p>
        </div>
      </div>

      {/* Access Control */}
      <h3 className="text-xl font-bold text-white mb-4">Controle de Acesso</h3>
      <div className="code-block">
        <span className="comment">/* Modelo de permissões por serviço */</span>
        <br /><br />
        <span className="keyword">enum</span> <span className="type">AccessLevel</span> {'{'}
        <br />
        {'  '}Public,          <span className="comment">// Qualquer um pode acessar</span>
        <br />
        {'  '}Authenticated,  <span className="comment">// Requer identidade NexusNet válida</span>
        <br />
        {'  '}InviteOnly,     <span className="comment">// Requer convite assinado pelo serviço</span>
        <br />
        {'  '}Private,        <span className="comment">// Apenas identidades explicitamente autorizadas</span>
        <br />
        {'}'}
        <br /><br />
        <span className="comment">// Permissões granulares:</span>
        <br />
        <span className="keyword">struct</span> <span className="type">Permission</span> {'{'}
        <br />
        {'  '}resource: String,     <span className="comment">// "/api/v1/data"</span>
        <br />
        {'  '}action: Action,       <span className="comment">// Read, Write, Execute</span>
        <br />
        {'  '}identity: Option&lt;NexusAddress&gt;, <span className="comment">// None = qualquer autenticado</span>
        <br />
        {'  '}expires: Option&lt;Timestamp&gt;,
        <br />
        {'}'}
      </div>
    </div>
  );
}
