import React from 'react';
import Link from 'next/link';
import StreamCard from './StreamCard';

const LiveStreams = () => {
  const sampleStreams = [
    { title: 'Hedged short straddles · risk plan', viewers: '1,210', profit: '120k', price: 49, isFree: false },
    { title: 'Open interest shifts pre-op', viewers: '640', profit: '80k', isFree: true },
    { title: 'Advanced option selling masterclass', viewers: '2,500', profit: '350k', price: 99, isFree: false }
  ];

  return (
    // Changed to section for better semantics
    <section>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Live & upcoming</h2>
        <Link href="/" className="text-sm text-gray-400 hover:text-white">
          Browse live
        </Link>
      </div>
      {/* Removed the scrollbar plugin classes and used a simple gap */}
      <div className="flex gap-6 overflow-x-auto p-2 -mx-2">
        {sampleStreams.map((stream, index) => (
          <StreamCard
            key={index}
            title={stream.title}
            viewers={stream.viewers}
            profit={stream.profit}
            price={stream.price}
            isFree={stream.isFree}
          />
        ))}
      </div>
    </section>
  );
};

export default LiveStreams;