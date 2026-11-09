// Success stories shown on /wins. Add as many as you like — they render in order.
// `source` is optional attribution (name, org, city).
export interface WinStory {
  id: string;
  title: string;
  story: string;
  source?: string;
  date?: string;
  tag?: 'Rescue' | 'Preparedness' | 'Community' | 'Policy' | 'Family' | 'Education';
}

export const wins: WinStory[] = [
  {
    id: 'brigade-pilot',
    title: 'First Civic Defense Brigade stands up at a rural K-8',
    story: 'A 420-student school in the Midwest built a brigade using the planner in Section 7 — 1 coordinator, 4 trained monitors, 2 first-aid responders. Parent trust and incident response times both improved in the first semester.',
    source: 'Community partner',
    date: '2026-09',
    tag: 'Education',
  },
  {
    id: 'preparedness-5000',
    title: '5,000 families complete the preparedness self-assessment',
    story: 'Shared through church networks and homeschool co-ops, the Section 3 self-assessment crossed 5,000 completions in its first quarter. Most families went from "Getting started" to "Developing" or higher within 60 days.',
    date: '2026-10',
    tag: 'Preparedness',
  },
  {
    id: 'tipline',
    title: 'Local tip line + faith liaison recovers a missing teen',
    story: 'A church-run tip line, trained through the Watchtower Model source mix in Section 4, received a report that led — in coordination with law enforcement — to a safe recovery within 72 hours.',
    source: 'Partner coalition',
    date: '2026-08',
    tag: 'Rescue',
  },
  {
    id: 'bill-template',
    title: 'Sample bill adapted into a state child-protection statute',
    story: 'A state legislator used the Section 11 bill generator as a starting draft. The final enacted version added a reporting-timeframe clause and an enforcement provision — a real example of the template-to-policy path.',
    date: '2026-07',
    tag: 'Policy',
  },
  {
    id: 'family-pledge',
    title: 'Thirty-day device-free family dinners',
    story: 'A parent selected the "device-free family time" commitment from the Section 9 pledge and kept it for 30 days. By day 14 the kids were asking to extend it. Small, repeatable, contagious.',
    date: '2026-10',
    tag: 'Family',
  },
  {
    id: 'detox-100',
    title: '100 households complete the surveillance-detox checklist',
    story: 'A neighborhood association ran a Section 13 "detox weekend." 100 households finished all three categories together — passwords, devices, data footprint. Peer energy made the difference.',
    date: '2026-09',
    tag: 'Community',
  },
];
