// National + state resources for the "Find Local Resources" tool.
// Add rows freely. Keep every entry lawful, well-known, and non-partisan.

export interface Resource {
  label: string;
  phone?: string;
  url?: string;
  blurb: string;
}

export const nationalResources: Resource[] = [
  {
    label: '911 — Emergency',
    phone: '911',
    blurb: 'Immediate danger to life or safety.',
  },
  {
    label: 'NCMEC CyberTipline',
    phone: '1-800-843-5678',
    url: 'https://report.cybertip.org/',
    blurb: 'Report suspected online child exploitation (CSAM, grooming, enticement).',
  },
  {
    label: 'National Human Trafficking Hotline',
    phone: '1-888-373-7888',
    url: 'https://humantraffickinghotline.org/',
    blurb: 'Call or text "HELP" to 233733. 24/7, confidential, 200+ languages.',
  },
  {
    label: '988 Suicide & Crisis Lifeline',
    phone: '988',
    url: 'https://988lifeline.org/',
    blurb: 'Call or text 988 for free, confidential support anytime.',
  },
  {
    label: 'SAMHSA National Helpline',
    phone: '1-800-662-4357',
    url: 'https://www.samhsa.gov/find-help/national-helpline',
    blurb: 'Free, 24/7 treatment referral and information for mental health or substance use.',
  },
  {
    label: 'Childhelp National Child Abuse Hotline',
    phone: '1-800-422-4453',
    url: 'https://www.childhelphotline.org/',
    blurb: 'Call or text 1-800-422-4453 for crisis intervention and referrals.',
  },
  {
    label: 'Ready.gov — Preparedness',
    url: 'https://www.ready.gov/',
    blurb: 'Federal preparedness guidance for emergencies, disasters, and family plans.',
  },
  {
    label: 'CISA — Cyber & Infrastructure',
    url: 'https://www.cisa.gov/',
    blurb: 'Cybersecurity and critical-infrastructure guidance for schools, utilities, families.',
  },
];

export const stateResources: Record<string, Resource[]> = {
  // Add states as you collect vetted links. These are placeholders — replace with real links.
  'All': [],
  'CA': [{ label: 'CA Attorney General — Victim Services', url: 'https://oag.ca.gov/victimservices', blurb: 'California victim services portal.' }],
  'TX': [{ label: 'TX Office of the Attorney General — Crime Victims', url: 'https://www.texasattorneygeneral.gov/crime-victims', blurb: 'Texas crime-victims portal.' }],
  'FL': [{ label: 'FL Department of Children and Families — Abuse Hotline', phone: '1-800-962-2873', blurb: 'Florida child-abuse reporting.' }],
  'NY': [{ label: 'NY State Child Abuse Hotline', phone: '1-800-342-3720', blurb: 'New York child-abuse reporting.' }],
  'PA': [{ label: 'PA ChildLine', phone: '1-800-932-0313', blurb: 'Pennsylvania child-abuse reporting.' }],
};

export const states = [
  'All','AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA',
  'ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR',
  'PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY',
];
