"use client";

import { useEffect } from "react";
import { analytics } from "@/lib/firebase";
import { logEvent } from "firebase/analytics";

export const useAnalytics = () => {
  useEffect(() => {
    if (!analytics) return;

    // Track page visit
    logEvent(analytics, "page_view", { page_path: window.location.pathname });

    // Track device info
    const deviceInfo = {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
    };
    logEvent(analytics, "device_info", deviceInfo);
  }, []);

  // Function to track custom events
  const trackEvent = (eventName: string, params?: Record<string, any>) => {
    if (!analytics) return;
    logEvent(analytics, eventName, params || {});
  };

  return { trackEvent };
};
