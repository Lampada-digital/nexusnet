export function MetadataSection() {
  return (
    <div>
      <h2 className="section-title">5. Minimização de Metadados</h2>
      <p className="text-[var(--nexus-text-muted)] mb-6">
        A minimização de metadados é um dos <strong className="text-white">princípios fundamentais</strong> da NexusNet. 
        Cada decisão de design é avaliada pelo critério: "este metadado é estritamente necessário?"
      </p>

      {/* Metadata Categories */}
      <h3 className="text-xl font-bold text-white mb-4">Metadados Analisados e Tratados</h3>
      <div className="overflow-x-auto mb-8">
        <table className="threat-table">
          <thead>
            <tr>
              <th>Metadado</th>
              <th>Tratamento</th>
              <th>Mecanismo</th>
              <th>Resíduo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Endereço IP de origem</td>
              <td><span className="badge badge-low">Ocultado</span></td>
              <td>Roteamento onion multi-salto</td>
              <td>Visível apenas ao guard node</td>
            </tr>
            <tr>
              <td>Endereço de destino</td>
              <td><span className="badge badge-low">Ocultado</span></td>
              <td>Criptografia em camadas</td>
              <td>Visível apenas ao exit node e cliente</td>
            </tr>
            <tr>
              <td>Horário da comunicação</td>
              <td><span className="badge badge-medium">Reduzido</span></td>
              <td>Padding temporal, delays aleatórios</td>
              <td>Guard node observa horário real</td>
            </tr>
            <tr>
              <td>Duração da conexão</td>
              <td><span className="badge badge-medium">Reduzido</span></td>
              <td>Multiplexação, circuitos persistentes</td>
              <td>Nós do circuito observam duração</td>
            </tr>
            <tr>
              <td>Frequência de comunicação</td>
              <td><span className="badge badge-medium">Reduzido</span></td>
              <td>Tração de pacotes (batching)</td>
              <td>Padrão observável pelo guard node</td>
            </tr>
            <tr>
              <td>Tamanho das mensagens</td>
              <td><span className="badge badge-low">Ocultado</span></td>
              <td>Padding para tamanhos fixos (512B)</td>
              <td>Tamanho real visível apenas nas pontas</td>
            </tr>
            <tr>
              <td>Histórico de navegação</td>
              <td><span className="badge badge-low">Não armazenado</span></td>
              <td>Sem logs, ephemeral sessions</td>
              <td>Apenas na memória do cliente</td>
            </tr>
            <tr>
              <td>Identificadores persistentes</td>
              <td><span className="badge badge-low">Eliminados</span></td>
              <td>Sem cookies, sem session IDs globais</td>
              <td>Identidade por serviço (isolada)</td>
            </tr>
            <tr>
              <td>Informações de dispositivo</td>
              <td><span className="badge badge-low">Minimizado</span></td>
              <td>User-Agent uniforme, sem fingerprinting</td>
              <td>Canvas/WebGL fingerprints possíveis</td>
            </tr>
            <tr>
              <td>Localização geográfica</td>
              <td><span className="badge badge-low">Ocultada</span></td>
              <td>Sem geolocalização, IP mascarado</td>
              <td>Latência pode revelar região aproximada</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Anti-Profiling */}
      <h3 className="text-xl font-bold text-white mb-4">Proteção contra Construção de Perfil</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="diagram-box text-left">
          <h4 className="font-semibold text-[var(--nexus-primary)] mb-2">🎭 Identidades Isoladas por Serviço</h4>
          <p className="text-xs text-[var(--nexus-text-muted)]">
            Cada serviço vê uma identidade diferente do usuário. Não existe um "ID global" 
            que conecte atividades entre serviços. O cliente gera pseudônimos unlinkable para cada serviço.
          </p>
          <div className="code-block text-xs mt-2">
            <span className="comment">// Pseudônimo por serviço</span>
            <br />
            pseudonym_service_A = HMAC(master_key, "service_A")
            <br />
            pseudonym_service_B = HMAC(master_key, "service_B")
            <br /><br />
            <span className="comment">// Service A e B não conseguem correlacionar</span>
          </div>
        </div>
        <div className="diagram-box text-left">
          <h4 className="font-semibold text-[var(--nexus-primary)] mb-2">🔄 Rotação de Circuitos</h4>
          <p className="text-xs text-[var(--nexus-text-muted)]">
            Circuitos são rotacionados periodicamente. Mesmo que um nó observe tráfego, 
            não consegue correlacionar atividades anteriores e posteriores após rotação.
          </p>
        </div>
        <div className="diagram-box text-left">
          <h4 className="font-semibold text-[var(--nexus-primary)] mb-2">📏 Padding Uniforme</h4>
          <p className="text-xs text-[var(--nexus-text-muted)]">
            Todos os pacotes são padronizados para o mesmo tamanho. O conteúdo real é 
            indistinguível pelo tamanho. Isso previne ataques de análise de tráfego baseados em volume.
          </p>
        </div>
        <div className="diagram-box text-left">
          <h4 className="font-semibold text-[var(--nexus-primary)] mb-2">⏱️ Traffic Shaping</h4>
          <p className="text-xs text-[var(--nexus-text-muted)]">
            Transmissões são agrupadas (batched) e enviadas em intervalos regulares. 
            Isso dificulta a correlação temporal entre entrada e saída nos nós relay.
          </p>
        </div>
      </div>

      {/* What Can Be Hidden/Reduced/Observed */}
      <h3 className="text-xl font-bold text-white mb-4">Modelo de Privacidade — O que é Protegido</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="diagram-box text-left border-l-4" style={{ borderLeftColor: 'var(--nexus-accent)' }}>
          <h4 className="font-semibold text-[var(--nexus-accent)] mb-2">✅ O que o usuário consegue esconder</h4>
          <ul className="text-xs text-[var(--nexus-text-muted)] space-y-1">
            <li>• Endereço IP real dos serviços visitados</li>
            <li>• Conteúdo das comunicações (E2E encryption)</li>
            <li>• Identidade real por trás das atividades</li>
            <li>• Histórico de navegação (não persistido)</li>
            <li>• Conexões entre diferentes serviços</li>
            <li>• Localização geográfica precisa</li>
            <li>• Tipo de dispositivo (User-Agent uniforme)</li>
          </ul>
        </div>
        <div className="diagram-box text-left border-l-4" style={{ borderLeftColor: 'var(--nexus-warning)' }}>
          <h4 className="font-semibold text-[var(--nexus-warning)] mb-2">⚠️ O que o usuário consegue reduzir</h4>
          <ul className="text-xs text-[var(--nexus-text-muted)] space-y-1">
            <li>• Correlação temporal (padding + batching)</li>
            <li>• Análise de volume (tamanhos uniformes)</li>
            <li>• Fingerprinting de navegador (APIs bloqueadas)</li>
            <li>• Perfil de comportamento (identidades isoladas)</li>
            <li>• Associação entre sessões (rotação de circuitos)</li>
          </ul>
        </div>
        <div className="diagram-box text-left border-l-4" style={{ borderLeftColor: 'var(--nexus-danger)' }}>
          <h4 className="font-semibold text-[var(--nexus-danger)] mb-2">🔴 O que ainda pode ser observado</h4>
          <ul className="text-xs text-[var(--nexus-text-muted)] space-y-1">
            <li>• <strong>Guard node:</strong> IP real + horário + volume de tráfego</li>
            <li>• <strong>Exit node:</strong> Destino + horário + volume</li>
            <li>• <strong>Observador global:</strong> Padrões de tráfego (se monitorar todos os nós)</li>
            <li>• <strong>Serviço:</strong> Conteúdo da requisição (após E2E), timing do serviço</li>
            <li>• <strong>ISP:</strong> Que o usuário usa NexusNet (volume, horários)</li>
            <li>• <strong>Latência:</strong> Pode revelar região aproximada</li>
          </ul>
        </div>
        <div className="diagram-box text-left border-l-4" style={{ borderLeftColor: 'var(--nexus-secondary)' }}>
          <h4 className="font-semibold text-[var(--nexus-secondary)] mb-2">🎯 Ataques que podem revelar metadados</h4>
          <ul className="text-xs text-[var(--nexus-text-muted)] space-y-1">
            <li>• <strong>Correlação temporal:</strong> Se adversary controla guard + exit</li>
            <li>• <strong>Análise de tráfego:</strong> Padrões de volume/frequência</li>
            <li>• <strong>Website fingerprinting:</strong> Padrões de tamanho de páginas</li>
            <li>• <strong>End-to-end timing:</strong> Adversary global com monitoramento completo</li>
            <li>• <strong>Sybil attack:</strong> Múltiplos nós maliciosos para deanonimização</li>
            <li>• <strong>Comprometimento do cliente:</strong> Malware no dispositivo do usuário</li>
          </ul>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="diagram-box danger text-left">
        <h4 className="font-semibold text-[var(--nexus-danger)] mb-2">⚠️ Aviso Importante</h4>
        <p className="text-sm text-[var(--nexus-text-muted)]">
          A NexusNet <strong className="text-white">não garante anonimato absoluto</strong>. Nenhum sistema de comunicação 
          pode fazê-lo. O que a NexusNet oferece é uma redução significativa da superfície de exposição 
          de metadados, tornando a deanonimização significativamente mais cara e complexa. 
          Um adversário com recursos suficientes (controle de múltiplos nós + monitoramento global) 
          ainda pode realizar ataques de correlação.
        </p>
      </div>
    </div>
  );
}
