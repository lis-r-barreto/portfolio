---
id: third-project
title: Automatização de Ciclo de Vida de Machine Learning com MLflow, DagsHub e GitHub Actions
---

Este projeto demonstra um fluxo completo de MLOps utilizando **MLflow**, **DagsHub**, **FastAPI**, **Docker** e **GitHub Actions**, aplicado a um experimento de classificação. Ele combina técnicas modernas de rastreamento de experimentos, contêinerização e automação de CI/CD para implantação contínua de modelos.

## Objetivo do Projeto

- Realizar experimentos de classificação com rastreamento completo usando **MLflow**.
- Integrar o rastreamento de artefatos e métricas com o **DagsHub**.
- Construir uma API com **FastAPI** para servir modelos treinados.
- Utilizar **Docker** para portabilidade e consistência no ambiente.
- Automatizar o pipeline de integração e entrega contínua com **GitHub Actions**.

## Componentes do Projeto

### **1. MLflow**
- Rastreamento de parâmetros, métricas e artefatos dos experimentos.
- Registro de modelos para facilitar a reutilização e a implantação.

### **2. DagsHub**
- Armazenamento e visualização centralizada de artefatos e logs de experimentos.
- Integração direta com MLflow para gerenciar o fluxo de experimentos.

### **3. FastAPI**
- API REST para servir modelos treinados.
- Endpoints para predição e consulta de informações sobre o modelo.

### **4. Docker**
- Contêinerização do ambiente de desenvolvimento e execução.
- Imagens para a API e os serviços auxiliares.

### **5. GitHub Actions**
- Automação do pipeline de CI/CD para:
  - Build e teste do ambiente.
  - Criação e publicação de imagens Docker.
  - Deploy automatizado para o ambiente desejado.

## Passo a Passo

1. **Clone o Repositório:**
   ```bash
   git clone https://github.com/lis-r-barreto/mlops-mlflow-classification-experiment.git
   cd mlops-mlflow-classification-experiment
   ```

2. **Inicie o Ambiente com Docker:**
   ```bash
   docker-compose up --build
   ```

3. **Acesse o MLflow:**
   O MLflow estará disponível localmente em `http://localhost:5000`. Use essa interface para rastrear experimentos.

4. **Integração com DagsHub:**
   - Configure o repositório no DagsHub.
   - Atualize as credenciais e os endpoints no arquivo de configuração `mlflow.conf`.

5. **Treine o Modelo:**
   Execute o script para treinar o modelo e rastrear experimentos:
   ```bash
   python train.py
   ```

6. **Teste a API com FastAPI:**
   A API estará disponível em `http://localhost:8000`. Use os endpoints para realizar predições:
   ```bash
   curl -X POST "http://localhost:8000/predict" -H "Content-Type: application/json" -d '{"data": [1.0, 2.0, 3.0]}'
   ```

7. **Automação com GitHub Actions:**
   - Adicione o seguinte workflow no repositório em `.github/workflows/ci-cd.yml`:

   ```yaml
   name: CI/CD Pipeline

   on:
     push:
       branches:
         - main

   jobs:
     build-and-test:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout code
           uses: actions/checkout@v3

         - name: Set up Python
           uses: actions/setup-python@v4
           with:
             python-version: '3.9'

         - name: Install dependencies
           run: |
             pip install -r requirements.txt

         - name: Run tests
           run: |
             pytest tests/

     build-and-push-docker:
       runs-on: ubuntu-latest
       needs: build-and-test
       steps:
         - name: Checkout code
           uses: actions/checkout@v3

         - name: Log in to DockerHub
           uses: docker/login-action@v2
           with:
             username: ${{ secrets.DOCKER_USERNAME }}
             password: ${{ secrets.DOCKER_PASSWORD }}

         - name: Build and push Docker image
           run: |
             docker build -t ${{ secrets.DOCKER_USERNAME }}/mlops-fastapi:latest .
             docker push ${{ secrets.DOCKER_USERNAME }}/mlops-fastapi:latest
   ```

   - Configure os segredos do repositório no GitHub:
     - `DOCKER_USERNAME`: Seu nome de usuário no DockerHub.
     - `DOCKER_PASSWORD`: Sua senha ou token de acesso do DockerHub.

## Estrutura do Repositório

- **`train.py`**: Script de treinamento que utiliza MLflow para rastreamento de experimentos.
- **`app/`**: Código da API FastAPI.
- **`Dockerfile` e `docker-compose.yml`**: Configurações para contêinerizar o ambiente.
- **`.github/workflows/ci-cd.yml`**: Configuração do pipeline de CI/CD.

## Tecnologias Utilizadas

- **MLflow**: Rastreamento de experimentos e registro de modelos.
- **DagsHub**: Gerenciamento de artefatos e métricas.
- **FastAPI**: API para servir modelos.
- **Docker**: Contêinerização para ambientes reprodutíveis.
- **GitHub Actions**: Automação do CI/CD.

## Resultados e Benefícios

- Rastreabilidade completa de experimentos e métricas.
- Implantação rápida de modelos com uma API robusta.
- Automação do pipeline de integração e entrega contínua.
- Ambiente totalmente contêinerizado, garantindo portabilidade.

## Referências

- [MLflow](https://mlflow.org/)
- [DagsHub](https://dagshub.com/)
- [FastAPI](https://fastapi.tiangolo.com/)
- [Docker](https://www.docker.com/)
- [GitHub Actions](https://github.com/features/actions)

Para mais detalhes e código completo, acesse o repositório no GitHub:

- [Repositório no GitHub](https://github.com/lis-r-barreto/mlops-mlflow-classification-experiment)
