'use client';

import { TrendingUp, ExternalLink } from 'lucide-react';

interface Topic {
  id: string;
  name: string;
  posts: number;
  growth: number;
}

export function TrendingTopics() {
  // Mock trending topics - in production, fetch from Farcaster API
  const topics: Topic[] = [
    { id: '1', name: 'Base Chain', posts: 1234, growth: 45 },
    { id: '2', name: 'OnchainKit', posts: 892, growth: 32 },
    { id: '3', name: 'Frames v2', posts: 756, growth: 28 },
    { id: '4', name: 'DeFi Summer', posts: 645, growth: 18 },
    { id: '5', name: 'NFT Gaming', posts: 523, growth: 15 },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-5 h-5 text-accent" />
        <h3 className="text-lg font-semibold">Trending on Farcaster</h3>
      </div>

      <div className="space-y-2">
        {topics.map((topic, index) => (
          <div
            key={topic.id}
            className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-200 cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-accent/50">
                  {index + 1}
                </span>
                <div>
                  <h4 className="font-medium text-fg group-hover:text-accent transition-colors">
                    {topic.name}
                  </h4>
                  <p className="text-sm text-muted">
                    {topic.posts.toLocaleString()} posts
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="flex items-center gap-1 text-accent">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-medium">+{topic.growth}%</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-muted group-hover:text-accent transition-colors" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 rounded-xl bg-accent/10 border border-accent/20">
        <p className="text-sm text-fg">
          💡 <strong>Pro tip:</strong> Jump on trending topics early to maximize engagement!
        </p>
      </div>
    </div>
  );
}
