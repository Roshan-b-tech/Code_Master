# ✨ Code Craft - Complete Project Documentation ✨

> **A Modern SaaS Online Code Editor Platform**  
> Built with Next.js 15, Convex, Clerk, and Monaco Editor

---

## 📋 Table of Contents

1. [Executive Summary](#executive-summary)
2. [Project Overview](#project-overview)
3. [Use Cases & Target Audience](#use-cases--target-audience)
4. [Technology Stack](#technology-stack)
5. [System Architecture](#system-architecture)
6. [Core Features](#core-features)
7. [Database Schema](#database-schema)
8. [Authentication & Authorization](#authentication--authorization)
9. [Pricing Model](#pricing-model)
10. [Deployment & Configuration](#deployment--configuration)
11. [API Integration](#api-integration)
12. [Future Enhancements](#future-enhancements)
13. [Getting Started](#getting-started)

---

## 🎯 Executive Summary

**Code Craft** is a modern Software-as-a-Service (SaaS) online code editor platform built with cutting-edge web technologies. It provides developers with a powerful, browser-based integrated development environment (IDE) that supports **10 programming languages**, real-time code execution, and a vibrant community-driven code sharing ecosystem.

### Key Value Propositions

- ✅ **Zero Setup Required**: Start coding immediately without any local environment configuration
- ✅ **Multi-Language Support**: Write and execute code in 10 different programming languages
- ✅ **Community-Driven**: Share code snippets, collaborate, and learn from other developers
- ✅ **Professional Tools**: Access to VSCode-quality editor with multiple themes and customization options
- ✅ **Flexible Pricing**: Free tier for basic usage with affordable Pro plan for advanced features

---

## 📖 Project Overview

### Project Vision

Code Craft aims to democratize access to professional development tools by providing a cloud-based IDE that eliminates the barriers of local setup, configuration, and maintenance. The platform enables developers to code, learn, and collaborate from anywhere, on any device.

### Project Scope

The platform encompasses the following core functionalities:

- Online code editor with Monaco Editor (VSCode's editor engine)
- Real-time code execution using Piston API
- User authentication and profile management
- Code snippet sharing and community features
- Execution history tracking and analytics
- Subscription management with free and pro tiers
- Customizable editor experience (themes, fonts, languages)

### Project Metrics

| Metric | Value |
|--------|-------|
| **Supported Languages** | 10 (JavaScript, TypeScript, Python, Java, Go, Rust, C++, C#, Ruby, Swift) |
| **Available Themes** | 5 (VS Dark, VS Light, GitHub Dark, Monokai, Solarized Dark) |
| **Free Languages** | 3 (JavaScript, Python, Java) |
| **Pro Plan Price** | $39 (One-time payment) |
| **Version** | 0.1.0 |

---

## 🎓 Use Cases & Target Audience

### Primary Use Cases

#### 🎓 Learning & Education
Students and beginners can practice programming without complex setup, experiment with different languages, and learn from community-shared code examples.

#### 💼 Technical Interviews
Conduct coding interviews remotely with real-time code execution and sharing capabilities across multiple programming languages.

#### 🔬 Quick Prototyping
Rapidly test code snippets, algorithms, or concepts without setting up a local development environment.

#### 👥 Code Sharing
Share code snippets with colleagues, students, or the community with syntax highlighting and execution results.

#### 📚 Documentation
Create executable code examples for documentation, tutorials, or blog posts that readers can run directly.

#### 🎯 Coding Challenges
Practice coding challenges and algorithm problems with immediate feedback and execution results.

### Target Audience

- **Students & Learners**: Individuals learning to code who need a simple, accessible platform
- **Professional Developers**: Experienced developers needing quick code testing and prototyping
- **Educators & Trainers**: Teachers conducting programming courses or workshops
- **Technical Recruiters**: HR professionals conducting technical assessments
- **Content Creators**: Bloggers and YouTubers creating programming tutorials
- **Open Source Contributors**: Developers sharing code snippets and examples

---

## 🛠️ Technology Stack

### Frontend Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 15.0.3 | React framework for server-side rendering, routing, and optimization |
| **React** | 19.0.0-rc | UI component library for building interactive interfaces |
| **TypeScript** | 5.x | Type-safe JavaScript for better code quality and developer experience |
| **Monaco Editor** | 4.6.0 | VSCode's editor engine for professional code editing experience |
| **Tailwind CSS** | 3.4.1 | Utility-first CSS framework for rapid UI development |
| **Framer Motion** | 11.13.1 | Animation library for smooth UI transitions and interactions |
| **Lucide React** | 0.464.0 | Icon library for consistent UI iconography |
| **React Hot Toast** | 2.4.1 | Toast notifications for user feedback |
| **React Syntax Highlighter** | 15.6.1 | Syntax highlighting for code display in snippets |

### Backend & Database

| Technology | Version | Purpose |
|------------|---------|---------|
| **Convex** | 1.17.3 | Backend-as-a-Service providing real-time database, serverless functions, and file storage |
| **Convex Schema** | - | Type-safe database schema definition with automatic TypeScript generation |

### Authentication & Payment

| Technology | Version | Purpose |
|------------|---------|---------|
| **Clerk** | 6.6.0 | Complete authentication solution with user management, OAuth, and webhooks |
| **Lemon Squeezy** | - | Payment processing and subscription management platform |
| **Svix** | 1.42.0 | Webhook verification and management |

### External APIs

| API | Purpose | Endpoint |
|-----|---------|----------|
| **Piston API** | Code execution engine supporting 10+ programming languages | https://emkc.org/api/v2/piston/execute |

### State Management

| Technology | Version | Purpose |
|------------|---------|---------|
| **Zustand** | 5.0.1 | Lightweight state management for editor configuration and execution state |

### Why This Stack?

- **Next.js 15**: Latest features including React Server Components, improved performance, and better developer experience
- **Convex**: Real-time capabilities, automatic TypeScript generation, and serverless architecture eliminate backend complexity
- **Clerk**: Production-ready authentication with minimal setup and excellent developer experience
- **Monaco Editor**: Industry-standard editor used in VSCode, providing familiar experience to developers
- **TypeScript**: Type safety reduces bugs and improves code maintainability

---

## 🏗️ System Architecture

### High-Level Architecture

Code Craft follows a modern serverless architecture pattern with the following components:

#### Frontend Layer
Next.js application with server-side rendering, client-side routing, and React Server Components for optimal performance.

#### Backend Layer
Convex serverless functions handling business logic, data mutations, and real-time subscriptions.

#### Database Layer
Convex real-time database with automatic indexing and type-safe queries.

#### External Services
Piston API for code execution, Clerk for authentication, Lemon Squeezy for payments.

### Application Structure

```
code-craft/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── (root)/            # Main editor page
│   │   │   ├── _components/   # Editor components
│   │   │   └── _constants/    # Language configs & themes
│   │   ├── pricing/           # Pricing page
│   │   ├── profile/           # User profile & stats
│   │   ├── snippets/          # Code snippets community
│   │   └── layout.tsx         # Root layout
│   ├── components/            # Shared components
│   ├── store/                 # Zustand state management
│   └── types/                 # TypeScript type definitions
├── convex/                    # Backend functions & schema
│   ├── schema.ts             # Database schema
│   ├── users.ts              # User management
│   ├── codeExecutions.ts     # Execution tracking
│   ├── snippets.ts           # Snippet CRUD operations
│   ├── http.ts               # Webhook handlers
│   └── lemonSqueezy.ts       # Payment processing
└── public/                    # Static assets (language logos)
```

### Data Flow

#### Code Execution Flow:
1. User writes code in Monaco Editor
2. User clicks "Run Code" button
3. Frontend sends code to Piston API via fetch request
4. Piston API executes code in isolated container
5. Results (output/error) returned to frontend
6. Execution saved to Convex database for history tracking
7. UI updates with results and execution statistics

#### Authentication Flow:
1. User signs up/logs in via Clerk
2. Clerk sends webhook to Convex on user creation
3. Convex creates user record in database
4. User session managed by Clerk with JWT tokens
5. Protected routes check authentication status

#### Payment Flow:
1. User clicks "Upgrade to Pro" button
2. Redirected to Lemon Squeezy checkout
3. User completes payment
4. Lemon Squeezy sends webhook to Convex
5. Convex updates user's Pro status
6. User gains access to all 10 languages

---

## ✨ Core Features

### Code Editor Features

#### 🌐 Multi-Language Support
Support for 10 programming languages: JavaScript, TypeScript, Python, Java, Go, Rust, C++, C#, Ruby, and Swift.

#### 🎨 Theme Customization
5 professional VSCode themes: VS Dark, VS Light, GitHub Dark, Monokai, and Solarized Dark.

#### ⚙️ Font Size Control
Adjustable font size for comfortable coding experience with persistent settings.

#### 💾 Auto-Save
Automatic code persistence in localStorage per language, never lose your work.

#### ⚡ Real-Time Execution
Instant code execution with detailed output and error handling.

#### 📝 Syntax Highlighting
Professional syntax highlighting powered by Monaco Editor for all supported languages.

### Community Features

| Feature | Description |
|---------|-------------|
| **Code Snippets** | Share code snippets with the community with title, language, and full code |
| **Star System** | Star favorite snippets to bookmark and show appreciation |
| **Comments** | Add comments to snippets for discussion and feedback (supports HTML content) |
| **Search & Filter** | Advanced filtering by language and search capabilities |
| **User Profiles** | View snippet authors and their contributions |

### User Profile & Analytics

- **Execution History**: Paginated view of all code executions with timestamp
- **Statistics Dashboard**:
  - Total executions count
  - Executions in last 24 hours
  - Number of languages used
  - Favorite language (most used)
  - Most starred language (from starred snippets)
  - Language usage breakdown
- **Starred Snippets**: Collection of bookmarked code snippets
- **Personal Snippets**: User's own shared code snippets

### Smart Output Handling

#### Execution States:
- **Success**: Green indicator with clean output display
- **Error**: Red indicator with detailed error messages
- **Compilation Error**: Specific handling for compile-time errors
- **Runtime Error**: Specific handling for runtime errors
- **Loading**: Visual feedback during code execution

---

## 🗄️ Database Schema

### Users Table

| Field | Type | Description |
|-------|------|-------------|
| `userId` | string | Clerk user ID (indexed) |
| `email` | string | User email address |
| `name` | string | User display name |
| `isPro` | boolean | Pro subscription status |
| `proSince` | number (optional) | Timestamp when user became Pro |
| `lemonSqueezyCustomerId` | string (optional) | Lemon Squeezy customer ID |
| `lemonSqueezyOrderId` | string (optional) | Lemon Squeezy order ID |

### Code Executions Table

| Field | Type | Description |
|-------|------|-------------|
| `userId` | string | User who executed the code (indexed) |
| `language` | string | Programming language used |
| `code` | string | Source code that was executed |
| `output` | string (optional) | Execution output (stdout) |
| `error` | string (optional) | Error message if execution failed |
| `_creationTime` | number | Timestamp (auto-generated by Convex) |

### Snippets Table

| Field | Type | Description |
|-------|------|-------------|
| `userId` | string | Snippet creator (indexed) |
| `userName` | string | Creator's display name (denormalized for performance) |
| `title` | string | Snippet title |
| `language` | string | Programming language |
| `code` | string | Source code |

### Snippet Comments Table

| Field | Type | Description |
|-------|------|-------------|
| `snippetId` | id("snippets") | Reference to snippet (indexed) |
| `userId` | string | Comment author |
| `userName` | string | Author's display name |
| `content` | string | Comment content (supports HTML) |

### Stars Table

| Field | Type | Description |
|-------|------|-------------|
| `userId` | string | User who starred (indexed) |
| `snippetId` | id("snippets") | Starred snippet (indexed) |

### Database Indexes

- `users.by_user_id` - Fast user lookups by Clerk ID
- `codeExecutions.by_user_id` - Efficient execution history queries
- `snippets.by_user_id` - User's snippets retrieval
- `snippetComments.by_snippet_id` - Comments for a snippet
- `stars.by_user_id` - User's starred snippets
- `stars.by_snippet_id` - Snippet's star count
- `stars.by_user_id_and_snippet_id` - Check if user starred a snippet

---

## 🔐 Authentication & Authorization

### Authentication Provider: Clerk

Code Craft uses Clerk for complete authentication and user management. Clerk provides:

- Email/password authentication
- OAuth providers (Google, GitHub, etc.)
- User profile management
- Session management with JWT tokens
- Webhook notifications for user events

### Protected Routes

The following routes require authentication:

- `/profile` - User profile and statistics
- `/snippets/[id]` - Full snippet details (read-only public, write requires auth)
- Code execution saving (anonymous users can run code but can't save history)
- Snippet creation and commenting
- Starring snippets

### Authorization Levels

| User Type | Permissions |
|-----------|-------------|
| **Anonymous** | - View public snippets<br>- Run code (no history)<br>- View pricing page |
| **Free User** | - All anonymous permissions<br>- Execute code in 3 languages (JavaScript, Python, Java)<br>- Save execution history<br>- Create and share snippets<br>- Star snippets<br>- Comment on snippets<br>- View personal statistics |
| **Pro User** | - All free user permissions<br>- Execute code in all 10 languages<br>- Priority support (future)<br>- Advanced features (future) |

### Webhook Integration

#### Clerk Webhook (`/clerk-webhook`):
- **Event**: `user.created`
- **Action**: Create user record in Convex database
- **Data synced**: userId, email, name
- **Security**: Verified using Svix webhook signatures

#### Lemon Squeezy Webhook (`/lemon-squeezy-webhook`):
- **Event**: `order_created`
- **Action**: Upgrade user to Pro status
- **Data synced**: customerId, orderId, amount
- **Security**: Verified using X-Signature header

---

## 💰 Pricing Model

### Free Tier - $0

**Perfect for learning and basic usage**

✅ 3 Programming Languages (JavaScript, Python, Java)  
✅ Unlimited code executions  
✅ Execution history tracking  
✅ 5 VSCode themes  
✅ Code snippet sharing  
✅ Community features (star, comment)  
✅ Personal statistics dashboard  
❌ Advanced languages (TypeScript, Go, Rust, C++, C#, Ruby, Swift)

### Pro Tier - $39 (One-time payment)

**Lifetime access to all features**

✅ All Free tier features  
✅ 10 Programming Languages (all languages unlocked)  
✅ TypeScript support  
✅ Systems languages (Go, Rust, C++)  
✅ Enterprise languages (C#, Swift)  
✅ Scripting languages (Ruby)  
✅ Lifetime updates  
✅ Priority support (planned)

### Language Restrictions

| Language | Free Tier | Pro Tier |
|----------|-----------|----------|
| JavaScript | ✅ | ✅ |
| Python | ✅ | ✅ |
| Java | ✅ | ✅ |
| TypeScript | ❌ Pro Required | ✅ |
| Go | ❌ Pro Required | ✅ |
| Rust | ❌ Pro Required | ✅ |
| C++ | ❌ Pro Required | ✅ |
| C# | ❌ Pro Required | ✅ |
| Ruby | ❌ Pro Required | ✅ |
| Swift | ❌ Pro Required | ✅ |

### Payment Processing

Payments are processed through **Lemon Squeezy**, a merchant of record that handles:

- Payment processing (credit cards, PayPal, etc.)
- Tax compliance (VAT, sales tax)
- Invoicing and receipts
- Fraud prevention
- Webhook notifications for order events

---

## 🚀 Deployment & Configuration

### Environment Variables

#### Frontend (.env.local):
```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
CONVEX_DEPLOYMENT=prod:...
NEXT_PUBLIC_CONVEX_URL=https://...
```

#### Convex Dashboard:
```bash
CLERK_WEBHOOK_SECRET=whsec_...
LEMON_SQUEEZY_WEBHOOK_SECRET=...
```

### Deployment Steps

#### 1. Convex Setup:
```bash
# Install Convex CLI
npm install -g convex

# Initialize Convex project
npx convex dev

# Deploy to production
npx convex deploy
```

#### 2. Clerk Setup:
1. Create Clerk application at clerk.com
2. Configure allowed redirect URLs
3. Set up webhook endpoint: `https://your-convex-url.convex.site/clerk-webhook`
4. Subscribe to `user.created` event
5. Copy webhook secret to Convex environment

#### 3. Lemon Squeezy Setup:
1. Create Lemon Squeezy account
2. Create product for Pro plan ($39)
3. Configure webhook: `https://your-convex-url.convex.site/lemon-squeezy-webhook`
4. Subscribe to `order_created` event
5. Copy webhook secret to Convex environment

#### 4. Next.js Deployment (Vercel):
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to Vercel
vercel --prod

# Or connect GitHub repository for automatic deployments
```

### Running Locally

```bash
# Install dependencies
npm install

# Start Convex development server
npx convex dev

# In another terminal, start Next.js
npm run dev

# Application runs at http://localhost:3000
```

### Production Checklist

- ✅ All environment variables configured
- ✅ Clerk webhooks verified and working
- ✅ Lemon Squeezy webhooks verified and working
- ✅ Convex schema deployed to production
- ✅ Database indexes created
- ✅ SSL certificates configured
- ✅ Custom domain configured (optional)
- ✅ Error tracking setup (Sentry, etc.)
- ✅ Analytics configured (Google Analytics, Plausible, etc.)

---

## 🔌 API Integration

### Piston Code Execution API

#### Endpoint:
```
POST https://emkc.org/api/v2/piston/execute
```

#### Request Format:
```json
{
  "language": "python",
  "version": "3.10.0",
  "files": [
    {
      "content": "print('Hello, World!')"
    }
  ]
}
```

#### Response Format (Success):
```json
{
  "run": {
    "stdout": "Hello, World!\n",
    "stderr": "",
    "code": 0,
    "output": "Hello, World!\n"
  }
}
```

#### Response Format (Error):
```json
{
  "run": {
    "stdout": "",
    "stderr": "Traceback (most recent call last):\n  ...",
    "code": 1,
    "output": "Traceback (most recent call last):\n  ..."
  }
}
```

#### Supported Runtimes:

| Language | Runtime | Version |
|----------|---------|---------|
| JavaScript | javascript | 18.15.0 |
| TypeScript | typescript | 5.0.3 |
| Python | python | 3.10.0 |
| Java | java | 15.0.2 |
| Go | go | 1.16.2 |
| Rust | rust | 1.68.2 |
| C++ | cpp | 10.2.0 |
| C# | csharp | 6.12.0 |
| Ruby | ruby | 3.0.1 |
| Swift | swift | 5.3.3 |

### Convex API Functions

#### Queries (Read Operations):
- `users.getUser` - Get user by Clerk ID
- `codeExecutions.getUserExecutions` - Get user's execution history (paginated)
- `codeExecutions.getUserStats` - Get user statistics
- `snippets.getSnippets` - Get all public snippets
- `snippets.getSnippetById` - Get specific snippet
- `snippets.getComments` - Get comments for a snippet
- `snippets.isSnippetStarred` - Check if user starred a snippet
- `snippets.getSnippetStarCount` - Get star count for a snippet
- `snippets.getStarredSnippets` - Get user's starred snippets

#### Mutations (Write Operations):
- `users.syncUser` - Create/update user from Clerk webhook
- `users.upgradeToPro` - Upgrade user to Pro (from payment webhook)
- `codeExecutions.saveExecution` - Save code execution to history
- `snippets.createSnippet` - Create new code snippet
- `snippets.deleteSnippet` - Delete snippet (with cascade delete of comments/stars)
- `snippets.starSnippet` - Toggle star on snippet
- `snippets.addComment` - Add comment to snippet
- `snippets.deleteComment` - Delete comment (author only)

#### Actions (Internal):
- `lemonSqueezy.verifyWebhook` - Verify Lemon Squeezy webhook signature

---

## 🔮 Future Enhancements

### Planned Features

#### 🤝 Real-Time Collaboration
Multiple users editing the same code snippet simultaneously with live cursors and presence indicators.

#### 📦 Package Management
Support for importing external libraries and packages in supported languages.

#### 🔍 Advanced Search
Full-text search across code snippets with filters for language, author, and date.

#### 🏆 Gamification
Badges, achievements, and leaderboards for active community members.

#### 📱 Mobile App
Native mobile applications for iOS and Android with offline code editing.

#### 🎓 Learning Paths
Curated coding challenges and tutorials for different skill levels.

#### 🔗 GitHub Integration
Import code from GitHub repositories and export snippets as gists.

#### 💬 Live Chat
Real-time chat for discussing code and getting help from the community.

#### 📊 Advanced Analytics
Detailed insights into coding patterns, time spent, and productivity metrics.

#### 🎨 Custom Themes
User-created and community-shared editor themes.

#### 🔐 Private Snippets
Option to keep code snippets private or share with specific users.

#### 📝 Markdown Support
Rich text documentation alongside code snippets with markdown rendering.

### Technical Improvements

- **Performance Optimization**: Code splitting, lazy loading, and edge caching
- **Offline Support**: Progressive Web App (PWA) with service workers
- **Testing**: Comprehensive unit, integration, and E2E tests
- **CI/CD**: Automated testing and deployment pipelines
- **Monitoring**: Error tracking, performance monitoring, and user analytics
- **Accessibility**: WCAG 2.1 AA compliance for better accessibility
- **Internationalization**: Multi-language support for UI
- **API Rate Limiting**: Prevent abuse and ensure fair usage

### Business Enhancements

- **Team Plans**: Collaborative workspaces for organizations
- **Enterprise Features**: SSO, audit logs, and admin controls
- **API Access**: Public API for integrations and third-party apps
- **White-Label**: Customizable branding for enterprise customers
- **Educational Licensing**: Special pricing for schools and universities
- **Affiliate Program**: Referral rewards for bringing new users

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ installed
- npm or yarn package manager
- Clerk account (for authentication)
- Convex account (for backend)
- Lemon Squeezy account (for payments, optional for development)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd code-craft
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create `.env.local` file:
   ```bash
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
   CLERK_SECRET_KEY=your_clerk_secret
   CONVEX_DEPLOYMENT=your_convex_deployment
   NEXT_PUBLIC_CONVEX_URL=your_convex_url
   ```

4. **Start Convex development server**
   ```bash
   npx convex dev
   ```

5. **Start Next.js development server** (in a new terminal)
   ```bash
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to `http://localhost:3000`

### Project Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

---

## 📄 License

This project is licensed under the MIT License.

---

## 👥 Contributors

Built with ❤️ by the Code Craft team

---

## 📞 Support

For support, email support@codecraft.com or join our community Discord.

---

## 🙏 Acknowledgments

- **Monaco Editor** - For the amazing code editor
- **Piston API** - For code execution capabilities
- **Clerk** - For authentication infrastructure
- **Convex** - For the powerful backend platform
- **Lemon Squeezy** - For payment processing
- **Next.js Team** - For the incredible framework

---

**Last Updated**: January 17, 2026  
**Version**: 0.1.0  
**Documentation**: Complete

---

*Made with Next.js 15, Convex, Clerk, and Monaco Editor* 🚀
