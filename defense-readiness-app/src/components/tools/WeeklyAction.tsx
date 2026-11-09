import { useState } from 'react';
import { weeklyActions, weekOf } from '../../data/tools/weeklyActions';
import { Btn } from './primitives';

export default function WeeklyAction() {
  const [week, setWeek] = useState<number>(weekOf());
  const current = weeklyActions.find((w) => w.week === week) ?? weeklyActions[0];

  return (
    <div>
      <div className="rounded-xl border border-green-200 bg-green-50 p-6">
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-green-700">This week — Week {current.week}</p>
          <div className="flex gap-2">
            <Btn variant="ghost" onClick={() => setWeek(Math.max(1, week - 1))}>← Prev</Btn>
            <Btn variant="ghost" onClick={() => setWeek(Math.min(52, week + 1))}>Next →</Btn>
          </div>
        </div>
        <h2 className="mt-2 text-2xl font-bold text-slate-900">{current.title}</h2>
        <p className="mt-2 text-slate-700">{current.detail}</p>
        {current.section && (
          <a href={`/sections/${current.section}`} className="mt-3 inline-block text-sm font-medium text-green-800 hover:underline">
            Related section →
          </a>
        )}
      </div>

      <h2 className="mt-10 text-lg font-semibold text-slate-800">All 52 actions</h2>
      <ol className="mt-4 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
        {weeklyActions.map((a) => (
          <li key={a.week} className="flex gap-4 p-4">
            <div className="w-12 shrink-0 text-right text-sm font-mono text-slate-400">#{a.week}</div>
            <div>
              <div className="font-medium text-slate-800">{a.title}</div>
              <div className="text-sm text-slate-600">{a.detail}</div>
              {a.section && (
                <a href={`/sections/${a.section}`} className="text-xs text-blue-700 hover:underline">
                  Related section →
                </a>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
