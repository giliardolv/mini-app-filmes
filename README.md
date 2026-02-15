# 🎬 Mini App de Filmes

Aplicação web responsiva para busca e visualização de filmes com integração a APIs externas, desenvolvida com foco em organização de código, fluxo assíncrono e experiência **Mobile First**.

O projeto explora comunicação entre múltiplos serviços externos, tratamento de requisições assíncronas e boas práticas de separação entre camada de dados (API) e camada de apresentação (UI).

---

## 🌐 Demonstração

Acesse o projeto online:  
👉 https://giliardolv.github.io/mini-app-filmes/

---

## 🚀 Funcionalidades

- 🔎 Busca de filmes por nome
- 🌍 Tradução automática do termo pesquisado
- 🎥 Exibição de lista com poster, título e ano
- 📄 Modal com detalhes completos do filme
- 📱 Layout Mobile First
- ⬅️ Integração com botão "voltar" do navegador
- ⌨️ Fechamento do modal com tecla ESC

---

## 🌍 Por que utilizar uma API de tradução?

A API do OMDb apresenta resultados mais consistentes quando a busca é realizada em inglês.

Como o usuário pode digitar o nome do filme em português, foi integrada a **MyMemory Translation API** para traduzir automaticamente o termo antes de enviá-lo para a OMDb.

### 🔎 Fluxo da busca

1. Usuário digita o nome do filme (ex: "A Casa de Cera")
2. O termo é enviado para a API de tradução
3. O resultado traduzido é utilizado na requisição à OMDb
4. Os filmes encontrados são renderizados na interface

Essa decisão foi tomada para melhorar:

- 🎯 Precisão nos resultados
- 👤 Experiência do usuário
- 🌎 Acessibilidade

---

## 🔌 Integração com múltiplas APIs (objetivo de prática)

O projeto integra duas APIs externas:

- **OMDb API** → busca e detalhes de filmes  
- **MyMemory Translation API** → tradução automática de termos  

A utilização de múltiplas APIs foi intencional, com o objetivo de praticar:

- Manipulação de requisições assíncronas com `async/await`
- Tratamento de erros HTTP
- Encadeamento de requisições dependentes
- Organização de fluxo de dados entre serviços externos
- Separação entre camada de dados (API) e camada de interface (UI)

---

## 📱 Abordagem Mobile First

A aplicação foi desenvolvida seguindo o conceito **Mobile First**, priorizando dispositivos móveis desde o início do desenvolvimento.

### Principais decisões:

- Layout inicialmente projetado para telas pequenas
- Uso de unidades dinâmicas como `dvh`
- Modal otimizado para interação por toque
- Controle do histórico do navegador para melhor UX mobile
- Expansão progressiva para desktop via media queries

A versão desktop é uma adaptação e refinamento da base mobile, mantendo consistência e simplicidade.

---

## 🛠 Tecnologias utilizadas

- HTML5
- CSS3 (Mobile First)
- JavaScript (ES6+)
- Fetch API
- OMDb API
- MyMemory Translation API
- History API

---

## 🧠 Desafios enfrentados

- Ajuste de viewport dinâmica em dispositivos móveis
- Integração do modal com o histórico do navegador
- Tratamento de falhas na API de tradução
- Organização do fluxo entre múltiplas requisições dependentes

---

## 📦 Como executar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/giliardolv/mini-app-filmes
```

2. Acesse a pasta do projeto.
3. Abra o arquivo index.html no navegador
ou utilize a extensão Live Server no VS Code.


## 🚧 Status do Projeto

Este projeto está em desenvolvimento contínuo.

### 🔮 Próximas melhorias planejadas:

-🎬 Exibição de trailer do filme no modal de detalhes (caso disponível)
- 🌍 Traduzir também as respostas retornadas pela OMDb
- 💾 Sistema de favoritos utilizando localStorage
- 📄 Paginação de resultados
- ⏳ Loading states mais elaborados
- 🎨 Melhor tratamento visual de erros
- 🧱 Melhor organização do código com separação de responsabilidades
- 📁 Modularização das funções em arquivos distintos
- 🔄 Evolução para uma possível mini SPA


## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido com foco em:

- Praticar JavaScript moderno
- Trabalhar com integração de APIs externas
- Exercitar organização e escalabilidade de código
- Aplicar boas práticas de UI/UX mobile
- Simular decisões reais de arquitetura em aplicações web


## 👨‍💻 Autor
Desenvolvido por Giliard Oliveira