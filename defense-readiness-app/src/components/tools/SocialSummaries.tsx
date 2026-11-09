import { useState } from 'react';
import { TOC } from '../../data/toc';
import { copyToClipboard } from '../../lib/clipboard';
import { Btn } from './primitives';

function summaryText(number: number, title: string, summary: string): string {
  return `📘 Section ${number}: ${title} — ${summary}\n\nRead: https://defense-readiness.vercel.app/sections/${slugFor(number)}`;
}

function slugFor(number: number): string {
  return TOC.find((t) => t.number === number)?.slug ?? '';
}

export default function SocialSummaries() {
  const [copied, setCopied] = useState<string | null>(null);
  const copy = async (text: string, key: string) => {
    const ok = await copyToClipboard(text);
    if (ok) {
      setCopied(key);
      setTimeout(() => setCopied(null), 1500);
    }
  };

  return (
    <ul className="grid gap-3">
      {TOC.map((e) => {
        const text = summaryText(e.number, e.title, e.summary);
        return (
          <li key={e.slug} className="rounded-xl border border-slate-200 bg-white p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wide text-blue-700">Section {e.number}</div>
                <div className="font-semibold text-slate-800">{e.title}</div>
                <p className="mt-1 text-sm text-slate-600">{e.summary}</p>
              </div>
              <Btn onClick={() => copy(text, e.slug)}>
                {copied === e.slug ? 'Copied!' : 'Copy'}
              </Btn>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
