'use client';

import { useState } from 'react';
import { Sparkles, Copy, RefreshCw } from 'lucide-react';

export function CaptionGenerator() {
  const [topic, setTopic] = useState('');
  const [tone, setTone] = useState<'casual' | 'professional' | 'witty'>('casual');
  const [caption, setCaption] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const generateCaption = async () => {
    if (!topic.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate AI generation
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const captions = {
      casual: [
        `Just vibing with ${topic} 🌟 What's your take on this?`,
        `${topic} hits different today 💭 Let's discuss!`,
        `Thoughts on ${topic}? Drop your hot takes below 👇`,
      ],
      professional: [
        `Exploring the nuances of ${topic}. Interested in your perspectives.`,
        `Deep dive into ${topic}: Key insights and implications.`,
        `${topic} analysis: What the data tells us.`,
      ],
      witty: [
        `${topic}? More like ${topic.split(' ')[0]}-tastic! 🎯`,
        `Breaking: Local person has opinions about ${topic}. More at 11.`,
        `${topic} walked into a bar... and here's what happened 🍻`,
      ],
    };
    
    const randomCaption = captions[tone][Math.floor(Math.random() * captions[tone].length)];
    setCaption(randomCaption);
    setIsGenerating(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(caption);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <label htmlFor="topic" className="block text-sm font-medium mb-2">
            What's your topic?
          </label>
          <input
            id="topic"
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g., Web3 gaming, NFT art, DeFi trends..."
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-fg placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Choose your tone
          </label>
          <div className="grid grid-cols-3 gap-2">
            {(['casual', 'professional', 'witty'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTone(t)}
                className={`
                  px-4 py-2 rounded-lg text-sm font-medium capitalize
                  transition-all duration-200
                  ${tone === t 
                    ? 'bg-accent text-white' 
                    : 'bg-white/5 text-muted hover:bg-white/10'
                  }
                `}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={generateCaption}
          disabled={!topic.trim() || isGenerating}
          className="w-full py-3 px-6 rounded-xl bg-accent text-white font-medium hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isGenerating ? (
            <>
              <RefreshCw className="w-5 h-5 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5" />
              Generate Caption
            </>
          )}
        </button>
      </div>

      {caption && (
        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
          <div className="flex items-start justify-between gap-4 mb-3">
            <p className="text-fg flex-1">{caption}</p>
            <button
              onClick={copyToClipboard}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-accent"
              aria-label="Copy caption"
            >
              <Copy className="w-4 h-4" />
            </button>
          </div>
          <button
            onClick={generateCaption}
            className="text-sm text-accent hover:text-accent-hover flex items-center gap-1"
          >
            <RefreshCw className="w-3 h-3" />
            Generate another
          </button>
        </div>
      )}
    </div>
  );
}
