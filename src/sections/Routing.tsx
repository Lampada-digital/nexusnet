export function RoutingSection() {
  return (
    <div>
      <h2 className="section-title">4. Roteamento Orientado à Privacidade</h2>
      <p className="text-[var(--nexus-text-muted)] mb-6">
        O sistema de roteamento da NexusNet utiliza <strong className="text-white">circuitos multi-salto com criptografia em camadas (onion routing)</strong>, 
        garantindo que nenhum nó individual conheça simultaneamente origem e destino da comunicação.
      </p>

      {/* Routing Architecture */}
      <div className="gradient-border mb-8">
        <div className="gradient-border-inner">
          <h3 className="text-sm font-semibold text-[var(--nexus-primary)] mb-4 uppercase tracking-wider">Arquitetura de Roteamento</h3>
          <div className="flex flex-col items-center gap-2">
            <div className="diagram-box w-full max-w-lg">
              <div className="font-semibold text-sm">Cliente (Origem)</div>
              <div className="text-xs text-[var(--nexus-text-muted)]">Conhece: destino final + todos os nós do circuito</div>
            </div>
            <div className="connector" />
            <div className="diagram-box secondary w-full max-w-lg">
              <div className="font-semibold text-sm">Guard Node (Nó de Entrada)</div>
              <div className="text-xs text-[var(--nexus-text-muted)]">Conhece: origem (IP) + próximo nó | NÃO conhece destino</div>
            </div>
            <div className="connector" />
            <div className="diagram-box secondary w-full max-w-lg">
              <div className="font-semibold text-sm">Middle Relay (Nó Intermediário)</div>
              <div className="text-xs text-[var(--nexus-text-muted)]">Conhece: nó anterior + próximo nó | NÃO conhece origem nem destino</div>
            </div>
            <div className="connector" />
            <div className="diagram-box secondary w-full max-w-lg">
              <div className="font-semibold text-sm">Exit Node (Nó de Saída)</div>
              <div className="text-xs text-[var(--nexus-text-muted)]">Conhece: destino + nó anterior | NÃO conhece origem real</div>
            </div>
            <div className="connector" />
            <div className="diagram-box accent w-full max-w-lg">
              <div className="font-semibold text-sm">Serviço de Destino</div>
              <div className="text-xs text-[var(--nexus-text-muted)]">Conhece: último nó do circuito | NÃO conhece origem real</div>
            </div>
          </div>
        </div>
      </div>

      {/* Information per Component */}
      <h3 className="text-xl font-bold text-white mb-4">Informação por Componente</h3>
      <div className="overflow-x-auto mb-8">
        <table className="threat-table">
          <thead>
            <tr>
              <th>Componente</th>
              <th>Conhece Origem?</th>
              <th>Conhece Destino?</th>
              <th>Conhece Conteúdo?</th>
              <th>Conhece Circuito Completo?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cliente</td>
              <td className="text-[var(--nexus-accent)]">✓ Sim</td>
              <td className="text-[var(--nexus-accent)]">✓ Sim</td>
              <td className="text-[var(--nexus-accent)]">✓ Sim</td>
              <td className="text-[var(--nexus-accent)]">✓ Sim</td>
            </tr>
            <tr>
              <td>Guard Node</td>
              <td className="text-[var(--nexus-accent)]">✓ Sim (IP)</td>
              <td className="text-[var(--nexus-danger)]">✗ Não</td>
              <td className="text-[var(--nexus-danger)]">✗ Não</td>
              <td className="text-[var(--nexus-danger)]">✗ Não</td>
            </tr>
            <tr>
              <td>Middle Relay</td>
              <td className="text-[var(--nexus-danger)]">✗ Não</td>
              <td className="text-[var(--nexus-danger)]">✗ Não</td>
              <td className="text-[var(--nexus-danger)]">✗ Não</td>
              <td className="text-[var(--nexus-danger)]">✗ Não</td>
            </tr>
            <tr>
              <td>Exit Node</td>
              <td className="text-[var(--nexus-danger)]">✗ Não</td>
              <td className="text-[var(--nexus-accent)]">✓ Sim (endereço nx://)</td>
              <td className="text-[var(--nexus-danger)]">✗ Não (cifrado E2E)</td>
              <td className="text-[var(--nexus-danger)]">✗ Não</td>
            </tr>
            <tr>
              <td>Serviço</td>
              <td className="text-[var(--nexus-danger)]">✗ Não</td>
              <td className="text-[var(--nexus-accent)]">✓ Sim (si mesmo)</td>
              <td className="text-[var(--nexus-accent)]">✓ Sim (após decriptar E2E)</td>
              <td className="text-[var(--nexus-danger)]">✗ Não</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Onion Encryption */}
      <h3 className="text-xl font-bold text-white mb-4">Criptografia em Camadas (Onion)</h3>
      <div className="code-block mb-8">
        <span className="comment">/* Construção do pacote onion */</span>
        <br /><br />
        <span className="comment">// O cliente constrói o pacote de dentro para fora:</span>
        <br /><br />
        <span className="comment">// Camada 3 (para o exit node):</span>
        <br />
        L3 = encrypt_K3({'{'} dest: service_addr, payload {'}'})
        <br /><br />
        <span className="comment">// Camada 2 (para o middle relay):</span>
        <br />
        L2 = encrypt_K2({'{'} next: exit_node_addr, data: L3 {'}'})
        <br /><br />
        <span className="comment">// Camada 1 (para o guard node):</span>
        <br />
        L1 = encrypt_K1({'{'} next: middle_addr, data: L2 {'}'})
        <br /><br />
        <span className="comment">// Pacote final enviado ao guard node:</span>
        <br />
        <span className="keyword">Packet</span> = {'{'} circuit_id, L1 {'}'}
        <br /><br />
        <span className="comment">/* Cada nó remove uma camada e encaminha */</span>
        <br />
        <span className="comment">/* K1, K2, K3 são chaves compartilhadas via Diffie-Hellman */</span>
      </div>

      {/* Circuit Management */}
      <h3 className="text-xl font-bold text-white mb-4">Gestão de Circuitos</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="diagram-box text-left">
          <h4 className="font-semibold text-[var(--nexus-primary)] mb-2">🔄 Rotação de Circuitos</h4>
          <ul className="text-xs text-[var(--nexus-text-muted)] space-y-1">
            <li>• Circuitos novos a cada 10 minutos (configurável)</li>
            <li>• Rotação imediata ao detectar anomalias</li>
            <li>• Múltiplos circuitos paralelos para diferentes destinos</li>
            <li>• Pré-construção de circuitos para reduzir latência</li>
          </ul>
        </div>
        <div className="diagram-box text-left">
          <h4 className="font-semibold text-[var(--nexus-primary)] mb-2">🎯 Seleção de Nós</h4>
          <ul className="text-xs text-[var(--nexus-text-muted)] space-y-1">
            <li>• Guard nodes: estáveis, longa duração (reduz exposição)</li>
            <li>• Middle relays: rotativos, alta diversidade</li>
            <li>• Exit nodes: verificados, reputação alta</li>
            <li>• Exclusão de nós na mesma AS ou país</li>
            <li>• Balanceamento por capacidade e latência</li>
          </ul>
        </div>
      </div>

      {/* Malicious Node Resistance */}
      <h3 className="text-xl font-bold text-white mb-4">Resistência a Nós Maliciosos</h3>
      <div className="space-y-4 mb-8">
        <div className="diagram-box text-left">
          <h4 className="font-semibold text-[var(--nexus-danger)] mb-2">Detecção de Comportamento Anômalo</h4>
          <ul className="text-sm text-[var(--nexus-text-muted)] space-y-1">
            <li><strong className="text-white">Path Validation:</strong> Test probes enviados através de caminhos conhecidos para verificar integridade.</li>
            <li><strong className="text-white">Consensus-based Reputation:</strong> Nós reportam comportamento suspeito de outros nós. Reputação é calculada de forma distribuída.</li>
            <li><strong className="text-white">Bandwidth Anomaly Detection:</strong> Desvios significativos no padrão de tráfego são sinalizados.</li>
            <li><strong className="text-white">Timing Analysis Resistance:</strong> Padding de pacotes e delays aleatórios para dificultar correlação temporal.</li>
          </ul>
        </div>
        <div className="diagram-box text-left">
          <h4 className="font-semibold text-[var(--nexus-warning)] mb-2">Separação de Funções</h4>
          <p className="text-sm text-[var(--nexus-text-muted)]">
            Um nó não pode ser simultaneamente guard node e exit node para o mesmo circuito. 
            A seleção garante diversidade geográfica e administrativa. Nós que tentam ocupar 
            múltiplas posições no circuito são detectados e excluídos.
          </p>
        </div>
      </div>

      {/* Protocol Specification */}
      <h3 className="text-xl font-bold text-white mb-4">Especificação do Pacote de Roteamento</h3>
      <div className="code-block">
        <span className="comment">/* NexusNet Routing Packet Format */</span>
        <br /><br />
        <span className="keyword">struct</span> <span className="type">RoutingPacket</span> {'{'}
        <br />
        {'  '}version: u8,              <span className="comment">// 0x01</span>
        <br />
        {'  '}circuit_id: [u8; 16],     <span className="comment">// Identificador do circuito</span>
        <br />
        {'  '}hop_count: u8,            <span className="comment">// Contador de saltos (previne loops)</span>
        <br />
        {'  '}max_hops: u8,             <span className="comment">// Limite máximo (tipicamente 3-5)</span>
        <br />
        {'  '}padding_length: u16,      <span className="comment">// Tamanho do padding (variável)</span>
        <br />
        {'  '}encrypted_payload: Vec&lt;u8&gt;, <span className="comment">// Camada onion cifrada</span>
        <br />
        {'  '}mac: [u8; 32],            <span className="comment">// MAC da camada atual</span>
        <br />
        {'  '}padding: Vec&lt;u8&gt;,         <span className="comment">// Padding para uniformizar tamanhos</span>
        <br />
        {'}'}
        <br /><br />
        <span className="comment">/* Tamanho fixo: 512 bytes (padding adicionado para uniformizar) */</span>
      </div>
    </div>
  );
}
