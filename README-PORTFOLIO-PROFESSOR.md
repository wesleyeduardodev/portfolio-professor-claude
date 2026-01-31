# 🎓 Projeto: Site Portfólio para Professor Universitário

## 📋 Briefing Completo para Geração por IA

> **Instrução:** Copie todo o conteúdo deste documento e cole em qualquer IA generativa (ChatGPT, Claude, Gemini, Copilot, etc.) para obter o site completo.

---

## 🎯 OBJETIVO

Criar um **site estático de portfólio acadêmico** para um professor universitário. O site deve ser moderno, responsivo, acessível e fácil de manter, sem necessidade de backend ou banco de dados.

---

## 🛠️ STACK TECNOLÓGICA OBRIGATÓRIA

| Tecnologia | Versão/Fonte | Propósito |
|------------|--------------|-----------|
| HTML5 | Semântico | Estrutura |
| CSS3 | Moderno | Estilização base |
| Tailwind CSS | CDN (última versão) | Framework de utilidades |
| JavaScript | ES6+ Vanilla | Interatividade |
| Font Awesome | CDN | Ícones |
| Google Fonts | Inter + Merriweather | Tipografia |

**⚠️ IMPORTANTE:** Não usar frameworks como React, Vue ou Angular. O site deve funcionar apenas abrindo o arquivo HTML no navegador.

---

## 📁 ESTRUTURA DE ARQUIVOS

```
portfolio-professor/
│
├── index.html              # Página única com todas as seções
├── assets/
│   ├── css/
│   │   └── styles.css      # Estilos customizados
│   ├── js/
│   │   └── main.js         # JavaScript para interatividade
│   └── img/
│       └── placeholder.txt # (Pasta para fotos do professor)
│
└── README.md               # Instruções de uso
```

---

## 🗂️ ESTRUTURA DAS SEÇÕES (5 Abas/Seções)

### 1️⃣ HOME (Seção Inicial)
**Elementos obrigatórios:**
- Header fixo com navegação
- Foto do professor (placeholder circular)
- Nome completo com título acadêmico (Prof. Dr./Dra.)
- Cargo e instituição
- Tagline/frase de destaque (área de atuação)
- Botões de ação rápida: "Ver Currículo Lattes" e "Entrar em Contato"
- Background sutil com gradiente ou padrão geométrico

### 2️⃣ BIOGRAFIA
**Elementos obrigatórios:**
- Foto secundária ou ilustração
- Texto em parágrafos (não em tópicos) contando:
  - Formação acadêmica (graduação, mestrado, doutorado, pós-doc)
  - Trajetória profissional
  - Áreas de pesquisa e interesse
  - Prêmios e reconhecimentos (se houver)
- Timeline visual opcional da carreira
- Seção "Áreas de Atuação" com tags/badges

### 3️⃣ DISCIPLINAS
**Elementos obrigatórios:**
- Cards para cada disciplina contendo:
  - Nome da disciplina
  - Código (ex: MAT101)
  - Curso/Departamento
  - Carga horária
  - Período (ex: 2024.1)
  - Ementa resumida (2-3 linhas)
  - Botão "Ver Material" (link placeholder)
- Filtro por curso/período (opcional, mas desejável)
- Mínimo de 4 disciplinas de exemplo

### 4️⃣ PUBLICAÇÕES
**Elementos obrigatórios:**
- Organização por categorias com abas ou filtros:
  - Artigos em Periódicos
  - Livros e Capítulos
  - Anais de Congressos
  - Orientações (opcional)
- Cada publicação deve mostrar:
  - Título
  - Autores (professor em destaque/negrito)
  - Revista/Editora/Evento
  - Ano
  - Link DOI ou PDF (placeholder)
  - Badge de tipo (Artigo, Livro, etc.)
- Ordenação por ano (mais recente primeiro)
- Mínimo de 6 publicações de exemplo

### 5️⃣ CONTATO
**Elementos obrigatórios:**
- Informações de contato:
  - Email institucional (com ícone e link mailto)
  - Telefone do departamento
  - Sala/Gabinete
  - Endereço da instituição
- Horário de atendimento (tabela simples)
- Links para perfis acadêmicos:
  - Currículo Lattes
  - ORCID
  - Google Scholar
  - ResearchGate
  - LinkedIn (opcional)
- Formulário de contato simples (nome, email, mensagem)
  - Pode ser visual apenas ou integrar com Formspree/Netlify Forms
- Mapa embed do Google Maps (opcional)

---

## 🎨 DIRETRIZES DE DESIGN (UI/UX)

