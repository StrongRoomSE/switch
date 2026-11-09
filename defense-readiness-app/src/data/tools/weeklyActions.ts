// 52 small actions, one per week. The tool shows "this week's action" and the full list.
// Keep each action concrete, lawful, and completable in under an hour.

export interface WeeklyAction {
  week: number;
  title: string;
  detail: string;
  section?: string; // slug to link into if relevant
}

export const weeklyActions: WeeklyAction[] = [
  { week: 1, title: 'Save the three national hotlines in your phone', detail: '911, 988 Suicide & Crisis, 1-800-843-5678 NCMEC CyberTipline.', section: 'appendices' },
  { week: 2, title: 'Take the Community Preparedness Self-Assessment', detail: 'Score your household in 2 minutes.', section: 'child-centered-deterrence' },
  { week: 3, title: 'Enable two-factor on your three most important accounts', detail: 'Email first, then bank, then anything that stores photos.', section: 'surveillance-detox' },
  { week: 4, title: 'Have a 10-minute family safety conversation', detail: 'Who does each person call if something goes wrong at school, online, or in the neighborhood?' },
  { week: 5, title: 'Pick one commitment from the Renewal Pledge and start it today', detail: 'Keep it for 30 days.', section: 'faith-family-renewal' },
  { week: 6, title: 'Introduce yourself to one neighbor you have never met', detail: 'Trade phone numbers. That is the whole exercise.' },
  { week: 7, title: 'Audit your phone\'s location-sharing settings', detail: 'Turn off anything you did not consciously opt into.', section: 'surveillance-detox' },
  { week: 8, title: 'Buy a two-week food and water reserve', detail: 'See Section 6 for per-person recommendations.', section: 'strategic-stockpiles' },
  { week: 9, title: 'Learn where to report exploitation or trafficking in your state', detail: 'Write the number on a fridge magnet.', section: 'child-centered-deterrence' },
  { week: 10, title: 'Run a 5-minute "who do you trust?" conversation with each child', detail: 'They should be able to name at least three adults.' },
  { week: 11, title: 'Share one section of this doctrine with one person', detail: 'Use the share buttons at the top of any section.' },
  { week: 12, title: 'Walk your school\'s safety plan with the principal', detail: 'Ask: what are the first three steps if something happens today?' },
  { week: 13, title: 'Install a password manager', detail: 'Start with your most reused passwords.', section: 'surveillance-detox' },
  { week: 14, title: 'Do a 30-minute device-free family dinner', detail: 'Phones in another room. Keep it going if it feels right.' },
  { week: 15, title: 'Attend one local civic meeting', detail: 'City council, school board, or neighborhood watch.' },
  { week: 16, title: 'Volunteer four hours for a service effort you have never tried', detail: 'Food bank, shelter, cleanup, mentoring — anything hands-on.' },
  { week: 17, title: 'Draft one paragraph on an issue to your state representative', detail: 'See Section 11 for a bill-template starting point.', section: 'legislative-framework' },
  { week: 18, title: 'Teach one child to spot a scam (phishing, impersonation, deepfake)', detail: 'Use real examples from your inbox.', section: 'war-on-the-mind' },
  { week: 19, title: 'Schedule a 48-hour media fast for yourself', detail: 'Keep the phone for emergencies only.', section: 'psychological-warfare-reversal' },
  { week: 20, title: 'Back up your critical family files to an offline drive', detail: 'Photos, documents, medical records.' },
  { week: 21, title: 'Memorize two phone numbers of family members', detail: 'Phones die. Memories don\'t.' },
  { week: 22, title: 'Submit a Wins story', detail: 'Something worked this quarter? Tell us on the Wins page.' },
  { week: 23, title: 'Audit app permissions on your phone', detail: 'Camera, microphone, contacts — revoke anything you don\'t recognize.', section: 'surveillance-detox' },
  { week: 24, title: 'Take a first-aid refresher (free online counts)', detail: 'Red Cross or local fire department.' },
  { week: 25, title: 'Walk the neighborhood and note every fire hydrant', detail: 'You now know the fastest paths for help.' },
  { week: 26, title: 'Mid-year check: open your Dossier and review what you\'ve built', detail: 'Print it, celebrate it, share it.' },
  { week: 27, title: 'Opt out of three major data brokers', detail: 'Start with Spokeo, Whitepages, BeenVerified.', section: 'surveillance-detox' },
  { week: 28, title: 'Volunteer at one child-protection or recovery organization', detail: 'See the Organizations directory for options.' },
  { week: 29, title: 'Host a "Preparedness Weekend" potluck', detail: 'Three families, one shared plan.' },
  { week: 30, title: 'Teach your kids the house evacuation route', detail: 'Rehearse it once. That\'s it.' },
  { week: 31, title: 'Review your social profiles — what is public about your family?', detail: 'Tighten what doesn\'t need to be out there.', section: 'surveillance-detox' },
  { week: 32, title: 'Call your rep\'s office once this quarter about one issue', detail: 'Three sentences. Your name, your zip, your ask.' },
  { week: 33, title: 'Add two trusted adults to each child\'s "safe people" list', detail: 'Make sure the kids know them by name.' },
  { week: 34, title: 'Build a small cash emergency reserve', detail: 'A few hundred in small bills, tucked where you can grab it.' },
  { week: 35, title: 'Attend one worship service, retreat, or shared practice you\'ve been skipping', detail: 'Renewal is a practice.', section: 'faith-family-renewal' },
  { week: 36, title: 'Spend an hour with an elder in your family or neighborhood', detail: 'Ask about the hardest thing they lived through.' },
  { week: 37, title: 'Update your family\'s written emergency plan', detail: 'One page. Who, what, where, how to reach.' },
  { week: 38, title: 'Pick one covenant principle and make it your season\'s theme', detail: 'From the Section 16 Covenant Builder.', section: 'conclusion-covenant' },
  { week: 39, title: 'Share the Take Action page with five people', detail: 'Email, text, group chat. Keep momentum.' },
  { week: 40, title: 'Audit your car emergency kit', detail: 'Water, blanket, flashlight, jumper cables, first-aid.' },
  { week: 41, title: 'Teach a child how to ask for help in a public place', detail: '"Find a mom with kids" is a solid rule.' },
  { week: 42, title: 'Read one section of this doctrine you haven\'t explored yet', detail: 'There are 17. Variety builds breadth.' },
  { week: 43, title: 'Bring one friend to a community volunteer effort', detail: 'Doubling your own impact is a one-step play.' },
  { week: 44, title: 'Review the metrics dashboard — which number can you move?', detail: 'Pick one target you can influence locally.', section: 'restoration-metrics' },
  { week: 45, title: 'Do a quiet night with no screens for the household', detail: 'Books, cards, walking. One night. See what shifts.' },
  { week: 46, title: 'Write a thank-you note to a teacher, first responder, or mentor', detail: 'Handwritten. Delivered in person if possible.' },
  { week: 47, title: 'Host a neighborhood "Know Your Neighbors" hour', detail: 'Coffee in the driveway. One hour. No agenda.' },
  { week: 48, title: 'Review and update your household\'s passwords', detail: 'Rotate the most important three.', section: 'surveillance-detox' },
  { week: 49, title: 'Reflect: which of these habits stuck?', detail: 'Keep the ones that worked. Shed the rest.' },
  { week: 50, title: 'Send a small donation to a frontline organization', detail: 'Any amount counts. Consistency beats size.' },
  { week: 51, title: 'Write down three wins from this year', detail: 'Share one on the Wins page.' },
  { week: 52, title: 'Pick one word for next year', detail: 'Let it shape the practice you carry forward.' },
];

/** Week number (1–52) for a given Date, using ISO week. */
export function weekOf(date: Date = new Date()): number {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
}
