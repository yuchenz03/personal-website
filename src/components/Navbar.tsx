import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <div style={styles.inner}>
          {/* Left */}
          <NavLink to="/" style={styles.brand}>
            Yuchen Zhou
          </NavLink>

          {/* Right */}
          <div style={styles.right}>
            <NavItem to="/">Home</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/experience">Experience</NavItem>
          </div>
        </div>
      </nav>
    </header>
  );
}

function NavItem({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <NavLink
      to={to}
      style={({ isActive }) => ({
        ...styles.link,
        ...(isActive ? styles.linkActive : {}),
      })}
    >
      {children}
    </NavLink>
  );
}

const styles: Record<string, React.CSSProperties> = {
  header: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    backgroundColor: "white",
  },
  nav: {
    borderBottom: "1px solid #eaeaea",
  },
  inner: {
    maxWidth: "95%",
    margin: "0 auto",
    padding: "25px 5px 5px 5px",
    display: "flex",
    alignItems: "left",
    justifyContent: "space-between",
  },
  brand: {
    textDecoration: "none",
    color: "black",
    fontWeight: 700,
    fontSize: "30px",
    letterSpacing: "0.2px",
  },
  right: {
    display: "flex",
    alignItems: "center",
    gap: "28px",
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: "20px",
    fontWeight: 500,
    opacity: 0.8,
  },
  linkActive: {
    opacity: 1,
    fontWeight: 700,
  },
};
