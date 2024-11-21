---
id: second-project
title: Configuração de um Cluster Kubernetes com k3s, k3d e Portainer
---

Este projeto demonstra como configurar um cluster Kubernetes local utilizando **k3s**, **k3d** e gerenciar visualmente os recursos com o **Portainer**. É uma abordagem prática para explorar a orquestração de contêineres em um ambiente controlado.

## Objetivo do Projeto

- Configurar um cluster Kubernetes local usando **k3s** e **k3d**.
- Implementar o **Portainer** para gerenciar visualmente recursos e workloads.
- Demonstrar o uso de manifestos YAML para automação da configuração.

## Manifestos Incluídos

1. **Namespace:**
   - Criação do namespace `portainer` para isolar recursos do Portainer.

2. **ServiceAccount e RBAC:**
   - O `ServiceAccount` `portainer-sa-clusteradmin` é configurado com permissões de administrador do cluster.

3. **PersistentVolumeClaim (PVC):**
   - PVC `portainer` para persistência de dados do Portainer.

4. **Service:**
   - Serviço `portainer` configurado como NodePort, expondo o Portainer externamente.

5. **Deployment:**
   - Deployment `portainer` configurado para gerenciar a implantação e escalabilidade.

## Como Usar

1. **Crie o cluster com k3d:**
   ```bash
   k3d cluster create portainer-cluster
   ```

2. **Aplique os manifestos para deploy do Portainer:**
   ```bash
   kubectl apply -f manifests/
   ```

3. **Obtenha o IP do cluster:**
   ```bash
   k3d node list
   ```
   Anote o IP associado ao seu nó (normalmente `localhost`).

4. **Acesse o Portainer:**
   Abra o navegador e acesse [http://localhost:30777](http://localhost:30777).

   > **Nota:** A porta 30777 foi configurada no manifesto `service.yaml`.

5. **Configuração Inicial do Portainer:**
   - Acesse o Portainer e siga o assistente de configuração.
   - **Credenciais padrão:**
     - Usuário: `admin`
     - Senha: `admin` (ou a senha configurada).

6. **Verificação:**
   - Após a configuração, gerencie visualmente seu cluster Kubernetes através do Portainer.

## Encerrando o Cluster

Para encerrar o cluster, execute:

```bash
k3d cluster delete portainer-cluster
```

Isso removerá o cluster local e liberará os recursos utilizados.

## Tecnologias Utilizadas

- **k3s**: Kubernetes leve, otimizado para dispositivos com recursos limitados.
- **k3d**: Ferramenta para executar clusters Kubernetes em contêineres Docker.
- **Portainer**: Interface gráfica para gerenciamento de contêineres e clusters Kubernetes.

## Referências

- [kubectl](https://kubernetes.io/)
- [Portainer](https://www.portainer.io/)
- [k3d](https://k3d.io/)

Para mais detalhes e o código completo, visite o repositório no GitHub:

- [Repositório no GitHub](https://github.com/lis-r-barreto/portainer-on-k8s)
