import confetti from 'canvas-confetti';

export const triggerSparkleConfetti = () => {
  // Brand colors: Hot Pink, Butter Yellow, White, Gold
  const colors = ['#FF2E93', '#FFF385', '#FFFFFF', '#FBBF24', '#FF70B8'];

  // Left burst
  confetti({
    particleCount: 50,
    angle: 60,
    spread: 55,
    origin: { x: 0.1, y: 0.8 },
    colors,
    shapes: ['star', 'circle'],
    scalar: 1.2,
  });

  // Right burst
  confetti({
    particleCount: 50,
    angle: 120,
    spread: 55,
    origin: { x: 0.9, y: 0.8 },
    colors,
    shapes: ['star', 'circle'],
    scalar: 1.2,
  });
};

export const triggerCenterBlast = () => {
  confetti({
    particleCount: 80,
    spread: 100,
    origin: { y: 0.6 },
    colors: ['#FF2E93', '#FFF385', '#FBBF24', '#FFFFFF'],
    shapes: ['star'],
  });
};
