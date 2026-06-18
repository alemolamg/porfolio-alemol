const EASING = (t: number) => 1 - Math.pow(1 - t, 3);

const getScrollTopForHash = (hash: string) => {
  const target = document.querySelector<HTMLElement>(hash);
  if (!target) return null;

  const nav = document.querySelector<HTMLElement>('nav[aria-label="Principal"]');
  const navHeight = nav?.offsetHeight ?? 80;
  const targetTop = target.getBoundingClientRect().top + window.scrollY;

  return Math.max(targetTop - navHeight - 12, 0);
};

export const scrollToHash = (hash: string) => {
  if (typeof window === "undefined") return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const nextTop = getScrollTopForHash(hash);
  if (nextTop === null) return;

  if (prefersReducedMotion) {
    window.scrollTo(0, nextTop);
    return;
  }

  const startTop = window.scrollY;
  const distance = nextTop - startTop;
  const duration = Math.min(Math.max(Math.abs(distance) * 0.55, 320), 720);
  const startTime = window.performance.now();

  const step = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = EASING(progress);

    window.scrollTo(0, startTop + distance * easedProgress);

    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };

  window.requestAnimationFrame(step);
};