### Paleta de Cores
```css
:root {
  /* Modo Claro */
  --primary: #1e40af;        /* Azul acadêmico */
  --primary-light: #3b82f6;  /* Azul claro */
  --secondary: #0f172a;      /* Azul muito escuro */
  --accent: #f59e0b;         /* Âmbar para destaques */
  --background: #f8fafc;     /* Cinza muito claro */
  --surface: #ffffff;        /* Branco */
  --text-primary: #1e293b;   /* Texto principal */
  --text-secondary: #64748b; /* Texto secundário */
  
  /* Modo Escuro */
  --dark-background: #0f172a;
  --dark-surface: #1e293b;
  --dark-text: #f1f5f9;
}
```

### Tipografia
- **Títulos:** Merriweather (serif) - elegância acadêmica
- **Corpo:** Inter (sans-serif) - legibilidade moderna
- **Tamanhos:** Escala modular (1.25 ratio)

### Princípios de Design
1. **Espaço em branco generoso** - Não sobrecarregar visualmente
2. **Hierarquia clara** - Títulos > subtítulos > corpo
3. **Consistência** - Mesmos padrões em todas as seções
4. **Cards com sombra suave** - Elevação sutil (shadow-md)
5. **Bordas arredondadas** - rounded-lg ou rounded-xl
6. **Transições suaves** - 300ms em hovers e interações

### Responsividade (Breakpoints)
- Mobile: < 640px (1 coluna)
- Tablet: 640px - 1024px (2 colunas)
- Desktop: > 1024px (layout completo)

---

## ⚡ FUNCIONALIDADES JAVASCRIPT

### Obrigatórias
1. **Navegação suave (smooth scroll)** entre seções
2. **Menu mobile (hamburger)** com animação
3. **Toggle de tema claro/escuro** com persistência em localStorage
4. **Header que muda de estilo** ao rolar (scroll)
5. **Animações de entrada** nas seções (fade-in ao aparecer)
6. **Filtro de publicações** por categoria
7. **Botão "voltar ao topo"** que aparece após scroll

### Código Limpo
- Comentários explicativos
- Funções bem nomeadas
- Event listeners organizados
- Sem dependências externas (jQuery, etc.)

---

## ♿ ACESSIBILIDADE (WCAG 2.1 AA)

- [ ] Contraste mínimo 4.5:1 para texto
- [ ] Todos os links com texto descritivo
- [ ] Imagens com atributo `alt` descritivo
- [ ] Navegação completa por teclado (Tab, Enter, Escape)
- [ ] Landmarks ARIA (header, main, nav, footer)
- [ ] Focus visível em elementos interativos
- [ ] Skip link para conteúdo principal
- [ ] Formulário com labels associados

---

## 📊 PERFORMANCE

**Meta: Lighthouse Score > 90 em todas as métricas**

- Imagens otimizadas (usar placeholder leve)
- CSS crítico inline (opcional)
- JavaScript no final do body ou com `defer`
- Fontes com `font-display: swap`
- Lazy loading em imagens abaixo do fold

---

## 📝 DADOS DE EXEMPLO (PLACEHOLDER)

Use estes dados fictícios para popular o site:

