# Frontend - Data Scube

## Folder Structure

```
frontend/
├── app/                    # Next.js App Router - All Pages
│   ├── users/             # /users page
│   ├── products/           # /products page
│   ├── orders/            # /orders page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page (/)
│   └── globals.css        # Global styles
├── api/                   # API Client Functions (Frontend API calls)
│   ├── client.ts         # Base API client
│   ├── users.ts          # User API functions
│   ├── products.ts       # Products API functions
│   ├── orders.ts         # Orders API functions
│   └── index.ts         # Export all API functions
├── routes/                # Route Configuration & Handlers
│   ├── users.ts          # Users route config
│   ├── products.ts       # Products route config
│   ├── orders.ts         # Orders route config
│   └── index.ts          # Export all routes
├── public/
│   └── assets/           # Static Assets
│       └── images/       # Images folder
└── ...config files
```

## Folder Descriptions

### 📁 `app/`
Next.js App Router ke saare pages yahaan hote hain. Har folder ek route banata hai.

### 📁 `api/`
Frontend se backend API calls ke liye client functions. Is folder mein sabhi API call functions organized hain.

### 📁 `routes/`
Route configuration, path definitions, aur route handlers ke liye folder.

### 📁 `public/assets/images/`
Static assets aur images ke liye folder. Images ko directly reference kar sakte hain: `/assets/images/photo.jpg`

## Usage Examples

### API Client Usage
```typescript
import { getAllUsers, createUser } from '@/api';

// Get all users
const users = await getAllUsers();

// Create a new user
const newUser = await createUser({ name: 'John', email: 'john@example.com' });
```

### Routes Usage
```typescript
import { usersRoutes } from '@/routes';

// Get route paths
const userListPath = usersRoutes.routes.list; // '/users'
const userDetailPath = usersRoutes.routes.detail('123'); // '/users/123'
```

### Image Usage
```tsx
import Image from 'next/image';

<Image 
  src="/assets/images/logo.png" 
  alt="Logo" 
  width={200} 
  height={200} 
/>
```

### Pages/Routes
- Home page: `/` (app/page.tsx)
- Users page: `/users` (app/users/page.tsx)
- Products page: `/products` (app/products/page.tsx)
- Orders page: `/orders` (app/orders/page.tsx)

## Environment Variables

Create a `.env.local` file:
```
NEXT_PUBLIC_API_URL=http://localhost:3001
```

