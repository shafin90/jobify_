'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { getJob, applyToJob } from '@/lib/api';
import Layout from '@/components/layout/Layout';

interface Job {
  _id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  salary?: {
    min: number;
    max: number;
    currency: string;
  };
  employer: {
    _id: string;
    name: string;
    company: string;
  };
  createdAt: string;
}

export default function JobDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const { data: session } = useSession();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isApplying, setIsApplying] = useState(false);
  const [applicationError, setApplicationError] = useState('');

  useEffect(() => {
    const fetchJob = async () => {
      try {
        setLoading(true);
        const data = await getJob(id as string);
        setJob(data);
      } catch (error) {
        setError('Failed to fetch job details');
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  const handleApply = async () => {
    if (!session) {
      router.push(`/auth/signin?from=/jobs/${id}`);
      return;
    }

    try {
      setIsApplying(true);
      setApplicationError('');

      await applyToJob(id as string, {
        resume: 'resume-url', // This should be handled with file upload
        coverLetter: '',
      });

      router.push('/dashboard');
    } catch (error: any) {
      setApplicationError(
        error.response?.data?.message || 'Failed to submit application'
      );
    } finally {
      setIsApplying(false);
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
        </div>
      </Layout>
    );
  }

  if (error || !job) {
    return (
      <Layout>
        <div className="text-center py-12 text-red-600">
          {error || 'Job not found'}
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-6 py-8">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{job.title}</h1>
                <p className="mt-2 text-xl text-gray-600">{job.company}</p>
              </div>
              <span className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
                {job.type}
              </span>
            </div>

            <div className="mt-6 flex items-center text-gray-600">
              <svg
                className="h-5 w-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {job.location}
            </div>

            {job.salary && (
              <div className="mt-2 text-gray-600">
                <span className="font-medium">Salary:</span>{' '}
                {job.salary.min.toLocaleString()} - {job.salary.max.toLocaleString()}{' '}
                {job.salary.currency}
              </div>
            )}

            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-900">Description</h2>
              <p className="mt-4 text-gray-700 whitespace-pre-wrap">
                {job.description}
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-900">Requirements</h2>
              <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2">
                {job.requirements.map((requirement, index) => (
                  <li key={index}>{requirement}</li>
                ))}
              </ul>
            </div>

            {applicationError && (
              <div className="mt-6 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
                {applicationError}
              </div>
            )}

            <div className="mt-8">
              <button
                onClick={handleApply}
                disabled={isApplying}
                className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isApplying ? 'Submitting...' : 'Apply Now'}
              </button>
            </div>
          </div>
        </div>
      </div>
 