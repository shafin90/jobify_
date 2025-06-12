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
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-gray-900 tracking-tight">
            <FaBriefcase className="text-blue-600 text-2xl" />
            Jobify
          </Link>

          <div className="flex items-center gap-8">
            <Link href="/jobs" className="text-gray-700 hover:text-blue-600 transition-colors text-base font-medium flex items-center gap-1">
              <FaBriefcase className="text-sm" />
              Jobs
            </Link>
            {session ? (
              <>
                <Link href="/dashboard" className="text-gray-700 hover:text-blue-600 transition-colors text-base font-medium flex items-center gap-1">
                  <FaUser className="text-sm" />
                  Dashboard
                </Link>
                {user?.role === 'employer' && (
                  <Link href="/jobs/create" className="text-gray-700 hover:text-blue-600 transition-colors text-base font-medium flex items-center gap-1">
                    <FaBriefcase className="text-sm" />
                    Post a Job
                  </Link>
                )}
                <button
                  onClick={() => signOut()}
                  className="text-gray-700 hover:text-blue-600 transition-colors text-base font-medium flex items-center gap-1"
                >
                  <FaSignOutAlt className="text-sm" />
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link href="/auth/signin" className="text-gray-700 hover:text-blue-600 transition-colors text-base font-medium flex items-center gap-1">
                  <FaSignInAlt className="text-sm" />
                  Sign In
                </Link>
                <Link
                  href="/auth/register"
                  className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition-colors text-base font-medium flex items-center gap-1"
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