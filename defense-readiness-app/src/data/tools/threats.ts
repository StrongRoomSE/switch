// Section 5 — threat-map. Markers placed on a simplified US map.
// x/y are PERCENTAGES (0-100) over the map image box. severity: 1 (low) - 3 (high).
// Edit this file freely: add rows to `markers`, or extend `categories` to add a new filter.
export type ThreatCategory =
  | 'Border'
  | 'Cartel'
  | 'Internal'
  | 'Cyber'
  | 'Synthetic Media'
  | 'Fentanyl'
  | 'Bio / Health'
  | 'Financial Networks';

export interface ThreatMarker {
  id: string;
  label: string;
  category: ThreatCategory;
  x: number;
  y: number;
  severity: 1 | 2 | 3;
  detail: string;
  solution?: string;
  updated?: string; // YYYY-MM-DD
}

export interface ThreatMapData {
  categories: ThreatCategory[];
  markers: ThreatMarker[];
  lastUpdated: string;
}

export const threats: ThreatMapData = {
  lastUpdated: '2026-11-09',
  categories: [
    'Border',
    'Cartel',
    'Fentanyl',
    'Cyber',
    'Synthetic Media',
    'Bio / Health',
    'Financial Networks',
    'Internal',
  ],
  markers: [
    // Border & cartel
    { id: 'sw-border', label: 'Southwest border corridor', category: 'Border', x: 30, y: 78, severity: 3,
      detail: 'High-traffic crossing and smuggling corridor.',
      solution: 'Resource lawful border enforcement; fund community tip lines and victim-identification training.',
      updated: '2026-11-09' },
    { id: 'gulf', label: 'Gulf trafficking routes', category: 'Cartel', x: 47, y: 82, severity: 3,
      detail: 'Maritime and overland smuggling activity.',
      solution: 'Expand interagency maritime cooperation; support port-city awareness programs.',
      updated: '2026-11-09' },
    { id: 'sw-distribution', label: 'Southwest distribution hub', category: 'Cartel', x: 33, y: 60, severity: 2,
      detail: 'Regional distribution and staging.',
      solution: 'Fund disruption of logistics nodes through authorized law-enforcement operations.',
      updated: '2026-11-09' },
    { id: 'west-coast', label: 'West coast port', category: 'Cartel', x: 9, y: 45, severity: 2,
      detail: 'Port-of-entry contraband risk.',
      solution: 'Invest in scanning technology and K-9 units at major ports.',
      updated: '2026-11-09' },

    // Fentanyl
    { id: 'fent-corridor', label: 'Fentanyl corridor (SW to Midwest)', category: 'Fentanyl', x: 40, y: 65, severity: 3,
      detail: 'Primary precursor and distribution path identified by DEA reporting.',
      solution: 'Support harm-reduction, parent-education programs, and lawful interdiction.',
      updated: '2026-11-09' },
    { id: 'fent-northeast', label: 'Northeast distribution networks', category: 'Fentanyl', x: 83, y: 30, severity: 3,
      detail: 'Urban distribution reaching schools and campuses.',
      solution: 'Naloxone access, school counselor training, early-warning parent networks.',
      updated: '2026-11-09' },

    // Cyber
    { id: 'cyber-grid', label: 'Energy-grid probing (multi-region)', category: 'Cyber', x: 55, y: 45, severity: 3,
      detail: 'Reports of nation-state scanning of grid operators.',
      solution: 'Fund CISA grants for local utilities; family blackout preparedness.',
      updated: '2026-11-09' },
    { id: 'cyber-water', label: 'Water-utility intrusions', category: 'Cyber', x: 70, y: 50, severity: 2,
      detail: 'Small water systems targeted via exposed PLCs.',
      solution: 'Network segmentation grants; rural utility tech-support cooperatives.',
      updated: '2026-11-09' },
    { id: 'cyber-school', label: 'K-12 ransomware wave', category: 'Cyber', x: 65, y: 35, severity: 2,
      detail: 'Districts hit by ransomware; student data at risk.',
      solution: 'State IT-shared-services and immutable backups for every district.',
      updated: '2026-11-09' },

    // Synthetic media
    { id: 'deepfake-election', label: 'Deepfake election influence', category: 'Synthetic Media', x: 78, y: 25, severity: 3,
      detail: 'AI-generated audio/video impersonating candidates and officials.',
      solution: 'Media-literacy curriculum; provenance-verification tools in newsrooms.',
      updated: '2026-11-09' },
    { id: 'deepfake-exploit', label: 'Minor-exploitation deepfakes', category: 'Synthetic Media', x: 50, y: 55, severity: 3,
      detail: 'Non-consensual synthetic imagery targeting children and teens.',
      solution: 'Report via NCMEC CyberTipline; support state AI-NCII laws; parent controls.',
      updated: '2026-11-09' },

    // Bio / Health
    { id: 'bio-outbreak', label: 'Emerging zoonotic surveillance', category: 'Bio / Health', x: 25, y: 50, severity: 2,
      detail: 'Spillover monitoring at livestock/wildlife interfaces.',
      solution: 'Fund One Health programs; stockpile medical countermeasures.',
      updated: '2026-11-09' },
    { id: 'bio-supplychain', label: 'Pharmaceutical supply dependence', category: 'Bio / Health', x: 55, y: 60, severity: 2,
      detail: 'Over-reliance on foreign API manufacturing.',
      solution: 'Reshore critical-drug manufacturing; build strategic API reserves.',
      updated: '2026-11-09' },

    // Financial
    { id: 'fin-crypto', label: 'Illicit crypto flows', category: 'Financial Networks', x: 72, y: 60, severity: 2,
      detail: 'Mixers and shell exchanges moving trafficking proceeds.',
      solution: 'Support FinCEN/IRS-CI capacity; blockchain-analytics training for state AGs.',
      updated: '2026-11-09' },
    { id: 'fin-hawala', label: 'Informal value-transfer networks', category: 'Financial Networks', x: 45, y: 40, severity: 1,
      detail: 'Unregistered money-transmitter activity.',
      solution: 'Community outreach for lawful banking access; targeted enforcement.',
      updated: '2026-11-09' },

    // Internal
    { id: 'urban-ne', label: 'Online recruitment / exploitation (NE)', category: 'Internal', x: 82, y: 32, severity: 2,
      detail: 'Online grooming and recruitment reaching minors.',
      solution: 'Platform-accountability advocacy; school-counselor reporting pipelines.',
      updated: '2026-11-09' },
    { id: 'midwest', label: 'Midwest interstate hub', category: 'Internal', x: 60, y: 40, severity: 1,
      detail: 'Transit and logistics chokepoint.',
      solution: 'Trucker-anti-trafficking training programs (TAT).',
      updated: '2026-11-09' },
  ],
};
