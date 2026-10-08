export function TrustSection() {
  return (
    <div>
      <h2 className="section-title">12. Modelo de Confiança — Zero Trust</h2>
      <p className="text-[var(--nexus-text-muted)] mb-6">
        A NexusNet opera sob arquitetura <strong className="text-white">Zero Trust</strong>: nenhuma entidade é confiável por padrão. 
        Cada comunicação é validada independentemente, cada nó é tratado como potencialmente hostil.
      </p>

      {/* Zero Trust Principles */}
      <div className="gradient-border mb-8">
        <div className="gradient-border-inner">
          <h3 className="text-sm font-semibold text-[var(--nexus-primary)] mb-4 uppercase tracking-wider">Princípios Zero Trust na NexusNet</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="diagram-box text-left">
                <div className="font-semibold text-sm text-[var(--nexus-primary)]">1. Nunca confie, sempre verifique</div>
                <p className="text-xs text-[var(--nexus-text-muted)] mt-1">
                  Cada requisição é autenticada e autorizada independentemente. Não existe "rede interna confiável".
                </p>
              </div>
              <div className="diagram-box text-left">
                <div className="font-semibold text-sm text-[var(--nexus-primary)]">2. Assuma violação</div>
                <p className="text-xs text-[var(--nexus-text-muted)] mt-1">
                  Projete cada componente assumindo que pode ser comprometido. Minimize blast radius.
                </p>
              </div>
              <div className="diagram-box text-left">
                <div className="font-semibold text-sm text-[var(--nexus-primary)]">3. Verifique explicitamente</div>
                <p className="text-xs text-[var(--nexus-text-muted)] mt-1">
                  Autenticação baseada em identidade criptográfica, não em localização de rede.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="diagram-box text-left">
                <div className="font-semibold text-sm text-[var(--nexus-primary)]">4. Use least privilege</div>
                <p className="text-xs text-[var(--nexus-text-muted)] mt-1">
                  Cada nó, serviço e usuário recebe apenas as permissões estritamente necessárias.
                </p>
              </div>
              <div className="diagram-box text-left">
                <div className="font-semibold text-sm text-[var(--nexus-primary)]">5. Microssegmentação</div>
                <p className="text-xs text-[var(--nexus-text-muted)] mt-1">
                  Circuitos isolados, sessões independentes, dados separados por contexto.
                </p>
              </div>
              <div className="diagram-box text-left">
                <div className="font-semibold text-sm text-[var(--nexus-primary)]">6. Monitore e valide continuamente</div>
                <p className="text-xs text-[var(--nexus-text-muted)] mt-1">
                  Reputação distribuída, detecção de anomalias, rotação periódica de credenciais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Boundaries */}
      <h3 className="text-xl font-bold text-white mb-4">Fronteiras de Confiança</h3>
      <div className="overflow-x-auto mb-8">
        <table className="threat-table">
          <thead>
            <tr>
              <th>Fronteira</th>
              <th>O que é verificado</th>
              <th>Como é verificado</th>
              <th>Se falhar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cliente → Guard Node</td>
              <td>Identidade do nó, chave de sessão</td>
              <td>Handshake Noise + verificação de certificado</td>
              <td>Conexão rejeitada, novo nó selecionado</td>
            </tr>
            <tr>
              <td>Guard → Middle Relay</td>
              <td>Autenticidade do pacote, MAC</td>
              <td>Chave simétrica derivada do handshake</td>
              <td>Pacote descartado, circuito invalidado</td>
            </tr>
            <tr>
              <td>Middle → Exit Node</td>
              <td>Autenticidade, integridade</td>
              <td>Camada onion + MAC</td>
              <td>Pacote descartado, nó reportado</td>
            </tr>
            <tr>
              <td>Exit → Serviço</td>
              <td>Identidade do serviço</td>
              <td>Certificado do serviço + verificação DHT</td>
              <td>Conexão encerrada, alerta ao usuário</td>
            </tr>
            <tr>
              <td>Serviço → Cliente</td>
              <td>Identidade do cliente (se requerida)</td>
              <td>Pseudônimo assinado + permissão</td>
              <td>Acesso negado</td>
            </tr>
            <tr>
              <td>DHT Peer → DHT Peer</td>
              <td>Identidade do nó, validade dos registros</td>
              <td>Assinatura + proof-of-work + reputação</td>
              <td>Registro rejeitado, nó penalizado</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Node Compromise Isolation */}
      <h3 className="text-xl font-bold text-white mb-4">Isolamento de Comprometimento</h3>
      <div className="diagram-box text-left mb-8">
        <h4 className="font-semibold text-[var(--nexus-warning)] mb-3">Um nó comprometido NÃO compromete a rede inteira</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[var(--nexus-bg)] rounded p-3">
            <div className="text-xs font-semibold text-[var(--nexus-danger)] mb-1">Se Guard Node é comprometido:</div>
            <ul className="text-xs text-[var(--nexus-text-muted)] space-y-1">
              <li>• Vê IP do cliente</li>
              <li>• NÃO vê destino</li>
              <li>• NÃO vê conteúdo</li>
              <li>• Cliente detecta e troca de guard</li>
            </ul>
          </div>
          <div className="bg-[var(--nexus-bg)] rounded p-3">
            <div className="text-xs font-semibold text-[var(--nexus-danger)] mb-1">Se Middle Relay é comprometido:</div>
            <ul className="text-xs text-[var(--nexus-text-muted)] space-y-1">
              <li>• Vê nó anterior e próximo</li>
              <li>• NÃO vê origem real</li>
              <li>• NÃO vê destino</li>
              <li>• Circuito é rotacionado</li>
            </ul>
          </div>
          <div className="bg-[var(--nexus-bg)] rounded p-3">
            <div className="text-xs font-semibold text-[var(--nexus-danger)] mb-1">Se Exit Node é comprometido:</div>
            <ul className="text-xs text-[var(--nexus-text-muted)] space-y-1">
              <li>• Vê destino do serviço</li>
              <li>• NÃO vê origem real</li>
              <li>• NÃO vê conteúdo (E2E)</li>
              <li>• Reputação cai, é excluído</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Reputation System */}
      <h3 className="text-xl font-bold text-white mb-4">Sistema de Reputação Distribuído</h3>
      <div className="code-block">
        <span className="comment">/* Modelo de reputação simplificado */</span>
        <br /><br />
        <span className="keyword">struct</span> <span className="type">NodeReputation</span> {'{'}
        <br />
        {'  '}node_id: NodeId,
        <br />
        {'  '}uptime_score: f32,          <span className="comment">// Confiabilidade (0.0 - 1.0)</span>
        <br />
        {'  '}behavior_score: f32,       <span className="comment">// Comportamento correto</span>
        <br />
        {'  '}age_days: u32,             <span className="comment">// Tempo na rede</span>
        <br />
        {'  '}reports_against: u32,      <span className="comment">// Reports negativos recebidos</span>
        <br />
        {'  '}verified_by: Vec&lt;NodeId&gt;,  <span className="comment">// Nós que validaram este nó</span>
        <br />
        {'}'}
        <br /><br />
        <span className="comment">// Score final = weighted(uptime, behavior, age) - penalty(reports)</span>
        <br />
        <span className="comment">// Nós com score baixo são excluídos da seleção de circuitos</span>
        <br />
        <span className="comment">// Reports são eles mesmos reputacionais (evita false reporting)</span>
      </div>
    </div>
  );
}