```yaml
professor:
  nome: "Prof. Dr. Ricardo Almeida Santos"
  titulo: "Professor Associado"
  instituicao: "Universidade Federal do Maranhão - UFMA"
  departamento: "Departamento de Ciência da Computação"
  email: "ricardo.santos@ufma.br"
  telefone: "(98) 3272-8000"
  sala: "Bloco 7, Sala 302"
  lattes: "http://lattes.cnpq.br/0000000000000000"
  orcid: "https://orcid.org/0000-0000-0000-0000"
  
  bio: |
    Doutor em Ciência da Computação pela Universidade de São Paulo (USP), 
    com período sanduíche na Universidade de Stanford. Mestre em Informática 
    pela UFMA e Bacharel em Sistemas de Informação pelo IFMA. Atua nas áreas 
    de Inteligência Artificial, Processamento de Linguagem Natural e 
    Aprendizado de Máquina. Coordena o Laboratório de IA Aplicada (LAIA) 
    e já orientou mais de 30 trabalhos de conclusão de curso e 8 dissertações 
    de mestrado.

  areas:
    - Inteligência Artificial
    - Machine Learning
    - Processamento de Linguagem Natural
    - Análise de Sentimentos
    - Big Data

disciplinas:
  - nome: "Inteligência Artificial"
    codigo: "DCOMP0401"
    curso: "Ciência da Computação"
    periodo: "2024.2"
    carga_horaria: "60h"
    ementa: "Introdução à IA, busca, representação do conhecimento, aprendizado de máquina, redes neurais e aplicações práticas."
    
  - nome: "Aprendizado de Máquina"
    codigo: "DCOMP0502"
    curso: "Ciência da Computação"
    periodo: "2024.2"
    carga_horaria: "60h"
    ementa: "Algoritmos supervisionados e não supervisionados, avaliação de modelos, deep learning e projetos aplicados."
    
  - nome: "Processamento de Linguagem Natural"
    codigo: "PPGCC0801"
    curso: "Mestrado em Ciência da Computação"
    periodo: "2024.2"
    carga_horaria: "45h"
    ementa: "Fundamentos de PLN, modelos de linguagem, transformers, análise de sentimentos e chatbots."
    
  - nome: "Estrutura de Dados"
    codigo: "DCOMP0201"
    curso: "Sistemas de Informação"
    periodo: "2024.1"
    carga_horaria: "90h"
    ementa: "Listas, pilhas, filas, árvores, grafos, ordenação, busca e análise de complexidade."

publicacoes:
  artigos:
    - titulo: "Deep Learning for Sentiment Analysis in Portuguese: A Comprehensive Study"
      autores: "SANTOS, R. A.; SILVA, M. C.; OLIVEIRA, J. P."
      revista: "Journal of Artificial Intelligence Research"
      ano: 2024
      doi: "10.1000/jair.2024.001"
      
    - titulo: "Análise de Fake News em Redes Sociais Usando Transformers"
      autores: "COSTA, A. B.; SANTOS, R. A."
      revista: "Revista Brasileira de Computação Aplicada"
      ano: 2023
      doi: "10.5335/rbca.v15i2.13500"
      
  livros:
    - titulo: "Inteligência Artificial: Teoria e Prática"
      autores: "SANTOS, R. A."
      editora: "Editora UFMA"
      ano: 2022
      isbn: "978-85-0000-000-0"
      
  congressos:
    - titulo: "A Novel Approach for Text Classification Using BERT"
      autores: "SANTOS, R. A.; LIMA, F. S."
      evento: "Brazilian Symposium on Artificial Intelligence (BRACIS)"
      ano: 2023
      local: "Belo Horizonte, MG"

atendimento:
  - dia: "Segunda-feira"
    horario: "14:00 - 16:00"
  - dia: "Quarta-feira"
    horario: "10:00 - 12:00"
  - dia: "Sexta-feira"
    horario: "14:00 - 15:00"
```

---

## 🚀 INSTRUÇÕES DE HOSPEDAGEM

Após gerar o site, hospede gratuitamente em:

### GitHub Pages
1. Crie repositório no GitHub
2. Faça upload dos arquivos
3. Vá em Settings > Pages
4. Selecione branch `main` e pasta `/ (root)`
5. Acesse em: `https://seuusuario.github.io/nome-repo`

### Netlify
1. Acesse netlify.com
2. Arraste a pasta do projeto para o deploy
3. Pronto! URL gerada automaticamente

### Vercel
1. Importe do GitHub ou faça upload
2. Deploy automático
3. URL personalizada disponível

---

## ✅ CHECKLIST FINAL

Antes de entregar, verifique:

- [ ] Todas as 5 seções funcionando
- [ ] Navegação entre seções funcionando
- [ ] Responsivo em mobile, tablet e desktop
- [ ] Tema claro/escuro funcionando
- [ ] Links externos abrindo em nova aba
- [ ] Formulário de contato funcional (ou visual)
- [ ] Sem erros no console do navegador
- [ ] Imagens com alt text
- [ ] Favicon configurado
- [ ] Meta tags para SEO (title, description, og:image)
- [ ] Código comentado e organizado

---

## 💬 PROMPT RESUMIDO (Copiar e Colar)

Se preferir um prompt mais direto, use este:

```
Crie um site estático completo de portfólio para um professor universitário 
brasileiro usando HTML5, Tailwind CSS (CDN) e JavaScript vanilla.

O site deve ter:
1. HOME - Apresentação com foto, nome, cargo e instituição
2. BIOGRAFIA - Formação acadêmica e trajetória
3. DISCIPLINAS - Cards com disciplinas ministradas
4. PUBLICAÇÕES - Lista de artigos, livros e congressos
5. CONTATO - Email, sala, horários e links acadêmicos

Requisitos:
- Design moderno e clean com tema claro/escuro
- 100% responsivo (mobile-first)
- Navegação suave entre seções
- Menu hamburger no mobile
- Animações sutis
- Acessível (WCAG 2.1)
- Código comentado

Gere todos os arquivos: index.html, styles.css e main.js
Use dados fictícios realistas de um professor de Computação.
```

---

## 📄 LICENÇA

Este template é livre para uso pessoal e acadêmico.
Personalize conforme necessário.

---

**Criado para facilitar a geração de portfólios acadêmicos profissionais.**
