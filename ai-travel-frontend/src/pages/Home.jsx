// pages/Home.jsx
import TripForm from "../components/TripForm";

const Home = () => {
  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #fff7f0 0%, #ffffff 45%, #fff3e8 100%)",
        fontFamily: "'Georgia', serif",
      }}
    >
      {/* Background decorative blobs */}
      <div
        className="fixed pointer-events-none"
        style={{
          top: "-80px",
          right: "-80px",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(251,146,60,0.13) 0%, transparent 70%)",
        }}
      />
      <div
        className="fixed pointer-events-none"
        style={{
          bottom: "-60px",
          left: "-60px",
          width: "360px",
          height: "360px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(251,146,60,0.09) 0%, transparent 70%)",
        }}
      />
      <div
        className="fixed pointer-events-none"
        style={{
          top: "40%",
          left: "-40px",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(234,88,12,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative max-w-lg mx-auto px-4 pt-14 pb-16">
        {/* Hero text */}
        <div className="text-center mb-10">
          {/* Eyebrow */}
          <div className="flex justify-center mb-5">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase"
              style={{
                background: "rgba(251,146,60,0.1)",
                color: "#ea580c",
                border: "1px solid rgba(251,146,60,0.25)",
                letterSpacing: "0.12em",
              }}
            >
              <span style={{ fontSize: "9px" }}>✦</span>
              AI-Powered Travel
              <span style={{ fontSize: "9px" }}>✦</span>
            </span>
          </div>

          <h1
            className="text-5xl font-bold mb-4 leading-tight"
            style={{
              color: "#1a1a1a",
              letterSpacing: "-0.03em",
            }}
          >
            Plan Your{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #fb923c, #ea580c)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Dream Trip
            </span>
          </h1>

          <p
            className="text-base"
            style={{ color: "#9a7c6e", lineHeight: "1.7" }}
          >
            Let AI craft the perfect itinerary — tailored to your{" "}
            <span style={{ color: "#ea580c", fontStyle: "italic" }}>
              interests, budget &amp; timeline.
            </span>
          </p>

          {/* Decorative stat pills */}
          <div className="flex justify-center gap-3 mt-6 flex-wrap">
            {[
              { icon: "🌍", label: "200+ Destinations" },
              { icon: "⚡", label: "Instant Plans" },
              { icon: "🎯", label: "Personalized" },
            ].map(({ icon, label }) => (
              <div
                key={label}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(251,146,60,0.18)",
                  color: "#6b4f3a",
                  boxShadow: "0 1px 6px rgba(251,146,60,0.08)",
                }}
              >
                <span>{icon}</span>
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <TripForm />

        {/* Bottom note */}
        <p
          className="text-center text-xs mt-6"
          style={{ color: "#c4a08a", letterSpacing: "0.02em" }}
        >
          No account needed · Free to use · Plans in seconds
        </p>
      </div>
    </div>
  );
};

export default Home;