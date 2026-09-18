export interface LabExperiment {
  title: string;
  /** Series + episode label, e.g. "Joystick to Neural Net · Episode 01". */
  series?: string;
  date: string;
  description: string;
  /** Standalone page served from public/, so link with a plain href (not routerLink). */
  href: string;
  /** Blog post that goes with the experiment, once it exists. */
  postUrl?: string;
}

// Newest first.
export const LAB_EXPERIMENTS: LabExperiment[] = [
  {
    title: 'Anatomy of a Robot Dataset',
    series: 'Joystick to Neural Net · Episode 02',
    date: 'Sep 2026',
    description:
      'Scrub through a real teleoperation episode from DROID. Three camera feeds sit on top; the joint angles, gripper, and the operator\'s commands update underneath as you drag, so you can see exactly what one row of robot training data contains.',
    href: '/lab/anatomy',
  },
  {
    title: 'Teleop',
    series: 'Joystick to Neural Net · Episode 01',
    date: 'Sep 2026',
    description:
      'Drive a robot arm from your keyboard: pick up the crystal, drop it in the ring. Before a robot can learn anything, someone has to drive it by hand. Then turn up the latency and see what it feels like to steer from the Moon.',
    href: '/lab/teleop',
  },
];
