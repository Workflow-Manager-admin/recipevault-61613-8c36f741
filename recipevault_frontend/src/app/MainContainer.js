import React from "react";

// PUBLIC_INTERFACE
/**
 * MainContainer component: Layout for RecipeVault with sidebar,
 * navigation, styled using light theme and the brand colors.
 * Includes placeholders for recipe features and authentication.
 */
export default function MainContainer({ children }) {
  return (
    <div className="rvault-root-container">
      <aside className="rvault-sidebar">
        <div className="rvault-logo">
          <span role="img" aria-label="RecipeVault">🍲</span> RecipeVault
        </div>
        <nav className="rvault-nav">
          <ul>
            <li>
              <button className="rvault-nav-link rvault-primary">Browse Recipes</button>
            </li>
            <li>
              <button className="rvault-nav-link rvault-accent">Manage Recipes</button>
            </li>
            <li>
              <button className="rvault-nav-link rvault-secondary">Login/Register</button>
            </li>
          </ul>
        </nav>
        <div className="rvault-sidebar-footer">
          <span className="rvault-footer-brand">RecipeVault © 2024</span>
        </div>
      </aside>
      <main className="rvault-main-content">
        {/* Placeholders for feature sections */}
        <section className="rvault-feature" id="recipe-browse">
          <h2>Recipe Browsing</h2>
          <p>Browse and search available recipes here.</p>
        </section>
        <section className="rvault-feature" id="recipe-manage">
          <h2>Recipe Management</h2>
          <p>Add, edit, or delete your recipes (coming soon).</p>
        </section>
        <section className="rvault-feature" id="auth-section">
          <h2>User Authentication</h2>
          <p>Login or register to access all RecipeVault features.</p>
        </section>
        {/* Render additional children if provided */}
        {children}
      </main>
      <style jsx>{`
        .rvault-root-container {
          display: flex;
          min-height: 100vh;
          background: #fff;
          color: #171717;
          font-family: var(--font-geist-sans, Arial, Helvetica, sans-serif);
        }
        .rvault-sidebar {
          width: 240px;
          background: var(--rvault-primary, #4CAF50);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 1.5rem 1rem 1.2rem 1rem;
          color: #fff;
          box-shadow: 2px 0 10px rgba(76,175,80,0.02);
        }
        .rvault-logo {
          font-size: 1.5rem;
          font-weight: bold;
          letter-spacing: 0.04em;
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          gap: 0.55em;
        }
        .rvault-nav ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 1.15rem;
        }
        .rvault-nav-link {
          width: 100%;
          padding: 0.65em 1.1em;
          font-size: 1rem;
          font-weight: 500;
          border: none;
          border-radius: 0.5em;
          cursor: pointer;
          background: rgba(255,255,255,0.10);
          color: #fff;
          transition: background 0.18s, box-shadow 0.16s;
          outline: none;
        }
        .rvault-nav-link:hover, .rvault-nav-link:focus {
          background: rgba(255,255,255,0.23);
        }
        .rvault-primary {
          background: var(--rvault-primary, #4CAF50);
        }
        .rvault-secondary {
          background: var(--rvault-secondary, #FFC107);
          color: #171717;
        }
        .rvault-accent {
          background: var(--rvault-accent, #FF5722);
        }
        .rvault-sidebar-footer {
          text-align: left;
          font-size: 0.93rem;
          margin-top: 2rem;
          color: rgba(255,255,255,0.88);
        }
        .rvault-main-content {
          flex: 1;
          padding: 3rem 2.2rem 2.5rem 2.2rem;
          background: var(--background, #fff);
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          gap: 2.4rem;
        }
        .rvault-feature {
          background: #fff;
          border-radius: 0.75em;
          box-shadow: 0 3px 20px 0 rgba(76,175,80,0.05), 0 1.5px 9px 0 rgba(255,87,34,0.045);
          padding: 2.3rem 2.2rem;
          margin-bottom: 1.5rem;
          border-left: 6px solid var(--rvault-primary, #4CAF50);
        }
        .rvault-feature h2 {
          font-size: 1.35rem;
          margin-bottom: 0.6em;
          color: var(--rvault-primary, #4CAF50);
        }
        /* Responsive: Collapse sidebar on mobile */
        @media (max-width: 700px) {
          .rvault-root-container {
            flex-direction: column;
          }
          .rvault-sidebar {
            width: 100%;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            min-height: 65px;
            padding: 0.7rem 1rem;
          }
          .rvault-sidebar-footer {
            display: none;
          }
          .rvault-logo {
            margin-bottom: 0;
          }
        }
        :root {
          --rvault-primary: #4CAF50;
          --rvault-secondary: #FFC107;
          --rvault-accent: #FF5722;
        }
      `}</style>
    </div>
  );
}
