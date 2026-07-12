## 1. Architecture Design

```mermaid
flowchart TB
    subgraph Frontend [Vercel]
        FE[React + TypeScript + Tailwind]
    end
    
    subgraph Backend [GCP Ubuntu]
        BE[Express.js + TypeScript]
        WS[WebSocket Server]
    end
    
    subgraph Database [PostgreSQL]
        DB[(PostgreSQL)]
    end
    
    subgraph External Services
        Stripe[Stripe API]
    end
    
    FE -->|HTTPS API| BE
    FE -->|WebSocket| WS
    BE --> DB
    WS --> DB
    BE --> Stripe
```

## 2. Technology Description

### Frontend
- Framework: React@18 + TypeScript
- Build Tool: Vite@6
- Styling: TailwindCSS@3
- State Management: Zustand
- Routing: React Router DOM@6
- Icons: Lucide React
- HTTP Client: Axios
- WebSocket: WebSocket API (native)

### Backend
- Framework: Express.js@4 + TypeScript
- Database: PostgreSQL@16
- ORM: Prisma
- Authentication: JWT (jsonwebtoken)
- Password Hashing: bcrypt
- WebSocket: Socket.IO
- Stripe SDK: stripe@16
- CORS: cors

### Deployment
- Frontend: Vercel
- Backend: GCP Ubuntu (PM2 for process management)
- SSL: Let's Encrypt (Certbot)

## 3. Route Definitions

### Frontend Routes
| Route | Purpose | Protected |
|-------|---------|-----------|
| / | Home page | No |
| /pricing | Pricing page | No |
| /privacy | Privacy policy | No |
| /contact | Contact page | No |
| /register | Registration | No |
| /login | Login | No |
| /dashboard | Member dashboard | Yes |
| /chat | Chat interface | Yes |
| /chat/:roomId | Specific room | Yes |

## 4. API Definitions

### 4.1 Authentication
| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | /api/auth/register | Register new user |
| POST | /api/auth/login | Login user |
| GET | /api/auth/me | Get current user |

### 4.2 Subscription
| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | /api/subscription/plans | Get available plans |
| POST | /api/subscription/create | Create Stripe checkout session |
| GET | /api/subscription/status | Get user subscription status |
| POST | /api/subscription/cancel | Cancel subscription |
| POST | /api/stripe/webhook | Stripe webhook handler |

### 4.3 Chat Rooms
| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | /api/rooms | Get user's rooms |
| POST | /api/rooms | Create new room |
| GET | /api/rooms/:id | Get room details |
| DELETE | /api/rooms/:id | Delete room |
| POST | /api/rooms/:id/invite | Invite member |
| DELETE | /api/rooms/:id/members/:userId | Remove member |

### 4.4 Messages
| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | /api/rooms/:id/messages | Get message history |

### 4.5 Type Definitions
```typescript
interface User {
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Subscription {
  id: string;
  userId: string;
  plan: 'monthly' | 'yearly';
  stripeSubscriptionId: string;
  status: 'active' | 'cancelled' | 'expired';
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

interface Room {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

interface RoomMember {
  id: string;
  roomId: string;
  userId: string;
  role: 'admin' | 'member';
  joinedAt: Date;
}

interface Message {
  id: string;
  roomId: string;
  userId: string;
  content: string;
  createdAt: Date;
}
```

## 5. Server Architecture Diagram

```mermaid
flowchart TD
    Request[HTTP/WebSocket Request] --> Router[Express Router]
    
    Router --> AuthController[Auth Controller]
    Router --> SubscriptionController[Subscription Controller]
    Router --> RoomController[Room Controller]
    
    AuthController --> AuthService[Auth Service]
    SubscriptionController --> SubscriptionService[Subscription Service]
    RoomController --> RoomService[Room Service]
    
    AuthService --> UserRepository[User Repository]
    SubscriptionService --> SubscriptionRepository[Subscription Repository]
    RoomService --> RoomRepository[Room Repository]
    RoomService --> MessageRepository[Message Repository]
    
    UserRepository --> DB[(PostgreSQL)]
    SubscriptionRepository --> DB
    RoomRepository --> DB
    MessageRepository --> DB
    
    SubscriptionService --> StripeAPI[(Stripe API)]
    
    Router --> SocketServer[Socket.IO Server]
    SocketServer --> MessageService[Message Service]
    MessageService --> DB
```

## 6. Data Model

### 6.1 ER Diagram
```mermaid
erDiagram
    users ||--o{ subscriptions : has
    users ||--o{ room_members : "is member of"
    rooms ||--o{ room_members : "has members"
    rooms ||--o{ messages : "contains"
    users ||--o{ messages : "sends"
    
    users {
        uuid id PK
        text email UK
        text password_hash
        text first_name
        text last_name
        timestamp created_at
        timestamp updated_at
    }
    
    subscriptions {
        uuid id PK
        uuid user_id FK
        text plan
        text stripe_subscription_id
        text status
        timestamp start_date
        timestamp end_date
        timestamp created_at
        timestamp updated_at
    }
    
    rooms {
        uuid id PK
        text name
        text description
        timestamp created_at
        timestamp updated_at
    }
    
    room_members {
        uuid id PK
        uuid room_id FK
        uuid user_id FK
        text role
        timestamp joined_at
    }
    
    messages {
        uuid id PK
        uuid room_id FK
        uuid user_id FK
        text content
        timestamp created_at
    }
```

### 6.2 DDL Statements
```sql
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE subscriptions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    plan TEXT NOT NULL CHECK (plan IN ('monthly', 'yearly')),
    stripe_subscription_id TEXT UNIQUE,
    status TEXT NOT NULL CHECK (status IN ('active', 'cancelled', 'expired')),
    start_date TIMESTAMP NOT NULL,
    end_date TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE rooms (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE room_members (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    room_id UUID REFERENCES rooms(id) ON DELETE CASCADE,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    role TEXT NOT NULL CHECK (role IN ('admin', 'member')),
    joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(room_id, user_id)
);

CREATE TABLE messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    room_id UUID REFERENCES rooms(id) ON DELETE CASCADE,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_messages_room_id ON messages(room_id);
CREATE INDEX idx_messages_created_at ON messages(created_at);
CREATE INDEX idx_room_members_user_id ON room_members(user_id);
```

## 7. WebSocket Events

| Event | Direction | Payload | Description |
|-------|-----------|---------|-------------|
| join-room | Client → Server | { roomId: string } | Join a chat room |
| send-message | Client → Server | { roomId: string, content: string } | Send message |
| new-message | Server → Client | Message object | New message received |
| member-joined | Server → Client | { userId: string, roomId: string } | Member joined room |
| member-left | Server → Client | { userId: string, roomId: string } | Member left room |

## 8. Environment Variables

### Frontend (.env)
```
VITE_API_URL=https://api.rowwhisper.com
VITE_WS_URL=wss://api.rowwhisper.com
```

### Backend (.env)
```
PORT=3000
DATABASE_URL=postgresql://user:password@localhost:5432/rowwhisper
JWT_SECRET=your-jwt-secret-key
STRIPE_API_KEY=sk_your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
FRONTEND_URL=https://rowwhisper.vercel.app
```
