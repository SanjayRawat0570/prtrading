import React from 'react';

// --- Icon Component ---
const VerifiedIcon = () => (
  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
  </svg>
);

// --- Component Props Interface ---
interface PostCardProps {
  content: string;
  timestamp: string;
  isVerified: boolean;
  attachment?: {
    title: string;
    price: number;
  };
}

// --- The PostCard Component ---
const PostCard: React.FC<PostCardProps> = ({ content, timestamp, isVerified, attachment }) => {
  return (
    <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-4">
      <div className="flex items-start gap-4">
        {/* Blue Icon */}
        <div className="w-10 h-10 bg-blue-600/50 rounded-lg flex-shrink-0"></div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-1">
            {isVerified && (
              <div className="inline-flex items-center gap-1.5 bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">
                <VerifiedIcon />
                <span className="text-xs font-medium">Verified</span>
              </div>
            )}
            <span className="text-xs text-gray-500 ml-auto">{timestamp}</span>
          </div>
          <p className="text-gray-300 leading-relaxed">{content}</p>
        </div>
      </div>

      {/* Attachment Section (Optional) */}
      {attachment && (
        <div className="mt-4 ml-14 pl-1 flex justify-between items-center bg-gray-900/50 p-3 rounded-lg">
            <span className="text-sm text-gray-300 font-medium">{attachment.title}</span>
            <button className="bg-blue-600 text-white border-none rounded-lg px-5 py-2 text-sm font-semibold cursor-pointer transition hover:bg-blue-700">
                Unlock ₹{attachment.price}
            </button>
        </div>
      )}
    </div>
  );
};

export default PostCard;