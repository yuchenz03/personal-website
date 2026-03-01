// src/components/Footer.tsx
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi";

type FooterLink = {
  label: string;
  href: string;
};

type FooterProps = {
  name?: string;
  tagline?: string;
  linkedinUrl: string;
  githubUrl?: string;
  email: string;
  resumeUrl?: string;
};

export default function Footer({
  name = "Contact Me",
  tagline = "I'd love to get in touch! Feel free to reach out through any of the platforms below.",
  linkedinUrl,
  githubUrl,
  email,
  resumeUrl,
}: FooterProps) {
  const links: FooterLink[] = [
    { label: "LinkedIn", href: linkedinUrl },
    ...(githubUrl ? [{ label: "GitHub", href: githubUrl }] : []),
    { label: "Email", href: `mailto:${email}` },
    ...(resumeUrl ? [{ label: "Resume", href: resumeUrl }] : []),
  ];

  return (
    <footer style={styles.footer}>
      <div style={styles.inner}>
        <div style={styles.name}>{name}</div>
        <div style={styles.tagline}>{tagline}</div>

        <div style={styles.links}>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            style={styles.link}
          >
            <FaLinkedin style={styles.icon} />
            LinkedIn
          </a>

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              style={styles.link}
            >
              <span style={styles.separator}>|</span>
              <FaGithub style={styles.icon} />
              GitHub
            </a>
          )}

          <a href={`mailto:${email}`} style={styles.link}>
            <span style={styles.separator}>|</span>
            <MdEmail style={styles.icon} />
            Email
          </a>

          {resumeUrl && (
            <a href={resumeUrl} style={styles.link}>
              <span style={styles.separator}>|</span>
              <HiOutlineDocumentText style={styles.icon} />
              Resume
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
const styles: Record<string, React.CSSProperties> = {
  footer: {
    marginTop: "64px",
    borderTop: "1px solid #eaeaea",
    backgroundColor: "#f8f8f8",
    width: "100%",
  },
  inner: {
    maxWidth: "95%",
    margin: "0 auto",
    padding: "40px 0",
    boxSizing: "border-box",
    textAlign: "center",
  },
  name: {
    fontSize: "30px",
    fontWeight: 700,
    color: "#111",
    marginBottom: "8px",
  },
  tagline: {
    fontSize: "20px",
    fontWeight: 400,
    color: "#444",
    marginBottom: "16px",
  },
  links: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
    flexWrap: "wrap",
  },
  link: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "20px",
    fontWeight: 400,
    color: "#111",
    textDecoration: "none",
    opacity: 0.9,
  },
  separator: {
    fontSize: "20px",
    color: "#888",
    marginRight: "20px",
    marginLeft: "20px",
  },
  icon: {
    marginRight: "1px",
    fontSize: "16px",
    color: "#000",
  },
};
