---
slug: data-architecture-differences
title: Data Warehouse, Data Lake e Data Lakehouse - Conceitos e Diferenças
authors: [lis]
tags: [big data]
---

## **Data Warehouses**

Os **data warehouses** têm alimentado as decisões de Business Intelligence (BI) por cerca de 30 anos. Ao longo da história, as tecnologias de data warehouse evoluíram em resposta às mudanças na escala e na natureza dos dados relevantes para os tomadores de decisão e ao surgimento da internet e outras inovações tecnológicas.

<!--truncate-->

Os data warehouses geralmente seguem um conjunto de diretrizes para projetar sistemas que controlam o fluxo de dados usados ​​na tomada de decisões. Eles são projetados para otimizar as consultas de dados, evitar conflitos entre consultas em execução simultânea, oferecer suporte a dados estruturados e fazer a suposição de que os dados inseridos provavelmente não serão alterados frequentemente.

Como os data warehouses foram originalmente desenvolvidos usando tecnologia local para orientar as decisões de BI, eles tiveram alguns pontos fracos na adaptação à atmosfera de dados moderna. A proliferação de dispositivos inteligentes e comércio baseado na web aumentou o volume e a variedade de dados. Os armazéns de dados tradicionalmente dependem de formatos de dados proprietários, que não oferecem suporte a arquivos de vídeo, imagem ou texto livre. Isso leva a um suporte limitado para cargas de trabalho de aprendizado de máquina.

As tecnologias tradicionais de data warehouse forçam os usuários a investir em capacidade de computação e armazenamento suficientes para lidar com o pico de tráfego de usuários. Com o crescimento exponencial que muitas empresas observaram em seus dados nos últimos anos, esse design pode se tornar extremamente caro.



![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wrkv9rw6fkvfnaows5qz.jpg)

Figura 1.1. Diagrama de um data warehouse
Fonte: Databricks Academy 

## **Data Lakes**

Os **data lakes** só passaram a ser amplamente utilizados na última década, impulsionados por enormes aumentos na variedade e no volume de dados e impulsionados por avanços tecnológicos para armazenar e processar dados de maneira econômica e eficiente. Data lakes são frequentemente definidos em oposição a data warehouses: enquanto um data warehouse fornece dados limpos e estruturados para análises de BI, um data lake permite que uma organização armazene dados de qualquer natureza de forma permanente e econômica em qualquer formato - na verdade, os data lakes permitem ambos dados estruturados e semiestruturados a serem armazenados junto com dados não estruturados, como vídeo, imagens, texto livre e arquivos de log.

Ao contrário dos data warehouses, o armazenamento de dados e a computação não são acoplados no design do data lake. Isso levou a várias tecnologias que evoluíram em torno do trabalho com dados armazenados em data lakes. O Apache Spark, por exemplo, o mecanismo de computação usado pelo Databricks, pode executar consultas analíticas, extrair-transformar-carregar e cargas de trabalho de aprendizado de máquina sobre enormes quantidades de dados armazenados em data lakes.

Apesar de todos os seus pontos fortes, os data lakes não eliminaram a necessidade de data warehouses. Para análises de BI, a maioria das empresas continua a carregar os dados relevantes de seu data lake em um data warehouse, e é aqui que a maioria dos analistas executa consultas e gera relatórios. Além disso, como todos os dados de uma organização chegam a um lago de dados, eles podem rapidamente se tornar o que é conhecido como um pântano de dados - um lago de dados mal mantido que é difícil de navegar e consultar.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/n1zwtl54lyya0f6zgo69.jpg)

Figura 1.2. Diagrama de um data lake
Fonte: Databricks Academy 

## Data Lakehouse

Um data lakehouse é um novo paradigma de gerenciamento de dados aberto que combina os recursos mais populares de data lakes e data warehouses. De acordo com seu projeto, eles implementam estruturas de dados e recursos de gerenciamento de dados semelhantes aos de um data warehouse, diretamente no tipo de armazenamento de baixo custo usado para data lakes. Mesclar essas ideias em um único sistema significa que as equipes de dados podem se mover mais rapidamente, pois podem usar os dados sem acessar vários sistemas. Data lakehouses também garantem que as equipes tenham os dados mais completos e atualizados disponíveis para projetos de ciência de dados, aprendizado de máquina e análise de negócios.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/o0yxf14bm2pys89rq9pq.png)

Figura 1.3. Diagrama de um data lakehouse
Fonte: Databricks Academy 

## Referências
[Fundamentals of the Databricks Lakehouse Platform](https://academy.databricks.com/elearning/INT-FODBLP-v1-SP)