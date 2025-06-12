'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { getJobs, getApplications } from '@/lib/api';
import Layout from '@/components/layout/Layout';

interface Job {
  _id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  createdAt: string;
}

interface Application {
  _id: string;
  job: Job;
  status: string;
  createdAt: string;
}

export default function DashboardPage() {
  const { data: session } = useSession();
  const router = useRouter();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        if (session?.user.role === 'employer') {
          const response = await getJobs({ employer: session.user.id });
          setJobs(response.jobs);
        } else {
          const response = await getApplications();
          setApplications(response.applications);
        }
      } catch (error) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    if (session) {
      fetchData();
    }
  }, [session]);

  if (!session) {
    return (
      <Layout>
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-gray-900">Access Denied</h1>
          <p className="mt-2 text-gray-600">Please sign in to view your dashboard.</p>
        </div>
      </Layout>
    );
  }

  if (loading) {
    return (
      <Layout>
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="text-center py-12 text-red-600">{error}</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          {session.user.role === 'employer' && (
            <button
              onClick={() => router.push('/jobs/create')}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Post a Job
            </button>
          )}
        </div>

        {session.user.role === 'employer' ? (
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Your Job Listings
            </h2>
            {jobs.length === 0 ? (
              <p className="text-gray-600">You haven't posted any jobs yet.</p>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {jobs.map((job) => (
                  <div
                    key={job._id}
                    className="bg-white shadow rounded-lg overflow-hidden"
                  >
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {job.title}
                      </h3>
                      <p className="mt-2 text-gray-600">{job.company}</p>
                      <p className="mt-1 text-gray-600">{job.location}</p>
                      <div className="mt-4 flex justify-between items-center">
                        <span className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
                          {job.type}
                        </span>
                        <button
                          onClick={() => router.push(`/jobs/${job._id}`)}
                          className="text-blue-600 hover:text-blue-700 font-medium"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Your Applications
            </h2>
            {applications.length === 0 ? (
              <p className="text-gray-600">You haven't applied to any jobs yet.</p>
            ) : (
              <div className="space-y-6">
                {applications.map((application) => (
                  <div
                    key={application._id}
                    className="bg-white shadow rounded-lg overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {application.job.title}
                          </h3>
                          <p className="mt-2 text-gray-600">
                            {application.job.company}
                          </p>
                          <p className="mt-1 text-gray-600">
                            {application.job.location}
                          </p>
                        </div>
                        <span
                          className={`px-3 py-1 text-sm font-medium rounded-full ${
                            application.status === 'accepted'
                              ? 'bg-green-100 text-green-600'
                              : application.status === 'rejected'
                              ? 'bg-red-100 text-red-600'
                              : 'bg-yellow-100 text-yellow-600'
                          }`}
                        >
                          {application.status.charAt(0).toUpperCase() +
                            application.status.slice(1)}
                        </span>
                      </div>
                      <div className="mt-4 flex justify-between items-center">
                        <span className="text-sm text-gray-500">
                          Applied on{' '}
                          {new Date(application.createdAt).toLocaleDateString()}
                        </span>
                        <button
                          onClick={() => router.push(`/jobs/${application.job._id}`)}
                          className="text-blue-600 hover:text-blue-700 font-medium"
                        >
                          View Job
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
} 