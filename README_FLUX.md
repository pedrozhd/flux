# FLUX - Living Curriculum System

## Descrição

FLUX é uma plataforma MVP que prevê profissões emergentes e ajuda pessoas a navegarem transições de carreira usando inteligência artificial. O sistema analisa skills atuais e recomenda profissões compatíveis com score de compatibilidade em tempo real.

## Tecnologias Utilizadas

- **React** 19.2.0 - Framework UI
- **TypeScript** 5.9.3 - Tipagem estática
- **Vite** 7.2.2 - Bundler e dev server
- **Tailwind CSS** 3.4.1 - Utility-first CSS
- **Lucide React** 0.554.0 - Ícones SVG
- **SWC** - Compilador Rust para TypeScript/JavaScript

## Estrutura do Projeto

```
flux/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── CareerPredictor.tsx (componente destaque)
│   │   │   ├── Features.tsx
│   │   │   └── Statistics.tsx
│   │   ├── about/
│   │   │   ├── Mission.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   └── Team.tsx
│   │   ├── faq/
│   │   │   └── AccordionItem.tsx
│   │   └── shared/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Input.tsx
│   │       ├── Modal.tsx
│   │       └── LoadingSpinner.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── FAQ.tsx
│   │   └── Contact.tsx
│   ├── data/
│   │   ├── careers.ts (30 profissões mockadas)
│   │   ├── faqs.ts (10 FAQs)
│   │   └── statistics.ts
│   ├── hooks/
│   │   ├── useCareerMatcher.ts
│   │   └── useForm.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## Instalação

```bash
# Instalar dependências
npm install

# Instalar Tailwind CSS e dependências de desenvolvimento
npm install -D tailwindcss postcss autoprefixer
```

## Como Rodar

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## Páginas Implementadas

### 1. Home (/)
- **Hero Section**: Título impactante com CTA
- **Career Predictor**: Componente destaque com:
  - Sistema de chips para adicionar/remover skills
  - Análise em tempo real com loading spinner
  - Modal com detalhes de profissões
  - Barra de progresso customizada
  - Top 5 profissões compatíveis
- **Features**: Grid 3x2 com 6 funcionalidades principais
- **Statistics**: Contadores animados

### 2. About (/about)
- **Mission**: Missão e visão do FLUX
- **How It Works**: Timeline com 4 passos
- **Team**: Cards com membros da equipe

### 3. FAQ (/faq)
- Accordion customizado (implementado do zero)
- 10 perguntas frequentes
- Searchbar para filtrar perguntas
- Animações suaves

### 4. Contact (/contato)
- Formulário completo com validação
- Campos: Nome, Email, Telefone, Assunto, Mensagem
- Select customizado para assunto
- Checkbox para newsletter
- Modal de sucesso após envio
- Validação em tempo real

## Componentes Customizados

Todos os componentes interativos foram implementados do zero usando React hooks e Tailwind CSS:

- **Modal**: Com backdrop, ESC key, focus trap
- **Accordion**: Expansão/colapso suave
- **Select**: Dropdown customizado
- **Checkbox**: Input customizado
- **Button**: Com variantes (primary, secondary, outline, ghost)
- **Input**: Com validação e error display
- **Card**: Com efeito hover
- **LoadingSpinner**: Animação CSS customizada

## Algoritmo de Matching

O sistema calcula compatibilidade entre skills do usuário e profissões:

```typescript
matchScore = (skillsMatched / totalRequiredSkills) * 100
```

- Filtra profissões com score > 20%
- Retorna top 5 profissões ordenadas por score
- Identifica skills faltantes para cada profissão

## Dados Mockados

- **30 profissões emergentes** com informações completas
- **10 FAQs** sobre o produto
- **Estatísticas** de usuários, profissões e satisfação

## Design System

### Cores
- Primary: #0ea5e9 (Azul)
- Accent: #8b5cf6 (Roxo)
- Gradientes para elementos destaque

### Tipografia
- Headings: font-bold
- Body: font-normal
- Escala: text-sm até text-6xl

### Animações
- fadeIn: Entrada com fade + translateY
- slideIn: Deslizamento da esquerda
- slideInRight: Deslizamento da direita
- scaleIn: Escala com fade

## Responsividade

- Mobile-first approach
- Breakpoints: md (768px), lg (1024px)
- Layouts adaptáveis para todos os tamanhos

## Acessibilidade

- Semantic HTML (header, nav, main, footer, section)
- ARIA labels onde necessário
- Keyboard navigation funcional
- Focus visible em elementos interativos
- Alt text em imagens

## Performance

- Lazy loading de componentes
- Memoização com useMemo e useCallback
- Debounce em inputs de busca
- Otimização de re-renders

## Restrições Respeitadas

✅ Sem React Router (roteamento customizado)
✅ Sem Axios (Fetch API nativo)
✅ Sem bibliotecas de componentes prontos
✅ Sem Bootstrap, Material-UI, Chakra UI
✅ Sem CDNs externos
✅ Todos os componentes interativos implementados do zero
✅ Apenas Tailwind CSS e Lucide React como bibliotecas externas

## Próximos Passos

- Integração com API real
- Autenticação de usuários
- Dashboard personalizado
- Integração com plataformas de educação
- Sistema de notificações
- Analytics e tracking

## Licença

MIT

## Contato

Para dúvidas ou sugestões, entre em contato através do formulário na página de contato.
