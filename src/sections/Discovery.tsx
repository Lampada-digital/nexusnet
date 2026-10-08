export function DiscoverySection() {
  return (
    <div>
      <h2 className="section-title">8. Descoberta Distribuída</h2>
      <p className="text-[var(--nexus-text-muted)] mb-6">
        O mecanismo de descoberta permite localizar serviços na NexusNet sem depender de autoridade central, 
        utilizando <strong className="text-white">DHT (Distributed Hash Table)</strong> com verificação criptográfica.
      </p>

      {/* DHT Architecture */}
      <div className="gradient-border mb-8">
        <div className="gradient-border-inner">
          <h3 className="text-sm font-semibold text-[var(--nexus-primary)] mb-4 uppercase tracking-wider">Mecanismo de Descoberta</h3>
          <div className="flex flex-col items-center gap-3">
            <div className="diagram-box w-full max-w-md">
              <div className="text-sm font-semibold">"encontre nx://servico"</div>
            </div>
            <div className="connector" />
            <div className="flex flex-wrap justify-center gap-3 w-full max-w-lg">
              <div className="diagram-box secondary flex-1 min-w-[100px]">
                <div className="text-xs font-semibold">DHT Lookup</div>
              </div>
              <div className="diagram-box secondary flex-1 min-w-[100px]">
                <div className="text-xs font-semibold">Registros Assinados</div>
              </div>
              <div className="diagram-box secondary flex-1 min-w-[100px]">
                <div className="text-xs font-semibold">Verificação</div>
              </div>
            </div>
            <div className="connector" />
            <div className="diagram-box accent w-full max-w-md">
              <div className="text-xs">Pontos de entrada do serviço (relay nodes)</div>
            </div>
          </div>
        </div>
      </div>

      {/* DHT Design */}
      <h3 className="text-xl font-bold text-white mb-4">Design da DHT</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="diagram-box text-left">
          <h4 className="font-semibold text-[var(--nexus-primary)] mb-2">📐 Topologia</h4>
          <ul className="text-xs text-[var(--nexus-text-muted)] space-y-1">
            <li>• <strong>Kademlia-like:</strong> Métrica XOR para distância entre nós</li>
            <li>• <strong>Bucket size (k):</strong> 20 nós por bucket</li>
            <li>• <strong>Concurrency (α):</strong> 3 consultas paralelas</li>
            <li>• <strong>Key space:</strong> 256 bits (SHA-256)</li>
            <li>• <strong>Replicação:</strong> Cada valor armazenado em k nós mais próximos</li>
            <li>• <strong>Refresh:</strong> Lookup periódico para manter buckets ativos</li>
          </ul>
        </div>
        <div className="diagram-box text-left">
          <h4 className="font-semibold text-[var(--nexus-primary)] mb-2">📝 Tipos de Registros</h4>
          <div className="code-block text-xs mt-2">
            <span className="comment">// 1. Registro de Serviço</span>
            <br />
            key = identity_hash
            <br />
            value = {'{'} relay_nodes, timestamp, sig {'}'}
            <br /><br />
            <span className="comment">// 2. Registro NNS (nome → endereço)</span>
            <br />
            key = hash("nome.nx")
            <br />
            value = {'{'} target_addr, ttl, sig {'}'}
            <br /><br />
            <span className="comment">// 3. Registro de Revogação</span>
            <br />
            key = "rev:" + identity_hash
            <br />
            value = {'{'} reason, timestamp, sig {'}'}
            <br /><br />
            <span className="comment">// 4. Registro de Rotação</span>
            <br />
            key = "rot:" + identity_hash
            <br />
            value = {'{'} new_key, effective, sig {'}'}
          </div>
        </div>
      </div>

      {/* Protection Mechanisms */}
      <h3 className="text-xl font-bold text-white mb-4">Proteções</h3>
      <div className="space-y-4 mb-8">
        <div className="diagram-box text-left">
          <h4 className="font-semibold text-[var(--nexus-danger)] mb-2">🛡️ Proteção contra Sybil</h4>
          <p className="text-sm text-[var(--nexus-text-muted)]">
            Um atacante não pode criar infinitas identidades falsas porque:
          </p>
          <ul className="text-xs text-[var(--nexus-text-muted)] space-y-1 mt-2">
            <li>• <strong className="text-white">Resource requirements:</strong> Cada nó precisa demonstrar capacidade computacional (proof-of-work leve para registro)</li>
            <li>• <strong className="text-white">Reputation system:</strong> Nós antigos com histórico de comportamento correto têm mais peso</li>
            <li>• <strong className="text-white">Diversity enforcement:</strong> Buckets preferem nós de diferentes sub-redes/países</li>
            <li>• <strong className="text-white">Economic cost:</strong> Custo computacional para criar nós suficientes para dominar um bucket é proibitivo</li>
          </ul>
        </div>

        <div className="diagram-box text-left">
          <h4 className="font-semibold text-[var(--nexus-danger)] mb-2">🛡️ Proteção contra Poisoning</h4>
          <ul className="text-sm text-[var(--nexus-text-muted)] space-y-1">
            <li>• <strong className="text-white">Assinatura obrigatória:</strong> Registros são assinados com a chave privada da identidade. Sem a chave, impossível falsificar.</li>
            <li>• <strong className="text-white">Verificação por múltiplos nós:</strong> O cliente consulta múltiplos nós e compara respostas.</li>
            <li>• <strong className="text-white">Timestamp validation:</strong> Registros com timestamps inconsistentes são rejeitados.</li>
            <li>• <strong className="text-white">Version control:</strong> Apenas registros com versão superior substituem os anteriores.</li>
          </ul>
        </div>

        <div className="diagram-box text-left">
          <h4 className="font-semibold text-[var(--nexus-danger)] mb-2">🛡️ Proteção contra Manipulação</h4>
          <ul className="text-sm text-[var(--nexus-text-muted)] space-y-1">
            <li>• <strong className="text-white">Integridade criptográfica:</strong> Todo registro possui MAC/signature verificável.</li>
            <li>• <strong className="text-white">Eclipse attack resistance:</strong> Tabela de routing mantém nós de diversas origens.</li>
            <li>• <strong className="text-white">Cache poisoning prevention:</strong> Cache local tem TTL curto e é invalidado por verificações periódicas.</li>
          </ul>
        </div>
      </div>

      {/* Lookup Protocol */}
      <h3 className="text-xl font-bold text-white mb-4">Protocolo de Lookup</h3>
      <div className="code-block">
        <span className="comment">/* Algoritmo de Descoberta */</span>
        <br /><br />
        <span className="keyword">fn</span> discover(target: NexusAddress) -&gt; Result&lt;ServiceEndpoints&gt; {'{'}
        <br />
        {'  '}<span className="comment">// 1. Consultar DHT local</span>
        <br />
        {'  '}<span className="keyword">let</span> cached = local_dht.lookup(target.identity_hash);
        <br />
        {'  '}<span className="keyword">if</span> cached.is_fresh() {'{'} <span className="keyword">return</span> cached.verify()?; {'}'}
        <br /><br />
        {'  '}<span className="comment">// 2. Iterative lookup na DHT</span>
        <br />
        {'  '}<span className="keyword">let</span> closest = dht.iterative_lookup(target.identity_hash);
        <br /><br />
        {'  '}<span className="comment">// 3. Verificar assinaturas dos registros</span>
        <br />
        {'  '}<span className="keyword">let</span> records = closest.filter(|r| r.verify_signature());
        <br /><br />
        {'  '}<span className="comment">// 4. Verificar consistência entre múltiplas fontes</span>
        <br />
        {'  '}<span className="keyword">let</span> consensus = majority_vote(records);
        <br /><br />
        {'  '}<span className="comment">// 5. Verificar se há revogação</span>
        <br />
        {'  '}check_revocation(target.identity_hash)?;
        <br /><br />
        {'  '}<span className="comment">// 6. Retornar endpoints verificados</span>
        <br />
        {'  '}Ok(consensus.endpoints)
        <br />
        {'}'}
      </div>
    </div>
  );
}
