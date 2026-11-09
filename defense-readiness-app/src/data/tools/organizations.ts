// Organization directory for the /tools/organizations page.
// Add rows as you vet orgs. Keep focus-aligned, lawful, and non-partisan.

export interface Organization {
  name: string;
  url: string;
  focus: 'Child protection' | 'Family renewal' | 'Preparedness' | 'Education' | 'Policy' | 'Recovery' | 'Cyber';
  blurb: string;
}

export const organizations: Organization[] = [
  { name: 'National Center for Missing & Exploited Children (NCMEC)', url: 'https://www.missingkids.org/',
    focus: 'Child protection', blurb: 'CyberTipline, missing-child alerts, prevention education.' },
  { name: 'Polaris Project', url: 'https://polarisproject.org/',
    focus: 'Child protection', blurb: 'Operates the National Human Trafficking Hotline; research and advocacy.' },
  { name: 'Truckers Against Trafficking (TAT)', url: 'https://truckersagainsttrafficking.org/',
    focus: 'Child protection', blurb: 'Trains the trucking and energy industries to recognize and report trafficking.' },
  { name: 'Shared Hope International', url: 'https://sharedhope.org/',
    focus: 'Policy', blurb: 'State-level policy on child sex-trafficking prevention.' },
  { name: 'Ready.gov', url: 'https://www.ready.gov/',
    focus: 'Preparedness', blurb: 'Federal preparedness toolkit for families, schools, and communities.' },
  { name: 'CERT (Community Emergency Response Teams)', url: 'https://www.ready.gov/cert',
    focus: 'Preparedness', blurb: 'Volunteer training to support neighbors during emergencies.' },
  { name: 'ConnectSafely', url: 'https://www.connectsafely.org/',
    focus: 'Cyber', blurb: 'Parent-friendly online-safety and media-literacy guides.' },
  { name: 'Common Sense Media', url: 'https://www.commonsensemedia.org/',
    focus: 'Education', blurb: 'Media and tech reviews with a family lens.' },
  { name: 'National Alliance on Mental Illness (NAMI)', url: 'https://www.nami.org/',
    focus: 'Recovery', blurb: 'Education, support groups, and the NAMI HelpLine.' },
  { name: 'SAMHSA', url: 'https://www.samhsa.gov/',
    focus: 'Recovery', blurb: 'Federal substance-use and mental-health treatment locator.' },
];
