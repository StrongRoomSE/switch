import { useState } from 'react';
import { copyToClipboard } from '../lib/clipboard';
import { Btn } from './tools/primitives';

/** Simple "share your win" form that packages the story text for the owner to collect. */
export default function ShareYourWin() {
  const [title, setTitle] = useState('');
  const [story, setStory] = useState('');
  const [source, setSource] = useState('');
  const [done, setDone] = useState<string | null>(null);

  const packaged = () =>
    `TITLE: ${title}\n\nSTORY: ${story}\n\nFROM: ${source || '(anonymous)'}\nDATE: ${new Date().toISOString().slice(0, 10)}`;

  const copy = async () => {
    const ok = await copyToClipboard(packaged());
    setDone(ok ? 'Copied — paste it into an email or message.' : 'Could not copy — please copy manually below.');
    setTimeout(() => setDone(null), 4000);
  };

  const field =
    'mt-1 block w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800';

  return (
    <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
      <h2 className="text-xl font-semibold text-slate-800">Share your win</h2>
      <p className="mt-1 text-sm text-slate-600">
        Something small worked? Tell us. Stories are what keep momentum going.
      </p>
      <div className="mt-4 grid gap-3">
        <label className="text-sm font-medium text-slate-700">
          Headline
          <input
            className={field}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Our school started a safety coordinator rotation"
          />
        </label>
        <label className="text-sm font-medium text-slate-700">
          Your story (2–4 sentences)
          <textarea
            className={field}
            rows={4}
            value={story}
            onChange={(e) => setStory(e.target.value)}
            placeholder="What did you do, what happened, and what would you tell another family?"
          />
        </label>
        <label className="text-sm font-medium text-slate-700">
          Your name or group (optional)
          <input
            className={field}
            value={source}
            onChange={(e) => setSource(e.target.value)}
            placeholder="e.g. Sarah B., Lincoln Community Church"
          />
        </label>
        <div className="flex flex-wrap items-center gap-3">
          <Btn onClick={copy}>Copy my story</Btn>
          <span className="text-sm text-slate-600">{done}</span>
        </div>
        <p className="text-xs text-slate-500">
          Your story stays on your device until you copy and send it.
        </p>
      </div>
    </div>
  );
}
