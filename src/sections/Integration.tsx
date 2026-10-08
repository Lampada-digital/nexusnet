export function IntegrationSection() {
  return (
    <div>
      <h2 className="section-title">13. Integração: Navegador + Busca + Rede</h2>
      <p className="text-[var(--nexus-text-muted)] mb-6">
        Os três componentes principais funcionam de forma integrada, formando uma experiência coesa 
        de navegação privada e descentralizada.
      </p>

      {/* Integration Diagram */}
      <div className="gradient-border mb-8">
        <div className="gradient-border-inner">
          <h3 className="text-sm font-semibold text-[var(--nexus-primary)] mb-4 uppercase tracking-wider">Stack de Integração</h3>
          <div className="flex flex-col items-center gap-2">
            <div className="diagram-box primary w-full max-w-lg p-4">
              <div className="font-bold text-[var(--nexus-primary)] mb-1">NexusBrowser</div>
              <div className="text-xs text-[var(--nexus-text-muted)]">Interface do usuário, renderização, sandboxing</div>
            </div>
            <div className="connector" />
            <div className="diagram-box secondary w-full max-w-lg p-3">
              <div className="font-bold text-[var(--nexus-secondary)]">NexusSearch</div>
              <div className="text-xs text-[var(--nexus-text-muted)]">Indexação distribuída, consulta anônima</div>
            </div>
            <div className="connector" />
            <div className="diagram-box w-full max-w-lg p-3">
              <div className="font-bold text-white">Discovery Layer</div>
              <div className="text-xs text-[var(--nexus-text-muted)]">DHT, resolução de endereços, verificação</div>
            </div>
            <div className="connector" />
            <div className="diagram-box w-full max-w-lg p-3">
              <div className="font-bold text-white">Routing Layer</div>
              <div className="text-xs text-[var(--nexus-text-muted)]">Circuitos onion, seleção de caminhos, padding</div>
            </div>
            <div className="connector" />
            <div className="diagram-box w-full max-w-lg p-3">
              <div className="font-bold text-white">Nexus Nodes</div>
              <div className="text-xs text-[var(--nexus-text-muted)]">Guard, relay, exit, storage nodes</div>
            </div>
            <div className="connector" />
            <div className="diagram-box accent w-full max-w-lg p-3">
              <div className="font-bold text-[var(--nexus-accent)]">Services (nx://)</div>
              <div className="text-xs text-[var(--nexus-text-muted)]">Conteúdo verificado, identidade autenticada</div>
            </div>
          </div>
        </div>
      </div>

      {/* Complete Flow */}
      <h3 className="text-xl font-bold text-white mb-4">Fluxo Completo</h3>
      <div className="diagram-box text-left mb-8">
        <div className="space-y-3">
          {[
            { step: '1', action: 'Usuário abre NexusBrowser', detail: 'Navegador inicializa circuitos onion, carrega identidades locais' },
            { step: '2', action: 'Usuário pesquisa "serviço X"', detail: 'Consulta enviada via circuito onion ao NexusSearch' },
            { step: '3', action: 'NexusSearch processa consulta', detail: 'Busca no índice distribuído, retorna resultados assinados' },
            { step: '4', action: 'Cliente verifica resultados', detail: 'Verifica assinaturas, checa revogação, valida autenticidade' },
            { step: '5', action: 'Usuário seleciona serviço', detail: 'Cliente resolve nx:// via DHT, obtém pontos de entrada' },
            { step: '6', action: 'Circuito é estabelecido', detail: 'Guard → Middle → Exit construído com chaves efêmeras' },
            { step: '7', action: 'Identidade do serviço verificada', detail: 'Certificado do serviço validado contra identity_hash' },
            { step: '8', action: 'Conteúdo carregado', detail: 'Dados trafegam E2E cifrados, renderizados no sandbox' },
            { step: '9', action: 'Sessão encerrada', detail: 'Circuito destruído, chaves apagadas da memória, sem logs' },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[var(--nexus-primary)] to-[var(--nexus-secondary)] flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-bold text-white">{item.step}</span>
              </div>
              <div>
                <div className="font-semibold text-sm text-white">{item.action}</div>
                <div className="text-xs text-[var(--nexus-text-muted)]">{item.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Component Interaction */}
      <h3 className="text-xl font-bold text-white mb-4">Interação entre Componentes</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="diagram-box text-left">
          <h4 className="font-semibold text-[var(--nexus-primary)] mb-2">Browser ↔ Search</h4>
          <ul className="text-xs text-[var(--nexus-text-muted)] space-y-1">
            <li>• Browser envia consultas via API interna</li>
            <li>• Search retorna resultados assinados</li>
            <li>• Browser verifica antes de exibir</li>
            <li>• Sem estado compartilhado persistente</li>
          </ul>
        </div>
        <div className="diagram-box text-left">
          <h4 className="font-semibold text-[var(--nexus-primary)] mb-2">Browser ↔ Network</h4>
          <ul className="text-xs text-[var(--nexus-text-muted)] space-y-1">
            <li>• Browser solicita circuitos ao routing layer</li>
            <li>• Network notifica sobre estado dos circuitos</li>
            <li>• Browser gerencia múltiplos circuitos</li>
            <li>• Isolamento total entre contextos</li>
          </ul>
        </div>
        <div className="diagram-box text-left">
          <h4 className="font-semibold text-[var(--nexus-primary)] mb-2">Search ↔ Network</h4>
          <ul className="text-xs text-[var(--nexus-text-muted)] space-y-1">
            <li>• Search usa DHT para indexação</li>
            <li>• Consultas trafegam via circuitos</li>
            <li>• Resultados verificados criptograficamente</li>
            <li>• Indexadores operam como nós especializados</li>
          </ul>
        </div>
      </div>

      {/* Data Flow Security */}
      <h3 className="text-xl font-bold text-white mb-4">Segurança do Fluxo de Dados</h3>
      <div className="code-block">
        <span className="comment">/* Garantias de segurança em cada etapa do fluxo */</span>
        <br /><br />
        <span className="comment">// Etapa: Consulta ao NexusSearch</span>
        <br />
        ✓ Identidade do usuário oculta (circuito onion)
        <br />
        ✓ Consulta cifrada até o nó indexador
        <br />
        ✓ Sem logs persistentes no nó indexador
        <br />
        ✓ Resultados assinados (verificáveis)
        <br /><br />
        <span className="comment">// Etapa: Resolução do endereço nx://</span>
        <br />
        ✓ DHT lookup via circuito onion
        <br />
        ✓ Registros verificados criptograficamente
        <br />
        ✓ Múltiplas fontes consultadas (consenso)
        <br />
        ✓ Revogação verificada antes de conectar
        <br /><br />
        <span className="comment">// Etapa: Comunicação com serviço</span>
        <br />
        ✓ Circuito onion (origem oculta do serviço)
        <br />
        ✓ Identidade do serviço verificada (chave pública)
        <br />
        ✓ E2E encryption (conteúdo protegido)
        <br />
        ✓ Forward secrecy (chaves efêmeras)
        <br />
        ✓ Padding uniforme (tamanhos não revelam conteúdo)
      </div>
    </div>
  );
}
