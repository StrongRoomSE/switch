import { useState } from 'react';
import { nationalResources, stateResources, states, type Resource } from '../../data/tools/resources';

function ResourceCard({ r }: { r: Resource }) {
  return (
    <li className="rounded-lg border border-slate-200 bg-white p-4">
      <div className="font-semibold text-slate-800">{r.label}</div>
      {r.phone && (
        <div className="mt-1 text-lg font-mono text-blue-700">
          <a href={`tel:${r.phone.replace(/[^+\d]/g, '')}`} className="hover:underline">{r.phone}</a>
        </div>
      )}
      <p className="mt-1 text-sm text-slate-600">{r.blurb}</p>
      {r.url && (
        <a href={r.url} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-sm text-blue-700 hover:underline">
          {r.url} ↗
        </a>
      )}
    </li>
  );
}

export default function LocalResources() {
  const [state, setState] = useState('All');
  const stateList = stateResources[state] ?? [];

  return (
    <div>
      <label className="flex flex-wrap items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
        <span className="font-medium text-slate-700">Your state:</span>
        <select
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm"
        >
          {states.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        <span className="text-sm text-slate-500">State-specific resources appear below the national list.</span>
      </label>

      <h2 className="mt-8 text-lg font-semibold text-slate-800">National — 24/7</h2>
      <ul className="mt-3 grid gap-3 sm:grid-cols-2">
        {nationalResources.map((r) => <ResourceCard key={r.label} r={r} />)}
      </ul>

      <h2 className="mt-8 text-lg font-semibold text-slate-800">{state === 'All' ? 'State-specific' : `${state} resources`}</h2>
      {stateList.length === 0 ? (
        <p className="mt-3 rounded-lg border border-dashed border-slate-300 bg-white p-4 text-sm text-slate-500">
          No state-specific resources listed yet{state !== 'All' ? ` for ${state}` : ''}. Suggest additions through the Wins page.
        </p>
      ) : (
        <ul className="mt-3 grid gap-3 sm:grid-cols-2">
          {stateList.map((r) => <ResourceCard key={r.label} r={r} />)}
        </ul>
      )}
    </div>
  );
}
