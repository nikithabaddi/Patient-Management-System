import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserPlus, Search, Users, DatabaseIcon } from 'lucide-react';
import { getAllPatients } from '../services/DatabaseService';
import { useDatabaseContext } from '../context/DatabaseContext';

const Dashboard: React.FC = () => {
  const { isLoading, isInitialized, error } = useDatabaseContext();
  const [patientCount, setPatientCount] = useState<number>(0);

  useEffect(() => {
    const loadData = async () => {
      if (isInitialized) {
        try {
          const patients = await getAllPatients();
          setPatientCount(patients.length);
        } catch (err) {
          console.error('Error loading dashboard data:', err);
        }
      }
    };

    loadData();
  }, [isInitialized]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-error-50 border-l-4 border-error-600 p-4 rounded-md">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-error-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-error-700">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-transition">
      <h1 className="text-3xl font-bold text-gray-900 pl-0 mb-2">Dashboard</h1>
      <div className="flex flex-row items-stretch gap-8 pl-0 mb-16">
        <div className="flex-1 text-left h-full self-stretch flex flex-col justify-start">
          <p className="text-base text-pink-800 text-left mt-0 mb-4">
            Welcome to Med Blocks, your patient registration system. Effortlessly manage patient records, streamline registrations, and access vital information—all in one secure and user-friendly platform.
          </p>
          <p className="text-base text-pink-800 text-left mt-0">
            Designed for healthcare professionals, Med Blocks helps you focus on what matters most: delivering excellent patient care. Enjoy secure access, intuitive workflows, and real-time updates to keep your clinic running smoothly and efficiently.
          </p>
        </div>
        <div className="flex-1 h-full self-stretch flex">
          <div className="bg-white overflow-hidden shadow-2xl rounded-lg h-full flex flex-col justify-between w-full min-h-[180px]">
            <div className="p-5 flex-1 flex flex-col justify-between h-full">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-primary-100 rounded-md p-3">
                  <Users className="h-6 w-6 text-primary-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Total Patients
                    </dt>
                    <dd>
                      <div className="text-lg font-medium text-gray-900">{patientCount}</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-5 py-3 flex items-center justify-between mt-auto">
              <div className="text-sm">
                <Link
                  to="/patients"
                  className="btn btn-secondary"
                >
                  View all patients
                </Link>
              </div>
              <span className="inline-flex rounded-md shadow-sm">
                <Link
                  to="/register"
                  className="btn btn-primary inline-flex items-center"
                >
                  <UserPlus className="h-4 w-4 mr-1" /> Register New
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* Register Patients Card */}
        <div className="bg-white overflow-hidden shadow-2xl rounded-lg min-h-[180px]">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-primary-100 rounded-md p-3">
                <UserPlus className="h-6 w-6 text-primary-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <h3 className="text-lg font-medium text-gray-900">Register Patients</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Add new patients to the system with comprehensive information
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-5 py-3">
            <div className="text-sm">
              <Link
                to="/register"
                className="btn btn-primary"
              >
                Register new patient →
              </Link>
            </div>
          </div>
        </div>

        {/* Query Patients Card */}
        <div className="bg-white overflow-hidden shadow-2xl rounded-lg min-h-[180px]">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-secondary-100 rounded-md p-3">
                <Search className="h-6 w-6 text-secondary-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <h3 className="text-lg font-medium text-gray-900">Query Records</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Search and filter patient records using custom SQL queries
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-5 py-3">
            <div className="text-sm">
              <Link
                to="/query"
                className="btn btn-secondary"
              >
                Go to query interface →
              </Link>
            </div>
          </div>
        </div>

        {/* Database Info Card */}
        <div className="bg-white overflow-hidden shadow-2xl rounded-lg min-h-[180px]">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-accent-100 rounded-md p-3">
                <DatabaseIcon className="h-6 w-6 text-accent-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <h3 className="text-lg font-medium text-gray-900">Database Status</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Using Pglite for in-browser storage with multi-tab support
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-5 py-3">
            <div className="text-sm flex items-center">
              <span className="h-2 w-2 bg-success-500 rounded-full mr-2"></span>
              <span className="text-gray-600">Database initialized successfully</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
