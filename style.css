/* ---------------------------------------------------
   Tokens
--------------------------------------------------- */
:root{
  --ink:        #142524;
  --ink-soft:   #1B302E;
  --paper:      #F3EFE6;
  --marigold:   #E2932B;
  --marigold-dim: #B9741C;
  --crimson:    #B23A3A;
  --text-hi:    #F3EFE6;
  --text-mid:   #C9D3CE;
  --text-low:   #8FA29C;
  --line:       rgba(243,239,230,0.14);

  --serif: "Fraunces", ui-serif, Georgia, serif;
  --sans:  "Inter", ui-sans-serif, system-ui, sans-serif;

  --max: 720px;
  --pad: clamp(24px, 6vw, 64px);
}

*{ box-sizing: border-box; }

html{ scroll-behavior: smooth; }

body{
  margin: 0;
  background: var(--ink);
  color: var(--text-mid);
  font-family: var(--sans);
  font-size: 16px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

@media (prefers-reduced-motion: reduce){
  html{ scroll-behavior: auto; }
  *{ animation: none !important; transition: none !important; }
}

a{
  color: inherit;
  text-decoration: none;
}

h1, h2, h3{
  font-family: var(--serif);
  color: var(--text-hi);
  margin: 0;
  font-weight: 500;
}

/* subtle paper-grain texture over the ink background */
.grain{
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  opacity: 0.035;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

/* ---------------------------------------------------
   Header / nav
--------------------------------------------------- */
.site-header{
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px var(--pad);
  background: linear-gradient(var(--ink) 60%, transparent);
}

.wordmark{
  font-family: var(--serif);
  font-size: 1.05rem;
  color: var(--text-hi);
  letter-spacing: 0.01em;
}

.site-nav{
  display: flex;
  gap: 28px;
}

.site-nav a{
  font-size: 0.9rem;
  color: var(--text-mid);
  border-bottom: 1px solid transparent;
  padding-bottom: 2px;
  transition: color 0.15s ease, border-color 0.15s ease;
}

.site-nav a:hover,
.site-nav a:focus-visible{
  color: var(--marigold);
  border-color: var(--marigold);
}

.nav-toggle{
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  cursor: pointer;
}
.nav-toggle span{
  display: block;
  height: 1px;
  background: var(--text-hi);
}

/* ---------------------------------------------------
   Layout helpers
--------------------------------------------------- */
main{
  position: relative;
  z-index: 1;
}

section{
  max-width: var(--max);
  margin: 0 auto;
  padding: 88px var(--pad);
}

.section-head{
  margin-bottom: 28px;
}

.section-head h2{
  font-size: 1.6rem;
}

/* ---------------------------------------------------
   Hero
--------------------------------------------------- */
.hero{
  max-width: 820px;
  padding-top: 96px;
  padding-bottom: 96px;
}

.hero-eyebrow{
  font-family: var(--sans);
  font-size: 0.9rem;
  color: var(--text-low);
  margin: 0 0 20px;
}

.hero-headline{
  font-size: clamp(1.7rem, 4.4vw, 2.9rem);
  line-height: 1.28;
  font-weight: 400;
  letter-spacing: -0.01em;
}

.hero-accent{
  display: inline;
  color: var(--marigold);
  font-style: italic;
  font-weight: 500;
  background-image: linear-gradient(currentColor, currentColor);
  background-repeat: no-repeat;
  background-position: 0 100%;
  background-size: 0% 1px;
  animation: draw-underline 1.1s ease-out 0.4s forwards;
}

@keyframes draw-underline{
  to{ background-size: 100% 1px; }
}

.hero-sub{
  margin-top: 28px;
  max-width: 52ch;
  font-size: 1.05rem;
  color: var(--text-mid);
}

.hero-links{
  margin-top: 40px;
  display: flex;
  gap: 28px;
  flex-wrap: wrap;
}

.hero-links a{
  font-size: 0.92rem;
  color: var(--text-hi);
  border-bottom: 1px solid var(--line);
  padding-bottom: 3px;
  transition: color 0.15s ease, border-color 0.15s ease;
}

.hero-links a:hover,
.hero-links a:focus-visible{
  color: var(--marigold);
  border-color: var(--marigold);
}

/* ---------------------------------------------------
   About
--------------------------------------------------- */
.about-body p{
  font-size: 1.02rem;
  max-width: 66ch;
  margin: 0 0 18px;
}

.about-body p:last-child{ margin-bottom: 0; }

/* ---------------------------------------------------
   Experience — ledger-style timeline
--------------------------------------------------- */
.timeline{
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid var(--line);
}

.timeline-entry{
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 24px;
  padding: 32px 0;
  border-bottom: 1px solid var(--line);
}

.timeline-when{
  font-size: 0.85rem;
  color: var(--text-low);
  padding-top: 4px;
}

.timeline-body h3{
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 10px;
}

.timeline-org{
  font-family: var(--sans);
  font-size: 0.95rem;
  color: var(--text-low);
  font-style: normal;
}

.timeline-body p{
  margin: 0;
  max-width: 58ch;
  color: var(--text-mid);
}

/* ---------------------------------------------------
   Skills
--------------------------------------------------- */
.skills-grid{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.skills-group h3{
  font-size: 1.05rem;
  color: var(--marigold);
  margin-bottom: 14px;
}

.skills-group ul{
  list-style: none;
  margin: 0;
  padding: 0;
}

.skills-group li{
  padding: 10px 0;
  border-top: 1px solid var(--line);
  font-size: 0.96rem;
  color: var(--text-mid);
}

.skills-group li:last-child{
  border-bottom: 1px solid var(--line);
}

/* ---------------------------------------------------
   Contact
--------------------------------------------------- */
.contact-lead{
  max-width: 50ch;
  font-size: 1.02rem;
  margin-bottom: 32px;
}

.contact-links{
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: flex-start;
}

.contact-links a{
  font-family: var(--serif);
  font-size: 1.15rem;
  color: var(--text-hi);
  border-bottom: 1px solid var(--line);
  padding-bottom: 2px;
  transition: color 0.15s ease, border-color 0.15s ease;
}

.contact-links a:hover,
.contact-links a:focus-visible{
  color: var(--marigold);
  border-color: var(--marigold);
}

/* ---------------------------------------------------
   Footer
--------------------------------------------------- */
.site-footer{
  position: relative;
  z-index: 1;
  padding: 32px var(--pad) 56px;
  max-width: var(--max);
  margin: 0 auto;
}

.site-footer p{
  margin: 0;
  font-size: 0.85rem;
  color: var(--text-low);
}

/* ---------------------------------------------------
   Focus visibility
--------------------------------------------------- */
a:focus-visible,
button:focus-visible{
  outline: 1px solid var(--marigold);
  outline-offset: 3px;
}

/* ---------------------------------------------------
   Responsive
--------------------------------------------------- */
@media (max-width: 760px){
  .site-nav{
    position: fixed;
    inset: 64px 0 auto 0;
    flex-direction: column;
    gap: 0;
    background: var(--ink-soft);
    border-bottom: 1px solid var(--line);
    padding: 8px var(--pad) 20px;
    transform: translateY(-8px);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.18s ease, transform 0.18s ease;
  }
  .site-nav.open{
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }
  .site-nav a{
    padding: 12px 0;
    border-bottom: 1px solid var(--line);
  }
  .nav-toggle{ display: flex; }

  .timeline-entry{
    grid-template-columns: 1fr;
    gap: 8px;
  }

  .skills-grid{
    grid-template-columns: 1fr;
    gap: 8px;
  }
}
