export const sectionVariants = {
  // Hero Section - Grand Entrance
  hero: {
    hidden: { opacity: 0, y: 100, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        Easing: "easeOut"
      }
    }
  },

  // Services Section - Smooth Rise with Stagger
  services: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  },

  // Recent Works - Card Flip Effect
  recentWorks: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  },

  // Experience - Timeline Slide
  experience: {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        Easing: "easeOut"
      }
    }
  },

  // Skills - Progressive Fill
  skills: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  },

  // Contact - Gentle Fade with Blur
  contact: {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.9,
        Easing: "easeOut"
      }
    }
  },

  // Footer - Subtle Slide Up
  footer: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        Easing: "easeOut"
      }
    }
  }
};

export const childVariants = {
  // Service Cards
  serviceCard: {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        Easing: "backOut"
      }
    }
  },

  // Project Cards - Flip Effect
  projectCard: {
    hidden: { opacity: 0, rotateY: 90 },
    visible: {
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        Easing: "easeOut"
      }
    }
  },

  // Experience Items
  experienceItem: {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        Easing: "easeOut"
      }
    }
  },

  // Skill Bars
  skillBar: {
    hidden: { opacity: 0, width: 0 },
    visible: {
      opacity: 1,
      width: "100%",
      transition: {
        duration: 1.2,
        Easing: "easeOut"
      }
    }
  }
};