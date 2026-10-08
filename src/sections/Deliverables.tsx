export function DeliverablesSection() {
  return (
    <div>
      <h2 className="section-title">16. Entregáveis e Limitações</h2>
      <p className="text-[var(--nexus-text-muted)] mb-6">
        Resumo completo do que a NexusNet entrega, plano de escalabilidade e análise honesta das limitações.
      </p>

      {/* Deliverables Checklist */}
      <h3 className="text-xl font-bold text-white mb-4">Entregáveis do Projeto</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
        {[
          { num: 1, title: 'Arquitetura completa', desc: 'Design de rede sobreposta com todas as camadas definidas' },
          { num: 2, title: 'Diagrama da rede', desc: 'Visualização de todos os componentes e suas relações' },
          { num: 3, title: 'Especificação do protocolo', desc: 'Formato de pacotes, handshake, mensagens' },
          { num: 4, title: 'Especificação dos pacotes', desc: 'Estrutura binária, campos, tamanhos' },
          { num: 5, title: 'Sistema de identidade', desc: 'Ed25519/X25519, rotação, revogação, recuperação' },
          { num: 6, title: 'Sistema de endereçamento', desc: 'nx:// com resolução distribuída' },
          { num: 7, title: 'Mecanismo de descoberta', desc: 'DHT Kademlia-like com verificação criptográfica' },
          { num: 8, title: 'Algoritmo de roteamento', desc: 'Onion routing multi-salto com seleção de caminhos' },
          { num: 9, title: 'NexusBrowser', desc: 'Navegador com nx:// nativo e anti-fingerprinting' },
          { num: 10, title: 'NexusSearch', desc: 'Busca distribuída sem perfil de usuário' },
          { num: 11, title: 'Sistema de serviços', desc: 'Hospedagem com identidade verificável' },
          { num: 12, title: 'Armazenamento distribuído', desc: 'Content-addressed, replicado, versionado' },
          { num: 13, title: 'Threat model', desc: '14 ameaças analisadas com mitigação e limitações' },
          { num: 14, title: 'Modelo de privacidade', desc: 'O que é protegido, reduzido e ainda observável' },
          { num: 15, title: 'Estrutura de diretórios', desc: 'Organização modular do código' },
          { num: 16, title: 'Código inicial', desc: 'Implementação base em Rust + TypeScript' },
          { num: 17, title: 'Testes', desc: 'Unitários, integração, property-based' },
          { num: 18, title: 'Documentação', desc: 'Especificações, guides, threat model' },
          { num: 19, title: 'Plano de escalabilidade', desc: 'Estratégia para crescimento da rede' },
          { num: 20, title: 'Análise das limitações', desc: 'O que a NexusNet não resolve' },
        ].map((item) => (
          <div key={item.num} className="diagram-box text-left flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[var(--nexus-primary)] to-[var(--nexus-secondary)] flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-xs font-bold text-white">{item.num}</span>
            </div>
            <div>
              <div className="font-semibold text-sm text-white">{item.title}</div>
              <div className="text-xs text-[var(--nexus-text-muted)]">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Scalability Plan */}
      <h3 className="text-xl font-bold text-white mb-4">Plano de Escalabilidade</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="diagram-box text-left">
          <h4 className="font-semibold text-[var(--nexus-primary)] mb-2">📈 Curto Prazo (1-10K nós)</h4>
          <ul className="text-xs text-[var(--nexus-text-muted)] space-y-1">
            <li>• DHT com bucket size fixo</li>
            <li>• Bootstrap nodes centralizados (transição)</li>
            <li>• Indexação centralizada (NexusSearch)</li>
            <li>• Circuitos de 3 saltos</li>
            <li>• Replicação fator 3</li>
          </ul>
        </div>
        <div className="diagram-box text-left">
          <h4 className="font-semibold text-[var(--nexus-secondary)] mb-2">📊 Médio Prazo (10K-1M nós)</h4>
          <ul className="text-xs text-[var(--nexus-text-muted)] space-y-1">
            <li>• DHT hierárquica (sharding)</li>
            <li>• Bootstrap totalmente distribuído</li>
            <li>• NexusSearch com shards distribuídos</li>
            <li>• Circuitos adaptativos (3-5 saltos)</li>
            <li>• Erasure coding para storage</li>
          </ul>
        </div>
        <div className="diagram-box text-left">
          <h4 className="font-semibold text-[var(--nexus-accent)] mb-2">🌍 Longo Prazo (1M+ nós)</h4>
          <ul className="text-xs text-[var(--nexus-text-muted)] space-y-1">
            <li>• DHT com overlay hierárquico</li>
            <li>• Consenso distribuído para parâmetros</li>
            <li>• Indexação federada</li>
            <li>• Roteamento geográfico consciente</li>
            <li>• Storage com CDN overlay</li>
          </ul>
        </div>
      </div>

      {/* Limitations */}
      <h3 className="text-xl font-bold text-white mb-4">Limitações e Análise Crítica</h3>
      <div className="space-y-4 mb-8">
        <div className="diagram-box danger text-left">
          <h4 className="font-semibold text-[var(--nexus-danger)] mb-2">❌ O que a NexusNet NÃO resolve</h4>
          <ul className="text-sm text-[var(--nexus-text-muted)] space-y-2">
            <li><strong className="text-white">Anonimato absoluto:</strong> Não existe. Um adversary com recursos suficientes (controle global da rede) pode realizar ataques de correlação.</li>
            <li><strong className="text-white">Proteção contra endpoint compromise:</strong> Se o dispositivo do usuário está infectado com malware, nenhuma rede pode protegê-lo.</li>
            <li><strong className="text-white">Performance equivalente à web convencional:</strong> Onion routing adiciona latência (3-5 saltos). Nunca será tão rápido quanto conexão direta.</li>
            <li><strong className="text-white">Adoção em massa imediata:</strong> Requer mudança de comportamento do usuário. Barreira de entrada significativa.</li>
            <li><strong className="text-white">Conteúdo ilegal:</strong> Como qualquer rede anônima, pode ser usada para atividades ilícitas. Não é possível filtrar sem comprometer privacidade.</li>
            <li><strong className="text-white">Censura governamental total:</strong> Governos podem bloquear tráfego NexusNet se identificarem o padrão. Requer pluggable transports.</li>
          </ul>
        </div>

        <div className="diagram-box text-left">
          <h4 className="font-semibold text-[var(--nexus-warning)] mb-2">⚠️ Trade-offs Inevitáveis</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
            <div className="bg-[var(--nexus-bg)] rounded p-3">
              <div className="text-xs font-semibold text-white mb-1">Privacidade vs. Performance</div>
              <p className="text-xs text-[var(--nexus-text-muted)]">Mais saltos = mais privacidade, mais latência. Otimizado para 3 saltos como padrão.</p>
            </div>
            <div className="bg-[var(--nexus-bg)] rounded p-3">
              <div className="text-xs font-semibold text-white mb-1">Descentralização vs. Simplicidade</div>
              <p className="text-xs text-[var(--nexus-text-muted)]">Totalmente distribuído é mais complexo. Bootstrap inicial usa componentes semi-centralizados.</p>
            </div>
            <div className="bg-[var(--nexus-bg)] rounded p-3">
              <div className="text-xs font-semibold text-white mb-1">Segurança vs. Usabilidade</div>
              <p className="text-xs text-[var(--nexus-text-muted)]">Endereços criptográficos são seguros mas não legíveis. NNS adiciona conveniência com custo de complexidade.</p>
            </div>
            <div className="bg-[var(--nexus-bg)] rounded p-3">
              <div className="text-xs font-semibold text-white mb-1">Verificabilidade vs. Privacidade</div>
              <p className="text-xs text-[var(--nexus-text-muted)]">Registros públicos na DHT permitem verificação mas também observação. Minimizado via circuitos onion.</p>
            </div>
          </div>
        </div>

        <div className="diagram-box text-left">
          <h4 className="font-semibold text-[var(--nexus-accent)] mb-2">✅ O que a NexusNet resolve bem</h4>
          <ul className="text-sm text-[var(--nexus-text-muted)] space-y-2">
            <li><strong className="text-white">Privacidade significativamente superior à web convencional:</strong> Sem cookies de terceiros, sem tracking, sem perfis.</li>
            <li><strong className="text-white">Resistência a censura:</strong> Sem ponto central para bloquear. DHT distribuída, roteamento adaptativo.</li>
            <li><strong className="text-white">Verificabilidade de identidade:</strong> Cada serviço prova quem é via criptografia. Sem spoofing prático.</li>
            <li><strong className="text-white">Minimização de metadados:</strong> Design orientado a reduzir ao máximo o que é observável.</li>
            <li><strong className="text-white">Soberania de dados:</strong> Usuário controla suas chaves, identidades e dados. Sem intermediários.</li>
            <li><strong className="text-white">Transparência:</strong> Código aberto, protocolos documentados, auditável por qualquer pessoa.</li>
          </ul>
        </div>
      </div>

      {/* Final Note */}
      <div className="gradient-border">
        <div className="gradient-border-inner text-center">
          <h3 className="text-lg font-bold text-white mb-2">NexusNet</h3>
          <p className="text-sm text-[var(--nexus-text-muted)] max-w-2xl mx-auto">
            Uma nova infraestrutura de comunicação privada e descentralizada. 
            Não é apenas um conjunto de sites escondidos — é uma rede com protocolo próprio, 
            identidade criptográfica, roteamento orientado à privacidade e serviços verificáveis.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-4 text-xs">
            <span className="text-[var(--nexus-primary)]">Segurança</span>
            <span className="text-[var(--nexus-text-muted)]">→</span>
            <span className="text-[var(--nexus-primary)]">Privacidade</span>
            <span className="text-[var(--nexus-text-muted)]">→</span>
            <span className="text-[var(--nexus-primary)]">Verificabilidade</span>
            <span className="text-[var(--nexus-text-muted)]">→</span>
            <span className="text-[var(--nexus-primary)]">Descentralização</span>
            <span className="text-[var(--nexus-text-muted)]">→</span>
            <span className="text-[var(--nexus-primary)]">Disponibilidade</span>
            <span className="text-[var(--nexus-text-muted)]">→</span>
            <span className="text-[var(--nexus-primary)]">Desempenho</span>
          </div>
        </div>
      </div>
    </div>
  );
}
