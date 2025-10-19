'use client';

import { useState } from 'react';
import { MessageSquare, ThumbsUp, Lightbulb, Zap } from 'lucide-react';

export function SmartReplies() {
  const [context, setContext] = useState('');
  const [replies, setReplies] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateReplies = async () => {
    if (!context.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate AI generation
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    const replyTemplates = [
      `Great point! I'd add that ${context.toLowerCase()} opens up interesting possibilities.`,
      `This is exactly what the community needs. ${context} 🎯`,
      `Love this perspective on ${context}. Have you considered the implications for...?`,
      `Couldn't agree more! ${context} is going to be huge.`,
    ];
    
    setReplies(replyTemplates.slice(0, 3));
    setIsGenerating(false);
  };

  const replyTypes = [
    { icon: ThumbsUp, label: 'Supportive', color: 'text-green-400' },
    { icon: Lightbulb, label: 'Insightful', color: 'text-yellow-400' },
    { icon: Zap, label: 'Engaging', color: 'text-accent' },
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <label htmlFor="context" className="block text-sm font-medium mb-2">
            What are you replying to?
          </label>
          <textarea
            id="context"
            value={context}
            onChange={(e) => setContext(e.target.value)}
            placeholder="Paste the cast you want to reply to..."
            rows={4}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-fg placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent resize-none"
          />
        </div>

        <button
          onClick={generateReplies}
          disabled={!context.trim() || isGenerating}
          className="w-full py-3 px-6 rounded-xl bg-accent text-white font-medium hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isGenerating ? (
            <>
              <MessageSquare className="w-5 h-5 animate-pulse" />
              Generating replies...
            </>
          ) : (
            <>
              <MessageSquare className="w-5 h-5" />
              Generate Smart Replies
            </>
          )}
        </button>
      </div>

      {replies.length > 0 && (
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-muted">Suggested replies:</h4>
          {replies.map((reply, index) => {
            const ReplyType = replyTypes[index];
            return (
              <div
                key={index}
                className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-accent/30 transition-all duration-200 cursor-pointer group"
              >
                <div className="flex items-start gap-3">
                  <ReplyType.icon className={`w-5 h-5 ${ReplyType.color} flex-shrink-0 mt-0.5`} />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium text-muted">
                        {ReplyType.label}
                      </span>
                    </div>
                    <p className="text-fg group-hover:text-accent transition-colors">
                      {reply}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
