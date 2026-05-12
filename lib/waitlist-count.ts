const START_DATE = Date.UTC(2026, 4, 12);
const START_COUNT = 147;
const PER_DAY = 2;
const CAP = 200;

export function getWaitlistCount(): number {
  const today = Date.UTC(
    new Date().getUTCFullYear(),
    new Date().getUTCMonth(),
    new Date().getUTCDate(),
  );
  const daysElapsed = Math.max(0, Math.floor((today - START_DATE) / 86_400_000));
  return Math.min(START_COUNT + daysElapsed * PER_DAY, CAP);
}

export function getRemainingSpots(): number {
  return Math.max(0, CAP - getWaitlistCount());
}

export const WAITLIST_CAP = CAP;
