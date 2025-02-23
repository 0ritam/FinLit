import { Variants } from 'motion/react';

export const fadeIn: Variants = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  },
};

export const fadeInUp: Variants = {
  start: {
    y: 30,
    opacity: 0,
  },
  end: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  },
};

export const fadeInRight: Variants = {
  start: {
    x: -30,
    opacity: 0,
  },
  end: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  },
};

export const fadeInLeft: Variants = {
  start: {
    x: 30,
    opacity: 0,
  },
  end: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  },
};

export const fadeInScale: Variants = {
  start: {
    scale: 0.8,
    opacity: 0,
  },
  end: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  },
};

export const staggerContainer: Variants = {
  start: {},
  end: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};