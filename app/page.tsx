import LiveStreams from './components/LiveStreams';
import SessionForm from './components/SessionForm';
import SessionList from './components/SessionList';
import ArticleFeed from './components/ArticleFeed'; // Import the new component

// --- Sidebar Components (can be moved to their own files later) ---

const LeftSidebar = () => {
  const navItems = ["Home", "Discover", "Marketplace", "Leaderboard", "Wallet", "My profile", "Edit profile", "Settings"];
  return (
    <nav className="w-64 flex-shrink-0 p-4">
      <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Navigate</h2>
      <ul className="space-y-2">
        {navItems.map((item, index) => (
          <li key={item}>
            <a href="#" className={`flex items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${index === 0 ? 'bg-white/10 border border-blue-400/50 text-white' : 'text-gray-400 hover:bg-white/5'}`}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const RightSidebar = () => (
  <aside className="w-80 flex-shrink-0 p-4 space-y-6">
    <div className="bg-gray-800/50 p-4 rounded-xl">
      <h3 className="text-lg font-bold mb-3">Tools</h3>
      <div className="grid grid-cols-3 gap-2 text-center text-sm">
        <div className="bg-gray-700/50 p-3 rounded-lg">NIFTY</div>
        <div className="bg-gray-700/50 p-3 rounded-lg">BANKNIFTY</div>
        <div className="bg-gray-700/50 p-3 rounded-lg">BTCUSDT</div>
      </div>
    </div>
    <div className="bg-gray-800/50 p-4 rounded-xl">
      <h3 className="text-lg font-bold mb-3">Hot in last hour</h3>
      <p className="text-gray-400 text-sm">Data would appear here.</p>
    </div>
  </aside>
);

// --- Main Page ---

export default function HomePage() {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <LeftSidebar />
      <main className="flex-1 p-6 space-y-10 overflow-y-auto">
        
        {/* Main content sections */}
        <LiveStreams />
        
        {/* The new ArticleFeed component is now included */}
        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50">
           <ArticleFeed />
        </div>

        {/* Session management section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-white">Session Management</h2>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 space-y-8">
            <SessionForm />
            <SessionList />
          </div>
        </div>
      </main>
      <RightSidebar />
    </div>
  );
}
