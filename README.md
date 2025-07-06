# Vanish - Islamic Dating App

A modern, Islamic-focused dating app featuring verification, smart notifications, and video introductions.

## Features

- 🛡️ **100% Verified Profiles** - Multi-level verification to ensure authenticity
- 🔔 **Smart Notifications** - Intelligent reminders and conversation starters
- 🎥 **Video Introductions** - 5-10 second personality clips
- 🕌 **Islamic Compatibility** - Religious practice and values matching
- 🎨 **Modern UI/UX** - Clean, futuristic design with playful touches

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Railway (Backend) + Netlify (Frontend)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- PostgreSQL database (local or Railway)

### Local Development

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd dating-apps
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp env.example .env.local
```

Edit `.env.local` with your configuration:
```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/vanish_app"

# NextAuth.js
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# JWT
JWT_SECRET="your-jwt-secret-here"
```

4. **Set up the database**
```bash
# Generate Prisma client
npm run db:generate

# Push schema to database
npm run db:push
```

5. **Run the development server**
```bash
npm run dev
```

6. **Open [http://localhost:3000](http://localhost:3000)** in your browser

### Railway Deployment

1. **Install Railway CLI**
```bash
npm install -g @railway/cli
```

2. **Login to Railway**
```bash
railway login
```

3. **Initialize Railway project**
```bash
railway init
```

4. **Add PostgreSQL service**
```bash
railway add
# Select PostgreSQL from the list
```

5. **Deploy to Railway**
```bash
railway up
```

6. **Set environment variables in Railway dashboard**
   - Go to your project in Railway dashboard
   - Add all environment variables from `env.example`

## Project Structure

```
dating-apps/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   └── auth/          # Authentication endpoints
│   │   └── dashboard/     # Main app dashboard
│   ├── auth/              # Authentication pages
│   └── dashboard/         # Main app dashboard
├── components/            # React components
├── prisma/               # Database schema and migrations
├── public/               # Static assets
├── env.example           # Environment variables template
├── railway.json          # Railway deployment config
└── package.json          # Dependencies
```

## Development Workflow

### Branch Structure

- `main` - Production-ready code
- `develop` - Development branch
- `feature/*` - Feature branches (e.g., `feature/initial-setup`)

### Creating Feature Branches

```bash
# From develop branch
git checkout develop
git checkout -b feature/your-feature-name

# Make changes and commit
git add .
git commit -m "feat: add your feature description"

# Push to remote
git push origin feature/your-feature-name
```

### Database Management

```bash
# Generate Prisma client after schema changes
npm run db:generate

# Push schema changes to database
npm run db:push

# Open Prisma Studio for database management
npm run db:studio
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `GET/POST /api/auth/[...nextauth]` - NextAuth.js endpoints

### Profile Management
- `GET /api/profile` - Get user profile
- `PUT /api/profile` - Update user profile

### Matching
- `GET /api/matches` - Get user matches
- `POST /api/matches` - Create new match

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | Yes |
| `NEXTAUTH_URL` | Your app URL | Yes |
| `NEXTAUTH_SECRET` | NextAuth.js secret | Yes |
| `JWT_SECRET` | JWT signing secret | Yes |
| `INSTAGRAM_CLIENT_ID` | Instagram API client ID | No |
| `INSTAGRAM_CLIENT_SECRET` | Instagram API client secret | No |
| `UPLOADTHING_SECRET` | File upload service secret | No |
| `UPLOADTHING_APP_ID` | File upload service app ID | No |

## Contributing

1. Create a feature branch from `develop`
2. Make your changes
3. Test thoroughly
4. Create a pull request
5. Wait for review and merge

## License

This project is licensed under the MIT License.

## Support

For support, email support@vanishapp.com or create an issue in the repository.
