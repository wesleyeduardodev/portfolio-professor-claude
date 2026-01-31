# Portfolio Professor

Site de portfolio academico para professores universitarios.

## Estrutura do Projeto

```
portfolio-professor/
├── index.html              # Pagina principal
├── assets/
│   ├── css/
│   │   └── styles.css      # Estilos customizados
│   ├── js/
│   │   └── main.js         # JavaScript interativo
│   └── img/
│       └── placeholder.txt # Instrucoes para imagens
├── README.md               # Este arquivo
└── README-PORTFOLIO-PROFESSOR.md  # Especificacoes do projeto
```

## Como Usar

1. Abra o arquivo `index.html` no navegador
2. Personalize os dados no HTML com suas informacoes
3. Adicione sua foto na pasta `assets/img/`

## Personalizacao

### Dados do Professor
Edite o arquivo `index.html` e substitua:
- Nome, titulo e instituicao
- Email, telefone e sala
- Links do Lattes, ORCID, etc.
- Biografia e areas de atuacao
- Disciplinas ministradas
- Lista de publicacoes
- Horarios de atendimento

### Cores
Edite as variaveis CSS em `assets/css/styles.css`:
```css
:root {
    --primary: #1e40af;
    --primary-light: #3b82f6;
    --accent: #f59e0b;
}
```

### Formulario de Contato
Para funcionar, configure um servico como:
- [Formspree](https://formspree.io)
- [Netlify Forms](https://www.netlify.com/products/forms/)

Substitua o `action` do formulario pelo seu endpoint.

## Funcionalidades

- Tema claro/escuro com persistencia
- Menu responsivo para mobile
- Navegacao suave entre secoes
- Animacoes de entrada
- Filtros para disciplinas e publicacoes
- Botao voltar ao topo
- Acessivel (WCAG 2.1)

## Tecnologias

- HTML5 Semantico
- Tailwind CSS (CDN)
- JavaScript ES6+ (Vanilla)
- Font Awesome (icones)
- Google Fonts (Inter + Merriweather)

## Hospedagem

### GitHub Pages
1. Crie um repositorio no GitHub
2. Faca upload dos arquivos
3. Acesse Settings > Pages
4. Selecione branch `main` e pasta `/ (root)`

### Netlify
1. Acesse [netlify.com](https://netlify.com)
2. Arraste a pasta do projeto para fazer deploy

### Vercel
1. Importe do GitHub ou faca upload
2. Deploy automatico

## Licenca

Livre para uso pessoal e academico.
