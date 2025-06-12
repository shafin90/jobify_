import Link from 'next/link';
import Layout from '@/components/layout/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="text-center py-20">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Find Your Dream Job
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with top employers and discover opportunities that match your skills and aspirations.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/jobs"
              className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700"
            >
              Browse Jobs
            </Link>
            <Link
              href="/auth/register"
              className="bg-white text-blue-600 px-8 py-3 rounded-md border border-blue-600 hover:bg-blue-50"
            >
              Sign Up
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Jobify?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-blue-600 text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">Smart Job Search</h3>
              <p className="text-gray-600">
                Find jobs that match your skills and preferences with our advanced search.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-blue-600 text-4xl mb-4">💼</div>
              <h3 className="text-xl font-semibold mb-2">Top Employers</h3>
              <p className="text-gray-600">
                Connect with leading companies and startups looking for talent like you.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-blue-600 text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">Career Growth</h3>
              <p className="text-gray-600">
                Take the next step in your career with opportunities for growth and development.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 text-white py-20 rounded-lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of job seekers and employers on Jobify today.
            </p>
            <Link
              href="/auth/register"
              className="bg-white text-blue-600 px-8 py-3 rounded-md hover:bg-blue-50"
            >
              Get Started
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
