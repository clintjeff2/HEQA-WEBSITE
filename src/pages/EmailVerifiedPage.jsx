/**
 * EmailVerifiedPage — /verified
 *
 * Firebase redirects here after a user clicks an email verification link.
 * This page auto-attempts to open the HEQA app via the `heqa://email-verified`
 * deep link. If the app is not installed, it shows a friendly fallback.
 *
 * Deep link flow:
 *   Email link → Firebase verifies → redirect to heqasolutions.com/verified
 *   → this page → heqa://email-verified → app calls reloadUser() → main app
 */

import React, { useEffect, useState } from "react";

const DEEP_LINK = "heqa://email-verified";
const APP_STORE_URL = "https://heqasolutions.com"; // update when live on stores
const PLAY_STORE_URL = "https://heqasolutions.com";

export default function EmailVerifiedPage() {
  const [status, setStatus] = useState("verifying"); // "verifying" | "success" | "already"
  const [deepLinkAttempted, setDeepLinkAttempted] = useState(false);

  useEffect(() => {
    // Check if we arrived here from Firebase's OOB action
    const params = new URLSearchParams(window.location.search);
    const mode = params.get("mode");

    // Firebase redirects with ?mode=verifyEmail after successful verification.
    // It also redirects without params when continueUrl is used directly.
    if (mode === "verifyEmail" || !mode) {
      setStatus("success");
    } else {
      setStatus("success"); // Show success regardless — user came from the link
    }

    // Auto-attempt deep link after short delay (so the user sees the screen)
    const timer = setTimeout(() => {
      attemptDeepLink();
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const attemptDeepLink = () => {
    setDeepLinkAttempted(true);
    window.location.href = DEEP_LINK;
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #EFF6FF 0%, #F0FDF4 100%)",
        padding: "24px 16px",
        fontFamily:
          "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <div
        style={{
          background: "#FFFFFF",
          borderRadius: "24px",
          boxShadow:
            "0 20px 60px rgba(0,0,0,0.10), 0 4px 16px rgba(37,99,235,0.08)",
          maxWidth: "480px",
          width: "100%",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div
          style={{
            background:
              "linear-gradient(135deg, #2563EB 0%, #1D4ED8 60%, #1E40AF 100%)",
            padding: "32px 40px 28px",
            textAlign: "center",
          }}
        >
          <img
            src="/heqa-logo-transparent.png"
            alt="HEQA Solutions"
            style={{
              width: 64,
              height: 64,
              borderRadius: 14,
              background: "rgba(255,255,255,0.15)",
              padding: 8,
              marginBottom: 12,
              objectFit: "contain",
            }}
          />
          <div
            style={{
              fontSize: 18,
              fontWeight: 800,
              color: "#FFFFFF",
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            HEQA SOLUTIONS
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: "40px 40px 32px", textAlign: "center" }}>
          {/* Success icon */}
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #16A34A, #15803D)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 24px",
              fontSize: 36,
              boxShadow: "0 8px 24px rgba(22,163,74,0.3)",
            }}
          >
            ✅
          </div>

          <h1
            style={{
              fontSize: 26,
              fontWeight: 800,
              color: "#0F172A",
              margin: "0 0 12px",
              lineHeight: 1.2,
            }}
          >
            Email Verified!
          </h1>
          <p
            style={{
              fontSize: 16,
              color: "#475569",
              lineHeight: 1.7,
              margin: "0 0 32px",
            }}
          >
            Your email address has been verified successfully. You can now
            return to the HEQA app and start practising!
          </p>

          {/* Open App CTA */}
          <button
            onClick={attemptDeepLink}
            style={{
              width: "100%",
              background: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
              color: "#FFFFFF",
              border: "none",
              borderRadius: 12,
              padding: "16px 24px",
              fontSize: 16,
              fontWeight: 700,
              cursor: "pointer",
              letterSpacing: 0.3,
              boxShadow: "0 4px 14px rgba(37,99,235,0.35)",
              marginBottom: 16,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            🚀&nbsp;&nbsp;Open HEQA App
          </button>

          {deepLinkAttempted && (
            <div
              style={{
                background: "#F8FAFC",
                border: "1px solid #E2E8F0",
                borderRadius: 12,
                padding: "16px 20px",
                marginBottom: 16,
                textAlign: "left",
              }}
            >
              <p
                style={{
                  fontSize: 13,
                  color: "#475569",
                  margin: "0 0 10px",
                  fontWeight: 600,
                }}
              >
                📱 App didn&apos;t open?
              </p>
              <p
                style={{
                  fontSize: 13,
                  color: "#64748B",
                  margin: "0 0 12px",
                  lineHeight: 1.5,
                }}
              >
                Make sure HEQA is installed on your device, then tap the button
                above again.
              </p>
              <div style={{ display: "flex", gap: 8 }}>
                <a
                  href={PLAY_STORE_URL}
                  style={{
                    flex: 1,
                    background: "#0F172A",
                    color: "#fff",
                    borderRadius: 8,
                    padding: "10px 12px",
                    fontSize: 12,
                    fontWeight: 600,
                    textDecoration: "none",
                    textAlign: "center",
                    display: "block",
                  }}
                >
                  🤖 Google Play
                </a>
                <a
                  href={APP_STORE_URL}
                  style={{
                    flex: 1,
                    background: "#0F172A",
                    color: "#fff",
                    borderRadius: 8,
                    padding: "10px 12px",
                    fontSize: 12,
                    fontWeight: 600,
                    textDecoration: "none",
                    textAlign: "center",
                    display: "block",
                  }}
                >
                  App Store
                </a>
              </div>
            </div>
          )}

          <p
            style={{
              fontSize: 12,
              color: "#94A3B8",
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            Already in the app? Tap{" "}
            <strong style={{ color: "#64748B" }}>
              "I've verified my email"
            </strong>{" "}
            on the verification screen.
          </p>
        </div>

        {/* Footer */}
        <div
          style={{
            background: "#F8FAFC",
            borderTop: "1px solid #E2E8F0",
            padding: "16px 40px",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: 12, color: "#94A3B8", margin: 0 }}>
            © {new Date().getFullYear()} HEQA Solutions ·{" "}
            <a href="https://heqasolutions.com" style={{ color: "#2563EB" }}>
              heqasolutions.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
