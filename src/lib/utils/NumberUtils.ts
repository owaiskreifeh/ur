export function secondsToMs(seconds: number): number {
  return seconds * 1000;
}

export function RandInRange(
  lower: number,
  upper: number,
  asInt: boolean = false,
): number {
  if (upper <= lower) {
    throw new Error('Upper bound must be greater than lower bound.');
  }

  const rand = Math.random() * upper - lower;

  return asInt ? Math.floor(rand) : rand;
}
