export function StackSection() {
  return (
    <div>
      <h2 className="section-title">15. Stack Tecnológica</h2>
      <p className="text-[var(--nexus-text-muted)] mb-6">
        Stack moderna com justificativa para cada escolha, priorizando segurança, desempenho e auditabilidade.
      </p>

      {/* Stack Table */}
      <div className="overflow-x-auto mb-8">
        <table className="threat-table">
          <thead>
            <tr>
              <th>Componente</th>
              <th>Tecnologia</th>
              <th>Justificativa</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Nó NexusNet (core)</strong></td>
              <td><span className="text-[var(--nexus-primary)]">Rust</span></td>
              <td className="text-xs">Memory safety sem GC, performance nativa, excelente para networking e criptografia. Ecossistema maduro (tokio, libsodium-bindings).</td>
            </tr>
            <tr>
              <td><strong>Protocolo de rede</strong></td>
              <td><span className="text-[var(--nexus-primary)]">Rust + tokio</span></td>
              <td className="text-xs">Async runtime performático, seguro contra data races, ideal para I/O intensivo.</td>
            </tr>
            <tr>
              <td><strong>Criptografia</strong></td>
              <td><span className="text-[var(--nexus-primary)]">libsodium (via sodiumoxide)</span></td>
              <td className="text-xs">API simples, auditada, resistente a side-channel. Inclui Ed25519, X25519, ChaCha20-Poly1305.</td>
            </tr>
            <tr>
              <td><strong>Handshake</strong></td>
              <td><span className="text-[var(--nexus-primary)]">snow (Noise Protocol)</span></td>
              <td className="text-xs">Implementação Rust do Noise Protocol Framework. Formalmente verificado, composável.</td>
            </tr>
            <tr>
              <td><strong>NexusBrowser</strong></td>
              <td><span className="text-[var(--nexus-secondary)]">TypeScript + Electron/Tauri</span></td>
              <td className="text-xs">Tauri preferido (Rust backend, menor footprint). TypeScript para UI. WebView nativo.</td>
            </tr>
            <tr>
              <td><strong>UI do Browser</strong></td>
              <td><span className="text-[var(--nexus-secondary)]">React + TypeScript</span></td>
              <td className="text-xs">Ecossistema maduro, componentes reutilizáveis, type safety.</td>
            </tr>
            <tr>
              <td><strong>NexusSearch (indexer)</strong></td>
              <td><span className="text-[var(--nexus-primary)]">Rust</span></td>
              <td className="text-xs">Performance para indexação em larga escala, processamento de texto eficiente.</td>
            </tr>
            <tr>
              <td><strong>Ferramentas auxiliares</strong></td>
              <td><span className="text-[var(--nexus-accent)]">Python</span></td>
              <td className="text-xs">Scripts de automação, análise, benchmarking, prototipagem rápida.</td>
            </tr>
            <tr>
              <td><strong>Infraestrutura</strong></td>
              <td><span className="text-[var(--nexus-warning)]">Docker + Docker Compose</span></td>
              <td className="text-xs">Reprodutibilidade, isolamento, fácil deployment de nós.</td>
            </tr>
            <tr>
              <td><strong>CI/CD</strong></td>
              <td><span className="text-[var(--nexus-warning)]">GitHub Actions</span></td>
              <td className="text-xs">Build multi-plataforma, testes automatizados, releases automáticos.</td>
            </tr>
            <tr>
              <td><strong>Testes</strong></td>
              <td><span className="text-[var(--nexus-primary)]">cargo test + property-based</span></td>
              <td className="text-xs">Testes unitários, integração, e property-based testing (proptest) para criptografia.</td>
            </tr>
            <tr>
              <td><strong>Observabilidade</strong></td>
              <td><span className="text-[var(--nexus-primary)]">tracing + OpenTelemetry</span></td>
              <td className="text-xs">Logs estruturados, métricas, distributed tracing. Sem expor dados sensíveis.</td>
            </tr>
            <tr>
              <td><strong>Hashing</strong></td>
              <td><span className="text-[var(--nexus-primary)]">BLAKE3</span></td>
              <td className="text-xs">Mais rápido que SHA-256, seguro, verificável. Ideal para content-addressing.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Dependency Justification */}
      <h3 className="text-xl font-bold text-white mb-4">Dependências Críticas — Justificativa</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="diagram-box text-left">
          <h4 className="font-semibold text-[var(--nexus-primary)] mb-2">🦀 Rust (Core)</h4>
          <ul className="text-xs text-[var(--nexus-text-muted)] space-y-1">
            <li>• <strong>Memory safety:</strong> Sem buffer overflows, use-after-free</li>
            <li>• <strong>Zero-cost abstractions:</strong> Performance de C com segurança</li>
            <li>• <strong>Concurrency safety:</strong> Data races impossíveis em safe Rust</li>
            <li>• <strong>Ecosystem:</strong> tokio, serde, sodiumoxide, snow</li>
            <li>• <strong>Auditability:</strong> Código legível, sem comportamento implícito</li>
          </ul>
        </div>
        <div className="diagram-box text-left">
          <h4 className="font-semibold text-[var(--nexus-secondary)] mb-2">📘 TypeScript (Interface)</h4>
          <ul className="text-xs text-[var(--nexus-text-muted)] space-y-1">
            <li>• <strong>Type safety:</strong> Erros detectados em compile-time</li>
            <li>• <strong>Ecossistema:</strong> React, Tauri, vasta comunidade</li>
            <li>• <strong>Produtividade:</strong> Desenvolvimento rápido de UI</li>
            <li>• <strong>Isolamento:</strong> UI não tem acesso direto a primitivas críticas</li>
            <li>• <strong>Bridge segura:</strong> Comunicação com backend Rust via IPC tipado</li>
          </ul>
        </div>
        <div className="diagram-box text-left">
          <h4 className="font-semibold text-[var(--nexus-accent)] mb-2">🐍 Python (Ferramentas)</h4>
          <ul className="text-xs text-[var(--nexus-text-muted)] space-y-1">
            <li>• <strong>Prototipagem:</strong> Rápido para scripts e análise</li>
            <li>• <strong>Data science:</strong> Análise de tráfego, benchmarks</li>
            <li>• <strong>Automação:</strong> Deploy, monitoramento, testes E2E</li>
            <li>• <strong>Não é usado em código crítico:</strong> Apenas ferramentas auxiliares</li>
          </ul>
        </div>
        <div className="diagram-box text-left">
          <h4 className="font-semibold text-[var(--nexus-warning)] mb-2">🐳 Docker (Infra)</h4>
          <ul className="text-xs text-[var(--nexus-text-muted)] space-y-1">
            <li>• <strong>Reprodutibilidade:</strong> Mesmo ambiente em qualquer máquina</li>
            <li>• <strong>Isolamento:</strong> Nós rodam em containers separados</li>
            <li>• <strong>Facilidade:</strong> docker-compose up para rede de teste</li>
            <li>• <strong>CI/CD:</strong> Builds consistentes</li>
          </ul>
        </div>
      </div>

      {/* Future Considerations */}
      <h3 className="text-xl font-bold text-white mb-4">Considerações Futuras</h3>
      <div className="diagram-box text-left">
        <ul className="text-sm text-[var(--nexus-text-muted)] space-y-2">
          <li><strong className="text-white">Post-quantum cryptography:</strong> Avaliar migração para algoritmos resistentes a computação quântica (Kyber, Dilithium) quando maduros.</li>
          <li><strong className="text-white">WASM para portabilidade:</strong> Componentes do protocolo compilados para WebAssembly permitem uso em browsers convencionais como fallback.</li>
          <li><strong className="text-white">Hardware acceleration:</strong> Avaliar uso de AES-NI, AVX para operações criptográficas quando disponível.</li>
          <li><strong className="text-white">Formal verification:</strong> Verificação formal do protocolo de handshake e propriedades de segurança usando ferramentas como ProVerif.</li>
          <li><strong className="text-white">Mobile support:</strong> Avaliar implementação em Swift/Kotlin para apps nativos móveis.</li>
        </ul>
      </div>
    </div>
  );
}
