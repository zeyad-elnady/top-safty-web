"use client";

interface ContactCardProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  labelAr: string;
  value: string;
  value2?: string;
}

export default function ContactCard({ href, icon, label, labelAr, value, value2 }: ContactCardProps) {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "1rem",
        padding: "1.25rem 1.5rem",
        background: "#fff",
        borderRadius: "1.5rem",
        boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
        textDecoration: "none",
        color: "inherit",
        transition: "box-shadow 0.2s, transform 0.2s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(0,0,0,0.11)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(0,0,0,0.06)";
      }}
    >
      <div style={{ width: "2.75rem", height: "2.75rem", borderRadius: "50%", background: "var(--color-primary-fixed)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "var(--color-primary)" }}>
        {icon}
      </div>
      <div>
        <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-outline)" }}>{label}</p>
        <p className="ar" style={{ fontSize: "0.7rem", color: "var(--color-outline)", marginBottom: "0.3rem" }}>{labelAr}</p>
        <p style={{ fontWeight: 600, color: "var(--color-on-surface)", fontSize: "0.95rem" }}>{value}</p>
        {value2 && <p style={{ color: "var(--color-secondary)", fontSize: "0.88rem" }}>{value2}</p>}
      </div>
    </a>
  );
}
