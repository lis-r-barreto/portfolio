---
slug: full-system-update-script
title: Script de Atualização Completa do Sistema (GNU/Linux)
authors: [lis]
tags: [linux, shell-script, system-update]
description: Um guia passo a passo para criar um alias que automatiza o processo de atualização completa de sistemas baseados em GNU/Linux usando um shell script.
date: 2023-01-19
---


Manter um sistema GNU/Linux atualizado é uma das tarefas mais importantes para garantir segurança, estabilidade e desempenho. Este post apresenta um **shell script** que automatiza todo o processo de atualização, desde corrigir dependências quebradas até remover pacotes obsoletos.

Você pode encontrar o código completo do script no meu repositório no GitHub:  
[**update-shell-script**](https://github.com/lis-r-barreto/update-shell-script/blob/main/update.sh).

Este guia também aborda como configurar um alias no terminal, permitindo que você execute a atualização completa do sistema com um único comando.

<!--truncate-->

## O Script

Aqui está o código do script `update.sh`:

```bash
#!/bin/bash

GREEN="\033[1;32m"
NOCOLOR="\033[0m"

echo

echo -e "step 1: ${GREEN}pre-configuring packages${NOCOLOR}"
sudo dpkg --configure -a

echo

echo -e "step 2: ${GREEN}fix and attempt to correct a system with broken dependencies${NOCOLOR}"
sudo apt install -f

echo

echo -e "step 3: ${GREEN}update apt cache${NOCOLOR}"
sudo apt update

echo

echo -e "step 4: ${GREEN}upgrade packages${NOCOLOR}"
sudo apt upgrade

echo

echo -e "step 5: ${GREEN}distribution upgrade${NOCOLOR}"
sudo apt dist-upgrade

echo

echo -e "step 6: ${GREEN}remove unused packages${NOCOLOR}"
sudo apt autoremove

echo

echo -e "step 7: ${GREEN}clean up${NOCOLOR}"
sudo apt autoclean

echo
```

Este script realiza as seguintes tarefas:
1. Pré-configura pacotes.
2. Corrige dependências quebradas.
3. Atualiza o cache de pacotes.
4. Atualiza os pacotes instalados.
5. Realiza uma atualização de distribuição.
6. Remove pacotes não utilizados.
7. Limpa os arquivos de pacotes antigos.

---

## Instruções de Configuração

### Passo 1: Salvar o Script
1. Clone ou copie o código do script.
2. Salve-o em um arquivo chamado `update.sh` no diretório de sua preferência.

### Passo 2: Configurar Permissão de Execução
1. Abra o terminal e vá até o diretório onde está o script.
2. Execute o comando abaixo para conceder permissão de execução ao script:
   ```bash
   sudo chmod +x <path>/update.sh
   ```

   Substitua `<path>` pelo caminho completo do arquivo.

### Passo 3: Criar um Alias no `.bashrc`
1. Edite o arquivo `.bashrc` para criar um alias:
   ```bash
   nano ~/.bashrc
   ```
2. Adicione a seguinte linha ao final do arquivo:
   ```bash
   alias update='<path>/update.sh'
   ```

   Certifique-se de substituir `<path>` pelo caminho completo do script.

### Passo 4: Aplicar Alterações no Terminal
1. Feche e reabra o terminal.
2. Para garantir que as alterações no `.bashrc` sejam aplicadas imediatamente, você pode executar:
   ```bash
   source ~/.bashrc
   ```

### Passo 5: Executar o Script
Agora você pode executar o script com o comando:
```bash
update
```

Este comando executará todos os passos necessários para atualizar completamente seu sistema.

---

## Conclusão

Com este script, você automatiza a atualização e manutenção do sistema em distribuições baseadas em GNU/Linux. Ele economiza tempo e reduz o risco de esquecer etapas importantes no processo.

Se tiver dúvidas ou sugestões, sinta-se à vontade para compartilhar! 🚀
