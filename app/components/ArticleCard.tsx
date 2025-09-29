import React from 'react';
import Image from 'next/image';

// --- SVG Icon Components (self-contained for simplicity) ---
const MoreIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
);
const ThumbsUpIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 10v12"></path><path d="M15.5 10l-3-7-3 7h11a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-3.5"></path></svg>
);
const CommentIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
);
const ShareIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>
);
const ViewsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
);


// --- Component Props Interface ---
interface ArticleCardProps {
  authorName: string;
  authorHandle: string;
  authorTitle: string;
  avatarUrl: string;
  timestamp: string;
  content: string;
  tags: string[];
  likes: number;
  comments: number;
  shares: number;
  views: string;
}

// --- The ArticleCard Component ---
const ArticleCard: React.FC<ArticleCardProps> = (props) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 text-gray-800 shadow-sm w-full">
      {/* Card Header */}
      <div className="flex items-start gap-4">
        <Image src={props.avatarUrl} alt={`${props.authorName}'s avatar`} width={48} height={48} className="rounded-full" />
        <div className="flex-grow">
          <div className="flex items-center gap-2">
            <span className="font-bold">{props.authorName}</span>
            <button className="text-sm text-white bg-blue-500 hover:bg-blue-600 px-4 py-1 rounded-full font-semibold transition">Follow</button>
          </div>
          <p className="text-sm text-gray-500">{props.authorTitle} · @{props.authorHandle}</p>
        </div>
        <div className="flex items-center gap-3 text-sm text-gray-500 flex-shrink-0">
          <span>{props.timestamp}</span>
          <button className="hover:bg-gray-100 rounded-full p-1"><MoreIcon /></button>
        </div>
      </div>

      {/* Card Body */}
      <div className="mt-4">
        <p className="text-gray-700">
          {props.content.split(' ').map((word, index) => 
            word.startsWith('#') ? <span key={index} className="text-blue-500 font-medium cursor-pointer hover:underline"> {word}</span> : ` ${word}`
          )}
        </p>
        <div className="mt-4 border border-gray-200 rounded-lg h-64 bg-gray-50 flex items-center justify-center">
          <span className="text-gray-400 text-sm">Image or Link Preview</span>
        </div>
      </div>

      {/* Card Footer */}
      <div className="mt-4 flex justify-between items-center">
        <div className="flex items-center gap-4 text-gray-500">
          <button className="flex items-center gap-2 hover:text-blue-500 transition"><ThumbsUpIcon /> <span className="text-sm">{props.likes}</span></button>
          <button className="flex items-center gap-2 hover:text-blue-500 transition"><CommentIcon /> <span className="text-sm">{props.comments}</span></button>
          <button className="flex items-center gap-2 hover:text-blue-500 transition"><ShareIcon /> <span className="text-sm">{props.shares}</span></button>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <ViewsIcon />
          <span>{props.views} Views</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;