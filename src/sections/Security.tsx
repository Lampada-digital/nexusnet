export function SecuritySection() {
  return (
    <div>
      <h2 className="section-title">11. Segurança — Threat Model</h2>
      <p className="text-[var(--nexus-text-muted)] mb-6">
        Análise completa de ameaças à NexusNet, com impacto, probabilidade, mitigação e limitações para cada vetor de ataque.
      </p>

      {/* Threat Model Table */}
      <div className="overflow-x-auto mb-8">
        <table className="threat-table">
          <thead>
            <tr>
              <th>Ameaça</th>
              <th>Impacto</th>
              <th>Prob.</th>
              <th>Mitigação</th>
              <th>Limitações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Nós comprometidos</strong>
                <br /><span className="text-xs text-[var(--nexus-text-muted)]">Nó relay malicioso tenta inspecionar tráfego</span>
              </td>
              <td><span className="badge badge-high">Alto</span></td>
              <td><span className="badge badge-medium">Média</span></td>
              <td className="text-xs">Onion routing, E2E encryption, verificação de integridade em cada salto</td>
              <td className="text-xs">Se adversary controla guard+exit simultaneamente, correlação é possível</td>
            </tr>
            <tr>
              <td>
                <strong>Ataque Sybil</strong>
                <br /><span className="text-xs text-[var(--nexus-text-muted)]">Adversary cria muitos nós falsos</span>
              </td>
              <td><span className="badge badge-high">Alto</span></td>
              <td><span className="badge badge-medium">Média</span></td>
              <td className="text-xs">Proof-of-work para registro, reputação distribuída, diversidade de buckets</td>
              <td className="text-xs">Adversary com recursos massivos pode ainda influenciar porções da rede</td>
            </tr>
            <tr>
              <td>
                <strong>Replay attack</strong>
                <br /><span className="text-xs text-[var(--nexus-text-muted)]">Reenvio de pacotes capturados</span>
              </td>
              <td><span className="badge badge-medium">Médio</span></td>
              <td><span className="badge badge-low">Baixa</span></td>
              <td className="text-xs">Nonces por sessão, timestamps, circuitos efêmeros</td>
              <td className="text-xs">Janela de replay curta mas não nula durante validade do circuito</td>
            </tr>
            <tr>
              <td>
                <strong>Spoofing</strong>
                <br /><span className="text-xs text-[var(--nexus-text-muted)]">Fingir ser outro serviço/identidade</span>
              </td>
              <td><span className="badge badge-high">Alto</span></td>
              <td><span className="badge badge-low">Baixa</span></td>
              <td className="text-xs">Identidade vinculada a chave pública, verificação criptográfica obrigatória</td>
              <td className="text-xs">Sem a chave privada, spoofing é computacionalmente inviável</td>
            </tr>
            <tr>
              <td>
                <strong>Manipulação de rotas</strong>
                <br /><span className="text-xs text-[var(--nexus-text-muted)]">Alterar caminhos na DHT</span>
              </td>
              <td><span className="badge badge-high">Alto</span></td>
              <td><span className="badge badge-medium">Média</span></td>
              <td className="text-xs">Registros assinados, verificação multi-fonte, path validation</td>
              <td className="text-xs">Eclipse attack requer recursos significativos mas é teoricamente possível</td>
            </tr>
            <tr>
              <td>
                <strong>Ataques à descoberta</strong>
                <br /><span className="text-xs text-[var(--nexus-text-muted)]">Envenenar registros na DHT</span>
              </td>
              <td><span className="badge badge-medium">Médio</span></td>
              <td><span className="badge badge-medium">Média</span></td>
              <td className="text-xs">Assinatura obrigatória, verificação de consistência, reputação</td>
              <td className="text-xs">Se majority de nós próximos são maliciosos, pode enganar o cliente</td>
            </tr>
            <tr>
              <td>
                <strong>Correlação de tráfego</strong>
                <br /><span className="text-xs text-[var(--nexus-text-muted)]">Analisar timing/volume para deanonimizar</span>
              </td>
              <td><span className="badge badge-high">Alto</span></td>
              <td><span className="badge badge-medium">Média</span></td>
              <td className="text-xs">Padding uniforme, batching, delays aleatórios, circuitos longos</td>
              <td className="text-xs">Adversary global (monitora toda a rede) pode ter sucesso parcial</td>
            </tr>
            <tr>
              <td>
                <strong>Fingerprinting</strong>
                <br /><span className="text-xs text-[var(--nexus-text-muted)]">Identificar usuário pelo comportamento do navegador</span>
              </td>
              <td><span className="badge badge-medium">Médio</span></td>
              <td><span className="badge badge-medium">Média</span></td>
              <td className="text-xs">APIs bloqueadas, User-Agent uniforme, canvas noise, timezone UTC</td>
              <td className="text-xs">Comportamento do usuário (padrões de uso) ainda pode identificar</td>
            </tr>
            <tr>
              <td>
                <strong>Comprometimento do navegador</strong>
                <br /><span className="text-xs text-[var(--nexus-text-muted)]">Exploit no NexusBrowser</span>
              </td>
              <td><span className="badge badge-high">Alto</span></td>
              <td><span className="badge badge-low">Baixa</span></td>
              <td className="text-xs">Sandboxing, process isolation, auto-update, memory safety (Rust)</td>
              <td className="text-xs">Zero-days são sempre possíveis; mitigação via resposta rápida</td>
            </tr>
            <tr>
              <td>
                <strong>Comprometimento de chave</strong>
                <br /><span className="text-xs text-[var(--nexus-text-muted)]">Roubo da chave privada</span>
              </td>
              <td><span className="badge badge-high">Alto</span></td>
              <td><span className="badge badge-low">Baixa</span></td>
              <td className="text-xs">HSM/keystore, forward secrecy, revogação rápida, detecção anômala</td>
              <td className="text-xs">Se dispositivo é comprometido (malware), chave pode ser extraída</td>
            </tr>
            <tr>
              <td>
                <strong>DoS (Negação de Serviço)</strong>
                <br /><span className="text-xs text-[var(--nexus-text-muted)]">Sobrecarregar nós ou serviços</span>
              </td>
              <td><span className="badge badge-medium">Médio</span></td>
              <td><span className="badge badge-high">Alta</span></td>
              <td className="text-xs">Rate limiting, proof-of-work, redundancy, anycast-like routing</td>
              <td className="text-xs">DoS distribuído em grande escala é difícil de mitigar completamente</td>
            </tr>
            <tr>
              <td>
                <strong>Index poisoning</strong>
                <br /><span className="text-xs text-[var(--nexus-text-muted)]">Resultados falsos no NexusSearch</span>
              </td>
              <td><span className="badge badge-medium">Médio</span></td>
              <td><span className="badge badge-medium">Média</span></td>
              <td className="text-xs">Verificação criptográfica, reputação de indexadores, multi-source</td>
              <td className="text-xs">Se indexadores majoritários são comprometidos, resultados podem ser afetados</td>
            </tr>
            <tr>
              <td>
                <strong>Serviços fraudulentos</strong>
                <br /><span className="text-xs text-[var(--nexus-text-muted)]">Serviço que se comporta maliciosamente</span>
              </td>
              <td><span className="badge badge-medium">Médio</span></td>
              <td><span className="badge badge-medium">Média</span></td>
              <td className="text-xs">Sandboxing, permissões granulares, isolamento de conteúdo</td>
              <td className="text-xs">Conteúdo malicioso (phishing) pode enganar o usuário socialmente</td>
            </tr>
            <tr>
              <td>
                <strong>Ataques ao armazenamento</strong>
                <br /><span className="text-xs text-[var(--nexus-text-muted)]">Alterar/deletar dados distribuídos</span>
              </td>
              <td><span className="badge badge-medium">Médio</span></td>
              <td><span className="badge badge-low">Baixa</span></td>
              <td className="text-xs">Content-addressing, hash verification, replicação, assinaturas</td>
              <td className="text-xs">Se todos os nós com uma réplica são comprometidos, dado pode ser perdido</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Security Principles */}
      <h3 className="text-xl font-bold text-white mb-4">Princípios de Segurança</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="diagram-box text-left">
          <h4 className="font-semibold text-[var(--nexus-accent)] mb-2">🏰 Defense in Depth</h4>
          <p className="text-xs text-[var(--nexus-text-muted)]">
            Múltiplas camadas de proteção. Mesmo que uma falhe, outras continuam ativas. 
            Criptografia + roteamento onion + verificação de identidade + sandboxing.
          </p>
        </div>
        <div className="diagram-box text-left">
          <h4 className="font-semibold text-[var(--nexus-accent)] mb-2">🔑 Least Privilege</h4>
          <p className="text-xs text-[var(--nexus-text-muted)]">
            Cada componente opera com o mínimo de privilégios necessário. 
            Nós relay não têm acesso ao conteúdo. Serviços não têm acesso à identidade real.
          </p>
        </div>
        <div className="diagram-box text-left">
          <h4 className="font-semibold text-[var(--nexus-accent)] mb-2">🔄 Fail Secure</h4>
          <p className="text-xs text-[var(--nexus-text-muted)]">
            Em caso de falha, o sistema nega acesso ao invés de conceder. 
            Verificação falha = conexão encerrada. Assinatura inválida = conteúdo rejeitado.
          </p>
        </div>
        <div className="diagram-box text-left">
          <h4 className="font-semibold text-[var(--nexus-accent)] mb-2">📊 Transparency</h4>
          <p className="text-xs text-[var(--nexus-text-muted)]">
            Código aberto, auditável. Protocolos documentados. 
            Qualquer pessoa pode verificar que o sistema funciona como declarado.
          </p>
        </div>
      </div>
    </div>
  );
}
