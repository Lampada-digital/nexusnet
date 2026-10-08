export function SearchSection() {
  return (
    <div>
      <h2 className="section-title">7. NexusSearch</h2>
      <p className="text-[var(--nexus-text-muted)] mb-6">
        O NexusSearch é o mecanismo de busca distribuído da NexusNet, capaz de indexar e localizar 
        serviços <code className="text-[var(--nexus-primary)]">nx://</code> sem criar perfis de usuários.
      </p>

      {/* Architecture */}
      <div className="gradient-border mb-8">
        <div className="gradient-border-inner">
          <h3 className="text-sm font-semibold text-[var(--nexus-primary)] mb-4 uppercase tracking-wider">Arquitetura NexusSearch</h3>
          <div className="flex flex-col items-center gap-3">
            <div className="diagram-box primary w-full max-w-md">
              <div className="font-bold text-[var(--nexus-primary)]">NexusSearch</div>
              <div className="text-xs text-[var(--nexus-text-muted)]">Motor de busca distribuído</div>
            </div>
            <div className="flex w-full max-w-lg gap-4">
              <div className="connector" />
              <div className="connector" />
            </div>
            <div className="flex flex-wrap justify-center gap-4 w-full max-w-lg">
              <div className="diagram-box secondary flex-1 min-w-[120px]">
                <div className="text-xs font-semibold">Indexadores</div>
                <div className="text-xs text-[var(--nexus-text-muted)]">Nós que crawleiam</div>
              </div>
              <div className="diagram-box secondary flex-1 min-w-[120px]">
                <div className="text-xs font-semibold">Índice Distribuído</div>
                <div className="text-xs text-[var(--nexus-text-muted)]">DHT + shards</div>
              </div>
              <div className="diagram-box secondary flex-1 min-w-[120px]">
                <div className="text-xs font-semibold">Usuários</div>
                <div className="text-xs text-[var(--nexus-text-muted)]">Consultas anônimas</div>
              </div>
            </div>
            <div className="connector" />
            <div className="diagram-box accent w-full max-w-md">
              <div className="text-xs">Serviços NexusNet (nx://)</div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Features */}
      <h3 className="text-xl font-bold text-white mb-4">Características Fundamentais</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="diagram-box text-left">
          <h4 className="font-semibold text-[var(--nexus-primary)] mb-2">📇 Índice Distribuído</h4>
          <p className="text-xs text-[var(--nexus-text-muted)]">
            O índice é particionado (sharded) entre múltiplos nós. Nenhum nó possui o índice completo. 
            Cada shard é verificável criptograficamente.
          </p>
          <div className="code-block text-xs mt-2">
            <span className="comment">// Shard assignment</span>
            <br />
            shard_id = hash(service_address) % num_shards
            <br /><br />
            <span className="comment">// Cada shard contém:</span>
            <br />
            - termos de busca → endereços nx://
            <br />
            - metadados mínimos (título, descrição)
            <br />
            - hash de integridade do conteúdo
            <br />
            - timestamp da última indexação
          </div>
        </div>
        <div className="diagram-box text-left">
          <h4 className="font-semibold text-[var(--nexus-primary)] mb-2">✓ Verificação de Autenticidade</h4>
          <p className="text-xs text-[var(--nexus-text-muted)]">
            Cada resultado é vinculado à identidade criptográfica do serviço. Resultados falsificados 
            são detectados pois o atacante não possui a chave privada do serviço alvo.
          </p>
          <div className="code-block text-xs mt-2">
            <span className="comment">// Registro de índice assinado</span>
            <br />
            {'{'}
            <br />
            {'  '}address: "nx://7F3A...",
            <br />
            {'  '}title: "Meu Serviço",
            <br />
            {'  '}description: "...",
            <br />
            {'  '}content_hash: SHA256(content),
            <br />
            {'  '}signature: sign(indexing_key, data),
            <br />
            {'  '}timestamp: 1234567890
            <br />
            {'}'}
          </div>
        </div>
      </div>

      {/* Privacy Model */}
      <h3 className="text-xl font-bold text-white mb-4">Modelo de Privacidade do NexusSearch</h3>
      <div className="space-y-4 mb-8">
        <div className="diagram-box text-left">
          <h4 className="font-semibold text-[var(--nexus-danger)] mb-2">🚫 O que NÃO fazemos</h4>
          <ul className="text-sm text-[var(--nexus-text-muted)] space-y-1">
            <li>• <strong className="text-white">Sem histórico centralizado obrigatório:</strong> Consultas não são armazenadas permanentemente.</li>
            <li>• <strong className="text-white">Sem identificadores de usuário:</strong> Consultas são feitas via circuito onion, sem vinculação a identidade.</li>
            <li>• <strong className="text-white">Sem publicidade baseada em rastreamento:</strong> Nenhum modelo de negócio baseado em dados do usuário.</li>
            <li>• <strong className="text-white">Sem venda de histórico:</strong> Não existe histórico para vender.</li>
            <li>• <strong className="text-white">Sem personalização invasiva:</strong> Resultados baseados apenas no conteúdo da consulta.</li>
          </ul>
        </div>
        <div className="diagram-box text-left">
          <h4 className="font-semibold text-[var(--nexus-accent)] mb-2">✅ O que fazemos</h4>
          <ul className="text-sm text-[var(--nexus-text-muted)] space-y-1">
            <li>• <strong className="text-white">Consultas via circuito onion:</strong> O nó do índice não sabe quem fez a consulta.</li>
            <li>• <strong className="text-white">Cache local de resultados:</strong> Resultados frequentes são cacheados localmente.</li>
            <li>• <strong className="text-white">Resultados verificáveis:</strong> Cada resultado inclui prova criptográfica de autenticidade.</li>
            <li>• <strong className="text-white">Filtros locais:</strong> Filtragem e ordenação podem ser feitas no cliente.</li>
            <li>• <strong className="text-white">Descoberta orgânica:</strong> Novos serviços são descobertos via crawling distribuído.</li>
          </ul>
        </div>
      </div>

      {/* Query Flow */}
      <h3 className="text-xl font-bold text-white mb-4">Fluxo de Consulta</h3>
      <div className="code-block mb-8">
        <span className="comment">/* Fluxo de busca no NexusSearch */</span>
        <br /><br />
        1. Usuário digita consulta no NexusBrowser
        <br />
        2. Cliente estabelece circuito onion até nó indexador
        <br />
        3. Consulta é enviada (sem identidade do usuário)
        <br />
        4. Nó indexador busca no shard local
        <br />
        5. Resultados são assinados e retornados
        <br />
        6. Cliente verifica assinatura dos resultados
        <br />
        7. Cliente pode consultar diretamente os serviços encontrados
        <br />
        8. Circuito é destruído — nenhum log persiste
        <br /><br />
        <span className="comment">/* O nó indexador sabe: */</span>
        <br />
        <span className="comment">/*   - A consulta (texto) */</span>
        <br />
        <span className="comment">/*   - O último nó do circuito (não o usuário) */</span>
        <br />
        <span className="comment">/* O nó indexador NÃO sabe: */</span>
        <br />
        <span className="comment">/*   - Quem fez a consulta */</span>
        <br />
        <span className="comment">/*   - IP real do usuário */</span>
        <br />
        <span className="comment">/*   - Histórico de consultas */</span>
      </div>

      {/* Anti-Poisoning */}
      <h3 className="text-xl font-bold text-white mb-4">Proteção contra Index Poisoning</h3>
      <div className="diagram-box text-left">
        <ul className="text-sm text-[var(--nexus-text-muted)] space-y-2">
          <li><strong className="text-white">Verificação de conteúdo:</strong> O hash do conteúdo indexado é verificado periodicamente contra o serviço real.</li>
          <li><strong className="text-white">Reputação de indexadores:</strong> Indexadores que reportam hashes inconsistentes perdem reputação.</li>
          <li><strong className="text-white">Múltiplas fontes:</strong> Resultados de múltiplos indexadores são comparados. Discrepâncias são sinalizadas.</li>
          <li><strong className="text-white">Vinculação criptográfica:</strong> Apenas o detentor da chave privada pode registrar conteúdo para seu endereço nx://.</li>
          <li><strong className="text-white">Rate limiting distribuído:</strong> Limitação de novas entradas por identidade para prevenir spam no índice.</li>
        </ul>
      </div>
    </div>
  );
}
