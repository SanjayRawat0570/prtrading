import React from 'react';
import ArticleCard from './ArticleCard';

// --- The ArticleFeed Component ---
const ArticleFeed = () => {
  // Sample data for the article card
  const article = {
    authorName: 'Peter Path',
    authorHandle: 'ppath123',
    authorTitle: 'Tech & Finance Writer',
    avatarUrl: 'https://i.imgur.com/8s9V13v.png', // Placeholder avatar
    timestamp: '3 days ago',
    content: "Just published a new article on the impact of AI in algorithmic trading. Check it out! Link in bio. #AI #AlgorithmicTrading #Fintech",
    tags: ['#AI', '#AlgorithmicTrading', '#Fintech'],
    likes: 210,
    comments: 75,
    shares: 42,
    views: '31,000',
  };

  return (
    <section className="max-w-4xl mx-auto">
      {/* In a real app, you would map over an array of articles */}
      <ArticleCard {...article} />
    </section>
  );
};

export default ArticleFeed;
