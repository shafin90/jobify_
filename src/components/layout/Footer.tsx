import Link from 'next/link';
import { FaBriefcase, FaUser, FaBuilding, FaInfoCircle, FaEnvelope, FaUserPlus } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <FaBriefcase className="text-blue-400" />
              Jobify
            </h3>
            <p className="text-gray-400">
              Find your dream job or hire the best talent for your company.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <FaUser className="text-blue-400" />
              For Job Seekers
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/jobs" className="text-gray-400 hover:text-white flex items-center gap-2">
                  <FaBriefcase className="text-sm" />
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link href="/auth/register" className="text-gray-400 hover:text-white flex items-center gap-2">
                  <FaUserPlus className="text-sm" />
                  Create Account
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <FaBuilding className="text-blue-400" />
              For Employers
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/jobs/create" className="text-gray-400 hover:text-white flex items-center gap-2">
                  <FaBriefcase className="text-sm" />
                  Post a Job
                </Link>
              </li>
              <li>
                <Link href="/auth/register" className="text-gray-400 hover:text-white flex items-center gap-2">
                  <FaUserPlus className="text-sm" />
                  Create Account
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <FaInfoCircle className="text-blue-400" />
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white flex items-center gap-2">
                  <FaInfoCircle className="text-sm" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white flex items-center gap-2">
                  <FaEnvelope className="text-sm" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Jobify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 