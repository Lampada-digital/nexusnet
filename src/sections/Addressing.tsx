export function AddressingSection() {
  return (
    <div>
      <h2 className="section-title">2. Sistema de Endereçamento</h2>
      <p className="text-[var(--nexus-text-muted)] mb-6">
        A NexusNet utiliza um sistema de endereçamento próprio baseado em <strong className="text-white">identidades criptográficas</strong>, 
        independente de DNS, IPs públicos ou domínios convencionais.
      </p>

      {/* Address Format */}
      <div className="gradient-border mb-8">
        <div className="gradient-border-inner">
          <h3 className="text-sm font-semibold text-[var(--nexus-primary)] mb-4 uppercase tracking-wider">Formato do Endereço NexusNet</h3>
          <div className="code-block text-center">
            <span className="keyword">nx://</span><span className="address">7F3A92BC...E4D1</span>
            <br /><br />
            <span className="comment">// Formato completo:</span>
            <br />
            <span className="keyword">nx://</span><span className="address">&lt;identity-hash&gt;</span><span className="string">/&lt;service-path&gt;</span><span className="comment">?version=&lt;v&gt;</span>
            <br /><br />
            <span className="comment">// Exemplos:</span>
            <br />
            <span className="keyword">nx://</span><span className="address">7F3A92BC4D1E8F6A0B3C5D7E9F2A4B6C</span>
            <br />
            <span className="keyword">nx://</span><span className="address">A1B2C3D4...</span><span className="string">/api/v1/data</span>
            <br />
            <span className="keyword">nx://</span><span className="address">E5F6A7B8...</span><span className="string">/files/document.pdf</span>
          </div>
        </div>
      </div>

      {/* Address Structure */}
      <h3 className="text-xl font-bold text-white mb-4">Estrutura do Endereço</h3>
      <div className="code-block mb-8">
        <span className="comment">/* Estrutura do NexusNet Address (NNA) */</span>
        <br /><br />
        <span className="keyword">struct</span> <span className="type">NexusAddress</span> {'{'}
        <br />
        {'  '}<span className="type">version</span>: u8,           <span className="comment">// Versão do esquema (0x01)</span>
        <br />
        {'  '}<span className="type">key_type</span>: u8,        <span className="comment">// Tipo de chave (Ed25519=0x01, X25519=0x02)</span>
        <br />
        {'  '}<span className="type">identity_hash</span>: [u8; 32], <span className="comment">// SHA-256 da chave pública</span>
        <br />
        {'  '}<span className="type">checksum</span>: [u8; 4],    <span className="comment">// Verificação de integridade</span>
        <br />
        {'}'}
        <br /><br />
        <span className="comment">// Representação textual: Base32 encoding (sem ambiguidades)</span>
        <br />
        <span className="comment">// nx:// + base32(version + key_type + identity_hash + checksum)</span>
        <br />
        <span className="comment">// Resultado: 56 caracteres alfanuméricos</span>
      </div>

      {/* Resolution Mechanisms */}
      <h3 className="text-xl font-bold text-white mb-4">Mecanismos de Resolução</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="diagram-box text-left">
          <h4 className="font-semibold text-[var(--nexus-primary)] mb-2">🔍 Resolução Direta</h4>
          <p className="text-xs text-[var(--nexus-text-muted)]">
            O endereço contém a identidade criptográfica. A resolução é feita consultando a DHT 
            para encontrar os nós que anunciam serviço para aquela identidade.
          </p>
          <div className="code-block mt-2 text-xs">
            <span className="comment">// Fluxo:</span>
            <br />1. Extrair identity_hash do endereço
            <br />2. Consultar DHT: "quem serve nx://7F3A...?"
            <br />3. Obter pontos de entrada (relay nodes)
            <br />4. Estabelecer circuito criptografado
            <br />5. Verificar identidade do serviço
          </div>
        </div>
        <div className="diagram-box text-left">
          <h4 className="font-semibold text-[var(--nexus-primary)] mb-2">📋 Resolução por Nome (NNS)</h4>
          <p className="text-xs text-[var(--nexus-text-muted)]">
            NexusNet Name System — resolução distribuída de nomes legíveis para endereços criptográficos.
            Registros são assinados e verificáveis.
          </p>
          <div className="code-block mt-2 text-xs">
            <span className="comment">// Exemplo NNS:</span>
            <br />meusite.nx → nx://7F3A92BC...
            <br />
            <br /><span className="comment">// Registro assinado:</span>
            <br />{'{'} name: "meusite.nx",
            <br />{'  '}target: "7F3A92BC...",
            <br />{'  '}sig: Ed25519_sign(...),
            <br />{'  '}ttl: 3600 {'}'}
          </div>
        </div>
      </div>

      {/* Key Management */}
      <h3 className="text-xl font-bold text-white mb-4">Gestão de Chaves e Atualização</h3>
      <div className="space-y-4 mb-8">
        <div className="diagram-box text-left">
          <h4 className="font-semibold text-[var(--nexus-accent)] mb-2">🔄 Rotação de Chaves</h4>
          <p className="text-sm text-[var(--nexus-text-muted)]">
            O endereço base permanece estável (identity_hash da chave original), mas o serviço pode 
            rotacionar chaves de operação. Um registro de rotação assinado é publicado na DHT:
          </p>
          <div className="code-block mt-2 text-xs">
            <span className="comment">// Certificado de Rotação</span>
            <br />
            <span className="keyword">struct</span> <span className="type">KeyRotation</span> {'{'}
            <br />
            {'  '}old_key_hash: [u8; 32],
            <br />
            {'  '}new_key: PublicKey,
            <br />
            {'  '}effective_from: Timestamp,
            <br />
            {'  '}signature: Signature, <span className="comment">// Assinado com old_key</span>
            <br />
            {'}'}
          </div>
        </div>

        <div className="diagram-box text-left">
          <h4 className="font-semibold text-[var(--nexus-danger)] mb-2">🚫 Revogação</h4>
          <p className="text-sm text-[var(--nexus-text-muted)]">
            Em caso de comprometimento, uma revogação é publicada e propagada pela rede. 
            Nós que recebem a revogação param de rotear para aquela identidade.
          </p>
          <div className="code-block mt-2 text-xs">
            <span className="comment">// Certificado de Revogação</span>
            <br />
            <span className="keyword">struct</span> <span className="type">Revocation</span> {'{'}
            <br />
            {'  '}identity_hash: [u8; 32],
            <br />
            {'  '}reason: RevocationReason,
            <br />
            {'  '}timestamp: Timestamp,
            <br />
            {'  '}signature: Signature, <span className="comment">// Assinado com chave de revogação</span>
            <br />
            {'}'}
            <br /><br />
            <span className="comment">// Chave de revogação é gerada no momento da criação da identidade</span>
            <br />
            <span className="comment">// e armazenada separadamente (offline recomendado)</span>
          </div>
        </div>

        <div className="diagram-box text-left">
          <h4 className="font-semibold text-[var(--nexus-warning)] mb-2">♻️ Recuperação</h4>
          <p className="text-sm text-[var(--nexus-text-muted)]">
            Mecanismo de recuperação social (Shamir's Secret Sharing) ou chave de recuperação 
            armazenada offline. Permite restaurar acesso sem expor a chave privada principal.
          </p>
        </div>
      </div>

      {/* Anti-Spoofing */}
      <h3 className="text-xl font-bold text-white mb-4">Prevenção contra Falsificação</h3>
      <div className="diagram-box text-left mb-6">
        <ul className="text-sm text-[var(--nexus-text-muted)] space-y-2">
          <li><strong className="text-white">Vinculação criptográfica:</strong> O endereço é derivado da chave pública. Sem a chave privada correspondente, é impossível servir conteúdo para aquele endereço.</li>
          <li><strong className="text-white">Verificação em cada salto:</strong> Cada nó no circuito verifica a autenticidade da comunicação.</li>
          <li><strong className="text-white">Sem colisões práticas:</strong> SHA-256 oferece 128 bits de segurança contra colisões.</li>
          <li><strong className="text-white">Transparência:</strong> Todas as operações de rotação e revogação são públicas e auditáveis.</li>
        </ul>
      </div>
    </div>
  );
}
