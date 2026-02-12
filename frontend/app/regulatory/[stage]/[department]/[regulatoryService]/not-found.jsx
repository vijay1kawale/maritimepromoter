import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-gray-300 dark:text-gray-600 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Regulatory Service Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            The regulatory service you're looking for doesn't exist or may have been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            href="/services" 
            className="inline-block bg-[#139A93] hover:bg-[#0f7a73] text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            Browse All Services
          </Link>
          
          <div className="text-sm text-gray-500 dark:text-gray-400">
            <Link href="/" className="hover:text-[#139A93] transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
