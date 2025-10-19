'use client';

import { useState, useEffect } from 'react';
import { Sparkles, TrendingUp, MessageSquare } from 'lucide-react';
import { FeatureCard } from './components/FeatureCard';
import { CaptionGenerator } from './components/CaptionGenerator';
import { TrendingTopics } from './components/TrendingTopics';
import { SmartReplies } from './components/SmartReplies';

type Feature = 'caption' | 'trending' | 'replies' | null;

export default function Home() {
  const [activeFeature, setActiveFeature] = useState<Feature>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Signal frame is ready
    setIsReady(true);
  }, []);

  const features = [
    {
      id: 'caption' as const,
      icon: <Sparkles className="w-6 h-6" />,
      title: 'AI Caption Generator',
      description: 'Create engaging captions tailored to your topic and tone',
    },
    {
      id: 'trending' as const,
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Trending Topics',
      description: 'Discover what\'s hot on Farcaster right now',
    },
    {
      id: 'replies' as const,
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Smart Reply Suggestor',
      description: 'Get AI-powered reply suggestions for any cast',
    },
  ];

  return (
    <main className="min-h-screen bg-bg">
      <div className="max-w-2xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/20 mb-4">
            <Sparkles className="w-8 h-8 text-accent" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-fg mb-2">
            Farcaster AI-SocialPilot
          </h1>
          <p className="text-muted text-lg">
            Your AI assistant for engaging content and community management
          </p>
        </div>

        {/* Feature Selection */}
        {!activeFeature && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-fg mb-4">
              Choose a feature to get started
            </h2>
            {features.map((feature) => (
              <FeatureCard
                key={feature.id}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                onClick={() => setActiveFeature(feature.id)}
              />
            ))}
          </div>
        )}

        {/* Active Feature */}
        {activeFeature && (
          <div className="space-y-6">
            <button
              onClick={() => setActiveFeature(null)}
              className="text-accent hover:text-accent-hover flex items-center gap-2 mb-4"
            >
              ← Back to features
            </button>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                {features.find(f => f.id === activeFeature)?.icon}
                <h2 className="text-2xl font-bold text-fg">
                  {features.find(f => f.id === activeFeature)?.title}
                </h2>
              </div>

              {activeFeature === 'caption' && <CaptionGenerator />}
              {activeFeature === 'trending' && <TrendingTopics />}
              {activeFeature === 'replies' && <SmartReplies />}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted">
            Built with ❤️ for the Farcaster community
          </p>
        </div>
      </div>
    </main>
  );
}
