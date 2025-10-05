import Link from "next/link";

const NotFoundPage = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white p-6">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left: Illustration */}
        <div className="p-8 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-600">
          <div className="text-center text-white space-y-6 px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="160"
              height="160"
              viewBox="0 0 24 24"
              fill="none"
              className="mx-auto drop-shadow-lg"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="2"
              />
              <path
                d="M9 9l6 6M15 9l-6 6"
                stroke="white"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h2 className="text-3xl font-extrabold">Page Not Found</h2>
            <p className="text-sm opacity-90">
              Looks like the page you were trying to reach doesn&apos;t exist anymore
              or has moved.
            </p>
          </div>
        </div>

        {/* Right: Content */}
        <div className="p-8 flex flex-col justify-center gap-6">
          <div className="text-center md:text-left">
            <h1 className="text-6xl font-extrabold text-slate-800">404</h1>
            <p className="mt-2 text-slate-500">
              We couldn&apos;t find the page you&apos;re looking for.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-5 py-3 bg-slate-900 text-white rounded-lg shadow hover:scale-[0.99] transition"
            >
              Go to Homepage
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition"
            >
              Contact Support
            </Link>
          </div>

          <div className="mt-4 text-sm text-slate-500">
            <p>
              If you typed the URL manually, double-check the spelling. Or try
              one of the links above.
            </p>
          </div>

          <div className="mt-6 flex items-center gap-3 text-xs text-slate-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 2v6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 22v-6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 12h16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Report this issue if the problem persists.</span>
          </div>

          <div className="mt-6 text-xs text-slate-400">
            © {new Date().getFullYear()} MySite
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
