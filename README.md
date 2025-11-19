# 📊 FLUX - Living Curriculum System

## 1. 📌 Visão Geral
![Banner do Projeto](src/assets/career-predictor-visual.png)

## 2. 📊 Status do Projeto
✅ **Versão**: 1.0.0  
🚀 **Status**: Em Desenvolvimento  
📅 **Última Atualização**: Novembro 2025

## 3. 📚 Sumário
- [Sobre o Projeto](#4-💡-sobre-o-projeto)
- [Tecnologias](#5-🚀-tecnologias-utilizadas)
- [Instalação](#6-🛠️-instalação)
- [Como Usar](#7-🎮-como-usar)
- [Estrutura de Pastas](#8-📁-estrutura-de-pastas)
- [Endpoints](#9-🌐-endpoints)
- [Autores](#10-👥-autores-e-créditos)
- [Screenshots](#11-📸-screenshots)
- [Contato](#12-📧-contato)

## 4. 💡 Sobre o Projeto
O FLUX é uma plataforma inovadora que utiliza inteligência de dados para conectar as competências técnicas e comportamentais dos alunos às demandas do mercado de trabalho, criando um currículo dinâmico e personalizado.

**Objetivos Principais**:
- Conectar habilidades dos alunos às necessidades do mercado
- Criar roadmaps de aprendizado personalizados
- Fornecer métricas de desenvolvimento profissional
- Facilitar a descoberta de carreiras compatíveis

## 5. 🚀 Tecnologias Utilizadas

### Frontend
- **React 19** - Biblioteca JavaScript para interfaces
- **TypeScript** - Adição de tipagem estática
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Estilização
- **React Router DOM** - Navegação
- **Lucide React** - Ícones

### Ferramentas
- **ESLint** - Linter
- **Prettier** - Formatação de código
- **Git** - Controle de versão

## 6. 🛠️ Instalação

### Pré-requisitos
- Node.js (versão 18+)
- npm (versão 9+)

### Passo a Passo
1. Clone o repositório:
   ```bash
   git clone https://github.com/pedrozhd/flux.git
   cd flux
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Acesse:
   ```
   http://localhost:5173
   ```

## 7. Como Usar

### Autenticação
```
POST /api/auth/login
{
  "email": "usuario@exemplo.com",
  "senha": "senha123"
}
```

### Buscar Carreiras Recomendadas
```
GET /api/carreiras/recomendadas?skills=react,typescript
```

### Criar Roadmap
```
POST /api/roadmap
{
  "carreiraId": "dev-frontend",
  "nivelAtual": "iniciante"
}
```

## 8. 📁 Estrutura de Pastas

```
flux/
├── public/            # Arquivos estáticos
└── src/
    ├── assets/        # Imagens, ícones, etc.
    ├── components/    # Componentes reutilizáveis
    │   ├── about/     # Componentes da página Sobre
    │   ├── home/      # Componentes da página inicial
    │   ├── layout/    # Layouts da aplicação
    │   └── shared/    # Componentes compartilhados
    ├── hooks/         # Custom Hooks
    ├── pages/         # Páginas da aplicação
    ├── services/      # Serviços de API
    ├── types/         # Tipos TypeScript
    └── utils/         # Utilitários
```

## 9. 🌐 Endpoints

### Autenticação
- `POST /api/auth/register` - Registrar novo usuário
- `POST /api/auth/login` - Fazer login
- `GET /api/auth/me` - Obter dados do usuário logado

### Carreiras
- `GET /api/carreiras` - Listar todas as carreiras
- `GET /api/carreiras/:id` - Detalhes de uma carreira
- `GET /api/carreiras/recomendadas` - Carreiras recomendadas

### Roadmaps
- `POST /api/roadmaps` - Criar novo roadmap
- `GET /api/roadmaps/:id` - Visualizar roadmap
- `PUT /api/roadmaps/:id` - Atualizar progresso

## 10. 👥 Autores e Créditos

### Desenvolvedores
- **Pedro Henrique**
  - Função: Desenvolvedor Full Stack
  - GitHub: [@pedrozhd](https://github.com/pedrozhd)

- **Luiz Gustavo Gonçalves**
  - Função: Desenvolvedor Frontend
  - GitHub: [@luizzggoncalves](https://github.com/luizzggoncalves)
  
- **Olavo Porto Neves**
  - Função: Designer UX/UI
  - GitHub: [@olavoneves](https://github.com/olavoneves)

## 11. 📸 Screenshots

### Página Inicial
![Página Inicial](/screenshots/principal.png)

### Dashboard
![Dashboard](/screenshots/dashboard.png)

### Roadmap
![Roadmap](/screenshots/roadmap.png)

## 12. Contato

### Suporte Técnico
- **Email**: suporte@flux.com.br
- **Telefone**: (11) 99999-9999
- **Horário de Atendimento**: Seg-Sex, 9h-18h

### Links Úteis
- [Vercel](https://flux-rouge.vercel.app/)
- [GitHub](https://github.com/pedrozhd/flux)
- [Youtube](https://youtu.be/KMq22BJzdhI)

### Endereço
Rua das Inovações, 123 - São Paulo/SP

---

Desenvolvido com ❤️ para o desafio de desenvolvimento global 2
