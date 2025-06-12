# Jobify - Modern Job Portal

A full-stack job portal application built with Next.js, MongoDB, and TypeScript.

## Features

- User authentication with NextAuth.js
- Job listing creation and management
- Advanced job search functionality
- Application tracking system
- Responsive design with Tailwind CSS
- TypeScript for type safety
- MongoDB with Mongoose for data persistence

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- MongoDB with Mongoose
- NextAuth.js for authentication
- Tailwind CSS for styling
- Zod for validation
- React Hook Form for form handling
- Axios for API requests

## Prerequisites

- Node.js 18+ and npm
- MongoDB instance (local or Atlas)

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/jobify.git
   cd jobify
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory with the following variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000
   JWT_SECRET=your_jwt_secret
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                 # App router pages
├── components/          # React components
├── lib/                 # Utility functions and configurations
├── models/             # Mongoose models
├── providers/          # Context providers
└── types/              # TypeScript type definitions
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
