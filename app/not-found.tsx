import Link from "next/link";

// This page renders automatically whenever a visitor hits a URL that does not exist.
// Having a styled 404 page looks intentional and professional.
export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "1.5rem",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <p className="font-label" style={{ color: "#10B981" }}>
        404
      </p>
      <h1 className="font-display" style={{ fontSize: "4rem", color: "#f0ece4" }}>
        Page Not Found
      </h1>
      <p style={{ color: "rgba(240,236,228,0.55)", maxWidth: "400px" }}>
        The page you are looking for does not exist or has been moved.
      </p>
      <Link href="/" className="btn-primary" style={{ marginTop: "1rem" }}>
        Back to Home
      </Link>
    </main>
  );
}
