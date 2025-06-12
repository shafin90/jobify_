import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import { FaSearch, FaBriefcase, FaRocket } from 'react-icons/fa';

export default function Home() {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <section className="text-center py-24">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Find Your Dream Job
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Connect with top employers and discover opportunities that match your skills and aspirations.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/jobs"
              className="bg-blue-600 text-white px-7 py-2.5 rounded-md hover:bg-blue-700 transition-colors text-base font-medium"
            >
              Browse Jobs
            </Link>
            <Link
              href="/auth/register"
              className="border border-blue-600 text-blue-600 px-7 py-2.5 rounded-md hover:bg-blue-50 transition-colors text-base font-medium bg-white"
            >
              Sign Up
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-16 tracking-tight text-gray-900">Why Choose Jobify?</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center p-8 border border-gray-100 rounded-lg bg-white">
              <div className="text-blue-600 text-5xl mb-6 flex justify-center">
                <FaSearch />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Smart Job Search</h3>
              <p className="text-gray-500 text-base">
                Find jobs that match your skills and preferences with our advanced search.
              </p>
            </div>
            <div className="text-center p-8 border border-gray-100 rounded-lg bg-white">
              <div className="text-blue-600 text-5xl mb-6 flex justify-center">
                <FaBriefcase />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Top Employers</h3>
              <p className="text-gray-500 text-base">
                Connect with leading companies and startups looking for talent like you.
              </p>
            </div>
            <div className="text-center p-8 border border-gray-100 rounded-lg bg-white">
              <div className="text-blue-600 text-5xl mb-6 flex justify-center">
                <FaRocket />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Career Growth</h3>
              <p className="text-gray-500 text-base">
                Take the next step in your career with opportunities for growth and development.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="text-center max-w-2xl mx-auto bg-blue-50 rounded-lg py-12 px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Ready to Start Your Journey?</h2>
            <p className="text-lg mb-8 text-gray-600">
              Join thousands of job seekers and employers on Jobify today.
            </p>
            <Link
              href="/auth/register"
              className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors text-base font-medium"
            >
              Get Started
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
