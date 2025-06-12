'use client';

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { FaBriefcase, FaUser, FaSignOutAlt, FaSignInAlt, FaUserPlus } from 'react-icons/fa';

interface User {
  id: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
  role: 'employer' | 'jobseeker';
}

export default function Navbar() {
  const { data: session } = useSession();
  const user = session?.user as User | undefined;

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <FaBriefcase className="text-blue-600" />
            Jobify
          </Link>

          <div className="flex items-center space-x-4">
            <Link href="/jobs" className="text-gray-600 hover:text-gray-900 flex items-center gap-1">
              <FaBriefcase className="text-sm" />
              Jobs
            </Link>
            
            {session ? (
              <>
                <Link href="/dashboard" className="text-gray-600 hover:text-gray-900 flex items-center gap-1">
                  <FaUser className="text-sm" />
                  Dashboard
                </Link>
                {user?.role === 'employer' && (
                  <Link href="/jobs/create" className="text-gray-600 hover:text-gray-900 flex items-center gap-1">
                    <FaBriefcase className="text-sm" />
                    Post a Job
                  </Link>
                )}
                <button
                  onClick={() => signOut()}
                  className="text-gray-600 hover:text-gray-900 flex items-center gap-1"
                >
                  <FaSignOutAlt className="text-sm" />
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link href="/auth/signin" className="text-gray-600 hover:text-gray-900 flex items-center gap-1">
                  <FaSignInAlt className="text-sm" />
                  Sign In
                </Link>
                <Link
                  href="/auth/register"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center gap-1"
                >
                  <FaUserPlus className="text-sm" />
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
} 