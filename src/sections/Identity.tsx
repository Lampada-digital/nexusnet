export function IdentitySection() {
  return (
    <div>
      <h2 className="section-title">3. Identidade Criptográfica</h2>
      <p className="text-[var(--nexus-text-muted)] mb-6">
        Cada usuário, nó e serviço na NexusNet possui uma identidade criptográfica baseada em 
        <strong className="text-white"> pares de chaves assimétricas</strong>. Não utilizamos algoritmos próprios — 
        apenas primitivas consolidadas e auditadas.
      </p>

      {/* Identity Structure */}
      <div className="gradient-border mb-8">
        <div className="gradient-border-inner">
          <h3 className="text-sm font-semibold text-[var(--nexus-primary)] mb-4 uppercase tracking-wider">Estrutura da Identidade</h3>
          <div className="flex flex-col items-center gap-3">
            <div className="diagram-box primary w-full max-w-sm">
              <div className="font-bold text-[var(--nexus-primary)]">Identidade NexusNet</div>
            </div>
            <div className="connector" />
            <div className="flex flex-wrap justify-center gap-4 w-full">
              <div className="diagram-box flex-1 min-w-[150px]">
                <div className="text-xs text-[var(--nexus-text-muted)]">Chave Pública</div>
                <div className="font-mono text-xs text-[var(--nexus-accent)]">Ed25519</div>
                <div className="text-xs text-[var(--nexus-text-muted)] mt-1">Autenticação, Verificação</div>
              </div>
              <div className="diagram-box flex-1 min-w-[150px]">
                <div className="text-xs text-[var(--nexus-text-muted)]">Chave Privada</div>
                <div className="font-mono text-xs text-[var(--nexus-danger)]">Ed25519</div>
                <div className="text-xs text-[var(--nexus-text-muted)] mt-1">Assinatura, Decifração</div>
              </div>
              <div className="diagram-box flex-1 min-w-[150px]">
                <div className="text-xs text-[var(--nexus-text-muted)]">Chave de Troca</div>
                <div className="font-mono text-xs text-[var(--nexus-secondary)]">X25519</div>
                <div className="text-xs text-[var(--nexus-text-muted)] mt-1">Negociação de sessões</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cryptographic Primitives */}
      <h3 className="text-xl font-bold text-white mb-4">Primitivas Criptográficas</h3>
      <div className="overflow-x-auto mb-8">
        <table className="threat-table">
          <thead>
            <tr>
              <th>Função</th>
              <th>Algoritmo</th>
              <th>Biblioteca</th>
              <th>Justificativa</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Assinatura digital</td>
              <td>Ed25519</td>
              <td>libsodium / ring</td>
              <td>Rápido, seguro, resistente a ataques de canal lateral</td>
            </tr>
            <tr>
              <td>Troca de chaves</td>
              <td>X25519</td>
              <td>libsodium / ring</td>
              <td>Curve25519, amplamente auditado</td>
            </tr>
            <tr>
              <td>Criptografia simétrica</td>
              <td>ChaCha20-Poly1305</td>
              <td>libsodium</td>
              <td>AEAD, rápido em software, sem dependência de AES-NI</td>
            </tr>
            <tr>
              <td>Hash</td>
              <td>SHA-256 / BLAKE3</td>
              <td>ring / blake3</td>
              <td>Resistência a colisões, desempenho</td>
            </tr>
            <tr>
              <td>KDF</td>
              <td>Argon2id</td>
              <td>libsodium</td>
              <td>Resistente a GPU/ASIC, winner do PHC</td>
            </tr>
            <tr>
              <td>RNG</td>
              <td>getrandom / ChaCha20</td>
              <td>Sistema operacional</td>
              <td>Fonte de entropia do SO</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Identity Lifecycle */}
      <h3 className="text-xl font-bold text-white mb-4">Ciclo de Vida da Identidade</h3>
      <div className="space-y-4 mb-8">
        <div className="diagram-box text-left">
          <h4 className="font-semibold text-[var(--nexus-accent)] mb-2">1. Criação</h4>
          <div className="code-block text-xs">
            <span className="comment">// Geração de identidade</span>
            <br />
            <span className="keyword">let</span> signing_keypair = ed25519::generate_keypair();
            <br />
            <span className="keyword">let</span> exchange_keypair = x25519::generate_keypair();
            <br />
            <span className="keyword">let</span> revocation_key = ed25519::generate_keypair();
            <br /><br />
            <span className="comment">// Identificador = SHA-256(signing_public_key)</span>
            <br />
            <span className="keyword">let</span> identity_hash = sha256(signing_keypair.public);
            <br /><br />
            <span className="comment">// Endereço NexusNet</span>
            <br />
            <span className="keyword">let</span> address = NexusAddress::new(
            <br />
            {'  '}version: 0x01,
            <br />
            {'  '}key_type: KeyType::Ed25519,
            <br />
            {'  '}identity_hash,
            <br />);
          </div>
        </div>

        <div className="diagram-box text-left">
          <h4 className="font-semibold text-[var(--nexus-primary)] mb-2">2. Autenticação</h4>
          <p className="text-sm text-[var(--nexus-text-muted)]">
            Cada comunicação é autenticada via assinatura digital. O protocolo de handshake 
            estabelece uma sessão criptografada com verificação mútua de identidades.
          </p>
          <div className="code-block text-xs mt-2">
            <span className="comment">// Handshake simplificado (Noise IK pattern)</span>
            <br />
            → Client: ephemeral_pub, encrypted(identity, sig(nonce))
            <br />
            ← Server: ephemeral_pub, encrypted(identity, sig(nonce), payload)
            <br /><br />
            <span className="comment">// Após handshake: sessão com forward secrecy</span>
          </div>
        </div>

        <div className="diagram-box text-left">
          <h4 className="font-semibold text-[var(--nexus-secondary)] mb-2">3. Rotação</h4>
          <p className="text-sm text-[var(--nexus-text-muted)]">
            Chaves de operação podem ser rotacionadas periodicamente. A identidade base 
            (identity_hash) permanece estável. Um certificado de rotação assinado é publicado.
          </p>
        </div>

        <div className="diagram-box text-left">
          <h4 className="font-semibold text-[var(--nexus-warning)] mb-2">4. Recuperação</h4>
          <p className="text-sm text-[var(--nexus-text-muted)]">
            Utiliza Shamir's Secret Sharing para dividir a chave de recuperação em múltiplas partes. 
            Alternativamente, uma frase de recuperação (BIP39-like) pode ser gerada.
          </p>
        </div>
      </div>

      {/* Secure Storage */}
      <h3 className="text-xl font-bold text-white mb-4">Armazenamento Seguro de Chaves</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="diagram-box text-left">
          <h4 className="font-semibold text-[var(--nexus-accent)] mb-2">No Cliente</h4>
          <ul className="text-xs text-[var(--nexus-text-muted)] space-y-1">
            <li>• Chave privada cifrada com Argon2id + chave derivada de senha</li>
            <li>• Armazenamento em memória protegida (mlock)</li>
            <li>• Integração com keystore do SO (Keychain, Keystore)</li>
            <li>• Limpeza segura de memória ao desligar</li>
            <li>• Opção de hardware token (FIDO2/YubiKey)</li>
          </ul>
        </div>
        <div className="diagram-box text-left">
          <h4 className="font-semibold text-[var(--nexus-accent)] mb-2">No Nó (Servidor)</h4>
          <ul className="text-xs text-[var(--nexus-text-muted)] space-y-1">
            <li>• Chaves em HSM ou enclave seguro (SGX/TrustZone)</li>
            <li>• Rotação automática periódica</li>
            <li>• Auditoria de acesso às chaves</li>
            <li>• Separação entre chave de assinatura e chave de troca</li>
            <li>• Backup cifrado com threshold scheme</li>
          </ul>
        </div>
      </div>

      {/* Protection Against Credential Theft */}
      <h3 className="text-xl font-bold text-white mb-4">Proteção contra Roubo de Credenciais</h3>
      <div className="diagram-box text-left">
        <ul className="text-sm text-[var(--nexus-text-muted)] space-y-2">
          <li><strong className="text-white">Forward Secrecy:</strong> Cada sessão usa chaves efêmeras. Comprometimento de uma sessão não afeta sessões anteriores.</li>
          <li><strong className="text-white">Post-Compromise Security:</strong> Protocolo de ratchet permite recuperação automática após comprometimento.</li>
          <li><strong className="text-white">Detecção de Uso Anômalo:</strong> Assinaturas de localização/tempo podem detectar uso de chave em contexto suspeito.</li>
          <li><strong className="text-white">Revogação Rápida:</strong> Chave de revogação pré-gerada permite invalidar identidade em minutos.</li>
          <li><strong className="text-white">Limitação de Escopo:</strong> Sub-chaves com permissões específicas limitam dano em caso de roubo parcial.</li>
        </ul>
      </div>
    </div>
  );
}
