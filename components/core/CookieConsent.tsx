"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    silktideCookieBannerManager?: {
      updateCookieBannerConfig: (config: any) => void;
    };
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export default function CookieConsent() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.id = "silktide-consent-manager-css";
    link.href = "/silktide-consent-manager.css";
    document.head.appendChild(link);

    return () => {
      const existingLink = document.getElementById(
        "silktide-consent-manager-css"
      );
      if (existingLink) {
        existingLink.remove();
      }
    };
  }, []);

  const configureCookieBanner = () => {
    if (typeof window !== "undefined" && window.silktideCookieBannerManager) {
      window.silktideCookieBannerManager.updateCookieBannerConfig({
        background: {
          showBackground: false,
        },
        cookieIcon: {
          position: "bottomRight",
        },
        cookieTypes: [
          {
            id: "analytics",
            name: "Analytics",
            description:
              "<p>These cookies help us improve the site by tracking which pages are most popular and how visitors move around the site.</p><div><br></div>",
            required: false,
            onAccept: function () {
              if (window.gtag) {
                window.gtag("consent", "update", {
                  analytics_storage: "granted",
                });
              }
              if (window.dataLayer) {
                window.dataLayer.push({
                  event: "consent_accepted_analytics",
                });
              }
            },
            onReject: function () {
              if (window.gtag) {
                window.gtag("consent", "update", {
                  analytics_storage: "denied",
                });
              }
            },
          },
          {
            id: "advertising",
            name: "Advertising",
            description:
              "<p>These cookies provide extra features and personalization to improve your experience. They may be set by us or by partners whose services we use.</p>",
            required: false,
            onAccept: function () {
              if (window.gtag) {
                window.gtag("consent", "update", {
                  ad_storage: "granted",
                  ad_user_data: "granted",
                  ad_personalization: "granted",
                });
              }
              if (window.dataLayer) {
                window.dataLayer.push({
                  event: "consent_accepted_advertising",
                });
              }
            },
            onReject: function () {
              if (window.gtag) {
                window.gtag("consent", "update", {
                  ad_storage: "denied",
                  ad_user_data: "denied",
                  ad_personalization: "denied",
                });
              }
            },
          },
        ],
        text: {
          banner: {
            description:
              '<p>We use cookies on our site to enhance your user experience and analyze our traffic.</p>',
            acceptAllButtonText: "Accept",
            acceptAllButtonAccessibleLabel: "Accept cookies",
            rejectNonEssentialButtonText: "Reject",
            rejectNonEssentialButtonAccessibleLabel: "Reject cookies",
            preferencesButtonText: "Preferences",
            preferencesButtonAccessibleLabel: "Toggle preferences",
          },
          preferences: {
            title: "Customize your cookie preferences",
            description:
              "<p>We respect your right to privacy. You can choose not to allow some types of cookies. Your cookie preferences will apply across our website.</p>",
            creditLinkText: "Get this banner for free",
            creditLinkAccessibleLabel: "Get this banner for free",
          },
        },
      });
    }
  };

  return (
    <>
      <Script
        src="/silktide-consent-manager.js"
        strategy="afterInteractive"
        onLoad={configureCookieBanner}
      />
    </>
  );
}
