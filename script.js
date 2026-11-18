/* =========================================================
   LUKAS ENTERTAINMENT — script.js
   - language switch (KR / EN)
   - header, mobile nav, scroll progress
   - reveal, counters, nav highlight
   - portfolio filter, contact tabs, form validation
   - policy modals
   ========================================================= */
(function () {
  "use strict";

  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------------------------------------------------
     EN dictionary (Korean lives in the HTML)
     --------------------------------------------------------- */
  const EN = {
    "a11y.skip": "Skip to content",

    "hero.eyebrow": "LUKAS ENTERTAINMENT — SEOUL, KOREA",
    "hero.sub": "The best marketing, outstanding craft,<br>endless innovation",
    "hero.desc": "From music production to creator management and short-form content.<br> An entertainment company that creates the flow of the market.",
    "hero.cta1": "Start a project",
    "hero.cta2": "View portfolio",
    "hero.meta2l": "CREATORS",
    "hero.meta3l": "FOLLOWERS",
    "hero.scroll": "SCROLL",

    "about.title1": "Where people and content meet,",
    "about.title2": "we design the flow of your brand.",
    "about.lead": "LUKAS ENTERTAINMENT is a content company that connects music production, creator management and short-form marketing into one.",
    "about.body1": "Built on influential music creators, we respect the needs of finely segmented audiences and run a content-driven marketing business for sustainable growth together with our creators.",
    "about.body2": "We hold every piece of infrastructure marketing needs in-house — from planning to filming, production, music and space — and work as one team so brands and creators move toward the same goal.",
    "about.fact1k": "Founded",
    "about.fact2k": "Teams",
    "about.fact2v": "Production · Marketing · Management",
    "about.fact3k": "Creators",
    "about.caption": "IN-HOUSE STUDIO — SEOUL",
    "about.valueDesc": "Three standards behind everything we make.",
    "about.orgDesc": "Four teams moving as one flow, from planning to production and distribution.",

    "value.1t": "IMPACT",
    "value.1d": "Overwhelming, content-led marketing influence. We understand how each platform speaks and find the point where audiences react first.",
    "value.2t": "CRAFT",
    "value.2d": "In-house capability across planning, filming, editing, music and space. An idea is carried through to the quality of the final piece.",
    "value.3t": "GROWTH",
    "value.3d": "Partnerships where creators and brands grow for the long run. Not a single campaign, but the next flow designed together.",

    "ov.name": "Company",
    "ov.nameV": "LUKAS ENTERTAINMENT Co., Ltd.",
    "ov.ceo": "CEO",
    "ov.ceoV": "Lee Jong-young (Lucas)",
    "ov.founded": "Founded",
    "ov.foundedV": "May 17, 2023",
    "ov.biz": "Business",
    "ov.bizV": "Music production · Creator management · Short-form marketing · Production &amp; studio",
    "ov.addr": "Address",
    "ov.addrV": "4F #4511, 13 Nonhyeon-ro 132-gil, Gangnam-gu, Seoul, Korea (Nonhyeon-dong)",
    "ov.mail": "E-mail",

    "org.1t": "MUSIC PRODUCTION",
    "org.1d": "Composition, arrangement, mixing, mastering, music planning and distribution",
    "org.2t": "MARKETING &amp; SHORT FORM",
    "org.2d": "Campaign planning, short-form production, multi-channel operation",
    "org.3t": "CREATOR MANAGEMENT",
    "org.3d": "Golfluencer and mufluencer management, commerce",
    "org.4t": "PRODUCTION &amp; STUDIO",
    "org.4d": "Direction, filming, editing, sound and in-house studio",

    "ceo.msg": "Good content moves people. Where brands, creators and music meet, we always look at what comes next. LUKAS ENTERTAINMENT wants to build that flow with partners for a long time.",
    "ceo.name": "Lee Jong-young",
    "ceo.role": "CEO · LUKAS ENTERTAINMENT",

    "biz.title1": "Everything marketing needs,",
    "biz.title2": "from one team.",
    "biz.lead": "Using TikTok, YouTube, Meta and every platform in between, we create overwhelming, content-led marketing influence.",
    "biz.1t": "MARKETING<br>SOLUTIONS",
    "biz.1d": "We translate a brand's message into the language of content. With platform-specific strategy and performance data, we design campaigns that build awareness and conversion together.",
    "biz.1a": "Campaign planning", "biz.1b": "Content operation", "biz.1c": "Performance",
    "biz.2t": "MANAGEMENT",
    "biz.2d": "We connect influential creators with management, production and commerce. Protecting each creator's own color while designing sustainable growth is our job.",
    "biz.2a": "Exclusive management", "biz.2b": "Branding", "biz.2c": "Commerce",
    "biz.3t": "MUSIC<br>PRODUCTION",
    "biz.3d": "From music planning to writing, composition, arrangement, mixing and mastering, we build the sound that makes an artist's or brand's color clearest.",
    "biz.3a": "Writing · arrangement", "biz.3b": "Mix · mastering", "biz.3c": "Distribution",
    "biz.4t": "SHORT<br>FORM",
    "biz.4d": "Short-form-native planning, filming and editing tuned to each platform's algorithm and viewing habits — so one video becomes the entry point for the whole campaign.",
    "biz.4a": "Concept planning", "biz.4b": "Filming · editing", "biz.4c": "Multi-channel release",

    "cr.title1": "24 creators,",
    "cr.title2": "360 million reactions.",
    "cr.lead": "Built on influential music creators, we respect the needs of finely segmented audiences and run a content-driven marketing business for sustainable growth together with our creators.",
    "cr.u1": "",
    "cr.l1": "Signed creators",
    "cr.l2": "Followers",
    "cr.l3": "Total views",
    "cr.l4": "Total likes",
    "cr.gbadge": "GOLF CREATOR NETWORK",
    "cr.gd": "A creator network specialized in golf. Round, lesson, gear review and golf lifestyle content connect brands and consumers in the most natural way.",
    "cr.ga": "Round · lesson content", "cr.gb": "Gear review", "cr.gc": "Golf brand campaigns",
    "cr.mbadge": "MUSIC CREATOR NETWORK",
    "cr.md": "Music influencers who connect music and lifestyle. Cover, live and playlist content puts music releases and brands in the same spotlight.",
    "cr.ma": "Cover · live", "cr.mb": "Music promotion", "cr.mc": "Brand collaboration",
    "cr.ctaText": "We are waiting for creators who want to grow with LUKAS ENTERTAINMENT.",
    "cr.cta": "Apply as a creator",

    "pr.title1": "From planning to filming, production, space and music",
    "pr.title2": "— every piece of the infrastructure.",
    "pr.1t": "PRODUCTION TEAM",
    "pr.1d": "Direction, filming, editing and sound are handled by one in-house team. The intent set at the planning stage is carried through to the final cut.",
    "pr.1a": "Pre-production · storyboard · location",
    "pr.1b": "Filming · lighting · sound recording",
    "pr.1c": "Editing · color · motion graphics",
    "pr.1d2": "Sound design · mixing",
    "pr.2t": "STUDIO",
    "pr.2d": "Our own studio lets filming and music work continue in one place. We change sets and lighting to fit the tone of the content, and finish the music in the same building.",
    "pr.2a": "Filming studio · lighting set-ups",
    "pr.2b": "Vocal · mixing room",
    "pr.2c": "Edit · post-production desks",
    "pr.2d2": "Small shoots · interviews · live",

    "pf.title1": "A content-driven marketing business,",
    "pf.title2": "made by the best specialists together.",
    "pf.f0": "ALL", "pf.f1": "MUSIC", "pf.f2": "SHORT FORM", "pf.f3": "GOLF", "pf.f4": "BRAND", "pf.f5": "LIVE",
    "pf.1t": "Music release campaign",
    "pf.1d": "Music planning · music video · short-form rollout",
    "pf.2t": "Short-form series",
    "pf.2d": "TikTok · Reels · YouTube Shorts",
    "pf.3t": "Golfluencer collaboration",
    "pf.3d": "Rounds · lessons · gear reviews",
    "pf.4t": "Brand launch campaign",
    "pf.4d": "Product film · content campaign · channel operation",
    "pf.5t": "Live & event production",
    "pf.5d": "Stage direction · filming · live content",
    "pf.6t": "Editing & sound post",
    "pf.6d": "Cut · color · mixing",
    "pf.note": "Detailed material for each project is available on request.",

    "ct.title1": "Ready to make something together?",
    "ct.lead": "We are open for collaboration inquiries and creator applications. Leave a message and we will reply within two business days.",
    "ct.infoTitle": "CONTACT",
    "ct.addrK": "ADDRESS",
    "ct.addrV": "4F #4511, 13 Nonhyeon-ro 132-gil, Gangnam-gu, Seoul, Korea (Nonhyeon-dong)",
    "ct.hoursK": "HOURS",
    "ct.hoursV": "Weekdays 10:00 – 19:00 (KST)",
    "ct.note": "Please send attachments by e-mail. (max 3MB · jpg, png, pdf, zip)",
    "ct.tipsT": "Helpful details to include",
    "ct.tip1": "Project goal and objectives",
    "ct.tip2": "Preferred schedule",
    "ct.tip3": "Budget range",
    "ct.tip4": "Reference channels · materials",
    "ct.tab1": "Collaboration",
    "ct.tab2": "Creator apply",

    "f.company": "Company / Brand <em>*</em>",
    "f.companyPh": "Company or brand name",
    "f.name": "Contact name <em>*</em>",
    "f.namePh": "Your name",
    "f.email": "E-mail <em>*</em>",
    "f.phone": "Phone",
    "f.type": "Inquiry type <em>*</em>",
    "f.type0": "Please select",
    "f.type1": "Music production",
    "f.type2": "Marketing · short form",
    "f.type3": "Creator collaboration",
    "f.type4": "Production · studio",
    "f.type5": "Other",
    "f.msg": "Message <em>*</em>",
    "f.msgPh": "Tell us about the goal, schedule and budget so we can answer more precisely.",
    "f.consent": "I agree to the collection and use of my personal information.",
    "f.detail": "[Details]",
    "f.send": "SEND",
    "f.hint": "* Required fields.",
    "f.aName": "Name / Stage name <em>*</em>",
    "f.aNamePh": "Include your creator name",
    "f.platform": "Main platform <em>*</em>",
    "f.other": "Other",
    "f.url": "Channel URL <em>*</em>",
    "f.followers": "Followers",
    "f.intro": "About you <em>*</em>",
    "f.introPh": "What kind of content do you make, and where would you like to go with us?",
    "f.sendApply": "Apply",
    "f.doneT": "Your message is ready.",
    "f.doneD": "Press the button below to open your mail app with this message filled in. Then send it from the app.",
    "f.openMail": "Open mail app",
    "f.copy": "Copy message",
    "f.again": "Write again",
    "f.doneAlt": "If your mail app does not open, please send it directly to ljy6535@naver.com.",

    "ft.tagline": "The best marketing, outstanding craft, endless innovation.",
    "ft.company": "LUKAS ENTERTAINMENT Co., Ltd.",
    "ft.ceo": "CEO",
    "ft.ceoV": "Lee Jong-young",
    "ft.biznum": "Business registration no.",
    "ft.addr": "Address",
    "ft.addrV": "4F #4511, 13 Nonhyeon-ro 132-gil, Gangnam-gu, Seoul, Korea",
    "ft.email": "E-mail",
    "ft.rights": "All rights reserved.",
    "ft.terms": "Terms of use",
    "ft.privacy": "Privacy policy",

    "modal.termsTitle": "Terms of Use",
    "modal.termsBody": `
      <h3>Article 1 (Purpose)</h3>
      <p>These terms set out the conditions for using the website and the content, marketing and creator management services provided by LUKAS ENTERTAINMENT Co., Ltd. (the “Company”).</p>
      <h3>Article 2 (Definitions)</h3>
      <p>“User” means anyone who views this website or contacts the Company through it. “Services” means all work provided by the Company, including music production, marketing, production and creator management.</p>
      <h3>Article 3 (Effect and Changes)</h3>
      <p>These terms take effect when posted on this website. The Company may revise them when necessary, and revised terms take effect on the date posted.</p>
      <h3>Article 4 (Inquiries and Contracts)</h3>
      <p>An inquiry sent through this website is not an offer of contract. Scope, schedule and fees are set through separate discussion and a signed agreement.</p>
      <h3>Article 5 (Intellectual Property)</h3>
      <p>All text, images, design and logos on this website belong to the Company. Users may not copy, distribute, modify or commercially use them without prior written consent.</p>
      <h3>Article 6 (Limitation of Liability)</h3>
      <p>The Company is not liable for interruptions caused by force majeure or network failures. Information on this website may change without notice.</p>
      <h3>Article 7 (Governing Law)</h3>
      <p>These terms are governed by the laws of the Republic of Korea. Disputes are subject to the Seoul Central District Court as the court of first instance.</p>
      <p class="modal-date">Effective: January 1, 2026</p>`,
    "modal.privacyTitle": "Privacy Policy",
    "modal.privacyBody": `
      <p>LUKAS ENTERTAINMENT Co., Ltd. (the “Company”) values your personal information and complies with the Personal Information Protection Act and related laws.</p>
      <h3>1. Information we collect</h3>
      <p>Collaboration inquiries: company / brand name, contact name, e-mail, phone number, message.<br>
      Creator applications: name or stage name, e-mail, phone number, main platform, channel URL, follower count, introduction.</p>
      <h3>2. Purpose of collection and use</h3>
      <p>Responding to inquiries, reviewing collaborations, screening creator applications, replying with results, and contacting you before a contract is signed.</p>
      <h3>3. Retention period</h3>
      <p>We keep the information for one year after the purpose is fulfilled and then destroy it without delay, except where related laws require a longer retention period.</p>
      <h3>4. Provision to third parties</h3>
      <p>We do not provide your personal information to third parties beyond the purpose of collection, except with your prior consent or where required by law.</p>
      <h3>5. Outsourcing</h3>
      <p>We may outsource personal information processing to the extent necessary for our work and will disclose such arrangements in this policy.</p>
      <h3>6. Your rights</h3>
      <p>You may request access, correction, deletion or suspension of processing of your personal information at any time, and we will act without delay.</p>
      <h3>7. Privacy officer</h3>
      <p>Name: Lee Jong-young (CEO)<br>Contact: ljy6535@naver.com</p>
      <h3>8. Notice of changes</h3>
      <p>If this policy changes, we will announce it on this website in advance.</p>
      <p class="modal-date">Effective: January 1, 2026</p>`
  };

  const ERR = {
    ko: {
      required: "필수 입력 항목입니다.",
      email: "올바른 이메일 주소를 입력해 주세요.",
      url: "http(s)://를 포함한 올바른 주소를 입력해 주세요.",
      consent: "개인정보 수집 및 이용에 동의해 주세요.",
      copied: "복사되었습니다",
      copyFail: "복사에 실패했습니다"
    },
    en: {
      required: "This field is required.",
      email: "Please enter a valid e-mail address.",
      url: "Please enter a valid address including http(s)://.",
      consent: "Please agree to the collection and use of your personal information.",
      copied: "Copied",
      copyFail: "Copy failed"
    }
  };

  let lang = "ko";
  const ORIGINAL = new Map(); // key -> innerHTML (Korean)

  /* ---------------------------------------------------------
     Language
     --------------------------------------------------------- */
  function cacheOriginals() {
    $$("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!ORIGINAL.has(key)) ORIGINAL.set(key, el.innerHTML);
    });
    $$("[data-i18n-ph]").forEach((el) => {
      const key = el.getAttribute("data-i18n-ph");
      if (!ORIGINAL.has(key)) ORIGINAL.set(key, el.getAttribute("placeholder") || "");
    });
  }

  function applyLang(next, persist) {
    lang = next === "en" ? "en" : "ko";
    document.documentElement.lang = lang;

    $$("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (lang === "en" && typeof EN[key] === "string") {
        el.innerHTML = EN[key];
      } else if (lang === "ko" && ORIGINAL.has(key)) {
        el.innerHTML = ORIGINAL.get(key);
      }
    });

    $$("[data-i18n-ph]").forEach((el) => {
      const key = el.getAttribute("data-i18n-ph");
      if (lang === "en" && typeof EN[key] === "string") {
        el.setAttribute("placeholder", EN[key]);
      } else if (lang === "ko" && ORIGINAL.has(key)) {
        el.setAttribute("placeholder", ORIGINAL.get(key));
      }
    });

    // select option values used in the composed mail stay Korean for the office inbox,
    // but the visible label follows the chosen language through data-i18n.

    document.title = lang === "en"
      ? "LUKAS ENTERTAINMENT — Creating Trends"
      : "주식회사 루카스엔터테인먼트 | LUKAS ENTERTAINMENT — CREATING TRENDS";

    $$(".lang-switch button").forEach((b) => {
      const active = b.getAttribute("data-lang") === lang;
      b.classList.toggle("is-active", active);
      b.setAttribute("aria-pressed", String(active));
    });

    $("#menu-toggle").setAttribute("aria-label", lang === "en" ? "Open menu" : "메뉴 열기");
    $(".skip-link").textContent = lang === "en" ? EN["a11y.skip"] : (ORIGINAL.get("a11y.skip") || "본문으로 건너뛰기");

    if (persist) {
      try { localStorage.setItem("lukas-lang", lang); } catch (e) {}
    }
  }

  /* ---------------------------------------------------------
     Header / scroll
     --------------------------------------------------------- */
  const header = $("#site-header");
  const scrollBar = $("#scroll-bar");

  function onScroll() {
    const y = window.scrollY;
    header.classList.toggle("is-scrolled", y > 30);
    const h = document.documentElement.scrollHeight - window.innerHeight;
    scrollBar.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
  }

  /* ---------------------------------------------------------
     Mobile nav
     --------------------------------------------------------- */
  const toggle = $("#menu-toggle");
  const mobileNav = $("#mobile-nav");

  function setMenu(open) {
    toggle.setAttribute("aria-expanded", String(open));
    mobileNav.classList.toggle("is-open", open);
    mobileNav.setAttribute("aria-hidden", String(!open));
    document.body.classList.toggle("no-scroll", open);
    toggle.setAttribute("aria-label", open
      ? (lang === "en" ? "Close menu" : "메뉴 닫기")
      : (lang === "en" ? "Open menu" : "메뉴 열기"));
  }

  toggle.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"));
  $$("#mobile-nav a").forEach((a) => a.addEventListener("click", () => setMenu(false)));

  /* ---------------------------------------------------------
     Reveal + counters
     --------------------------------------------------------- */
  function initReveal() {
    const items = $$("[data-reveal]");
    if (!("IntersectionObserver" in window) || reduceMotion) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    items.forEach((el) => io.observe(el));
  }

  function animateCount(el) {
    const target = parseFloat(el.getAttribute("data-count"));
    const dec = parseInt(el.getAttribute("data-decimals") || "0", 10);
    if (reduceMotion) { el.textContent = target.toFixed(dec); return; }
    const dur = 1600;
    const start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = (target * eased).toFixed(dec);
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = target.toFixed(dec);
    }
    requestAnimationFrame(tick);
  }

  function initCounters() {
    const nums = $$("[data-count]");
    if (!("IntersectionObserver" in window)) { nums.forEach(animateCount); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { animateCount(e.target); io.unobserve(e.target); }
      });
    }, { threshold: 0.6 });
    nums.forEach((n) => io.observe(n));
  }

  /* ---------------------------------------------------------
     Active nav
     --------------------------------------------------------- */
  function initNavSpy() {
    const sections = $$("main section[id]");
    const links = $$(".nav-desktop a");
    if (!("IntersectionObserver" in window) || !sections.length) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const id = e.target.id;
        links.forEach((l) => {
          if (l.getAttribute("data-nav") === id) l.setAttribute("aria-current", "true");
          else l.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach((s) => io.observe(s));
  }

  /* ---------------------------------------------------------
     Portfolio filter
     --------------------------------------------------------- */
  function initPortfolio() {
    const buttons = $$(".pf-filter");
    const cards = $$(".pf-card");
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const f = btn.getAttribute("data-filter");
        buttons.forEach((b) => {
          const on = b === btn;
          b.classList.toggle("is-active", on);
          b.setAttribute("aria-pressed", String(on));
        });
        cards.forEach((card) => {
          const cats = (card.getAttribute("data-cat") || "").split(/\s+/);
          const show = f === "all" || cats.includes(f);
          card.classList.toggle("is-hidden", !show);
          if (show && !reduceMotion && card.animate) {
            card.animate(
              [{ opacity: 0, transform: "translateY(10px)" }, { opacity: 1, transform: "none" }],
              { duration: 420, easing: "cubic-bezier(.22,.61,.36,1)" }
            );
          }
        });
      });
    });
  }

  /* ---------------------------------------------------------
     Contact tabs
     --------------------------------------------------------- */
  const tabs = $$(".form-tab");
  const forms = { collab: $("#form-collab"), creator: $("#form-creator") };
  const resultBox = $("#form-result");
  let currentTab = "collab";

  function showTab(name, opts) {
    currentTab = name;
    tabs.forEach((t) => {
      const on = t.getAttribute("data-tab") === name;
      t.classList.toggle("is-active", on);
      t.setAttribute("aria-pressed", String(on));
    });
    Object.keys(forms).forEach((k) => { forms[k].hidden = k !== name; });
    if (!opts || !opts.keepResult) {
      resultBox.hidden = true;
      forms[name].hidden = false;
    }
  }

  tabs.forEach((t) => t.addEventListener("click", () => showTab(t.getAttribute("data-tab"))));

  // "Apply as a creator" links jump to contact and open the apply tab
  $$("[data-apply-link]").forEach((a) => {
    a.addEventListener("click", () => showTab("creator"));
  });

  /* ---------------------------------------------------------
     Form validation + mailto
     --------------------------------------------------------- */
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  function setError(field, msg) {
    const err = $("[data-err]", field);
    field.classList.toggle("has-error", !!msg);
    if (err) {
      err.textContent = msg || "";
      err.classList.toggle("is-show", !!msg);
    }
  }

  function validate(form) {
    let ok = true;
    $$("input[required], select[required], textarea[required]", form).forEach((input) => {
      if (input.type === "checkbox") return;
      const field = input.closest(".field");
      const val = (input.value || "").trim();
      let msg = "";
      if (!val) msg = ERR[lang].required;
      else if (input.type === "email" && !emailRe.test(val)) msg = ERR[lang].email;
      else if (input.type === "url") {
        try {
          const u = new URL(val);
          if (!/^https?:$/.test(u.protocol)) throw 0;
        } catch (e) { msg = ERR[lang].url; }
      }
      setError(field, msg);
      if (msg) ok = false;
    });

    const consent = $('input[name="consent"]', form);
    const consentErr = $(".consent-err", form);
    if (consent && !consent.checked) {
      consentErr.textContent = ERR[lang].consent;
      consentErr.classList.add("is-show");
      ok = false;
    } else if (consentErr) {
      consentErr.classList.remove("is-show");
      consentErr.textContent = "";
    }
    return ok;
  }

  function val(form, name) {
    const el = form.elements[name];
    return el ? String(el.value || "").trim() : "";
  }

  function buildMessage(form) {
    const isCollab = form.getAttribute("data-form") === "collab";
    const lines = [];
    if (isCollab) {
      lines.push("[협업 문의]");
      lines.push("회사 / 브랜드: " + val(form, "company"));
      lines.push("담당자: " + val(form, "name"));
      lines.push("이메일: " + val(form, "email"));
      lines.push("연락처: " + (val(form, "phone") || "-"));
      lines.push("문의 유형: " + val(form, "type"));
      lines.push("");
      lines.push("문의 내용:");
      lines.push(val(form, "message"));
      lines.push("");
      lines.push("----");
      lines.push("루카스엔터테인먼트 홈페이지 협업 문의");
      return {
        subject: "[협업 문의] " + val(form, "company") + " · " + val(form, "name"),
        body: lines.join("\n")
      };
    }
    lines.push("[크리에이터 지원]");
    lines.push("이름 / 활동명: " + val(form, "name"));
    lines.push("이메일: " + val(form, "email"));
    lines.push("연락처: " + (val(form, "phone") || "-"));
    lines.push("주요 플랫폼: " + val(form, "platform"));
    lines.push("채널 URL: " + val(form, "url"));
    lines.push("팔로워 규모: " + (val(form, "followers") || "-"));
    lines.push("");
    lines.push("자기소개:");
    lines.push(val(form, "message"));
    lines.push("");
    lines.push("----");
    lines.push("루카스엔터테인먼트 홈페이지 크리에이터 지원");
    return {
      subject: "[크리에이터 지원] " + val(form, "name"),
      body: lines.join("\n")
    };
  }

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!validate(form)) {
      const firstBad = $(".has-error input, .has-error select, .has-error textarea", form);
      if (firstBad) firstBad.focus({ preventScroll: true });
      return;
    }
    const msg = buildMessage(form);
    const mailto = "mailto:ljy6535@naver.com?subject=" + encodeURIComponent(msg.subject) + "&body=" + encodeURIComponent(msg.body);
    $("#mailto-link").setAttribute("href", mailto);
    $("#result-body").textContent = "To: ljy6535@naver.com\nSubject: " + msg.subject + "\n\n" + msg.body;
    resultBox.hidden = false;
    form.hidden = true;
    resultBox.setAttribute("data-message", msg.body);
    resultBox.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
  }

  Object.values(forms).forEach((f) => {
    f.addEventListener("submit", handleSubmit);
    // clear an error as soon as the user edits the field
    $$("input, select, textarea", f).forEach((input) => {
      input.addEventListener("input", () => {
        const field = input.closest(".field");
        if (field && field.classList.contains("has-error")) setError(field, "");
        if (input.type === "checkbox") {
          const ce = $(".consent-err", f);
          ce.classList.remove("is-show");
        }
      });
    });
  });

  $("#reset-btn").addEventListener("click", () => {
    resultBox.hidden = true;
    forms[currentTab].hidden = false;
  });

  function legacyCopy(text) {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.select();
    let ok = false;
    try { ok = document.execCommand("copy"); } catch (e) { ok = false; }
    document.body.removeChild(ta);
    return ok;
  }

  $("#copy-btn").addEventListener("click", async () => {
    const text = resultBox.getAttribute("data-message") || "";
    const btn = $("#copy-btn");
    const original = lang === "en" ? EN["f.copy"] : "내용 복사";
    let ok = false;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        ok = true;
      }
    } catch (e) { ok = false; }
    if (!ok) ok = legacyCopy(text);
    btn.textContent = ok ? ERR[lang].copied : ERR[lang].copyFail;
    setTimeout(() => { btn.textContent = original; }, 1800);
  });

  /* ---------------------------------------------------------
     Modals
     --------------------------------------------------------- */
  let lastFocused = null;

  function openModal(id) {
    const modal = document.getElementById("modal-" + id);
    if (!modal) return;
    lastFocused = document.activeElement;
    modal.hidden = false;
    document.body.classList.add("no-scroll");
    const close = $(".modal-close", modal);
    if (close) close.focus({ preventScroll: true });
  }

  function closeModal(modal) {
    modal.hidden = true;
    document.body.classList.remove("no-scroll");
    if (lastFocused && lastFocused.focus) lastFocused.focus({ preventScroll: true });
  }

  $$("[data-modal]").forEach((btn) => {
    btn.addEventListener("click", () => openModal(btn.getAttribute("data-modal")));
  });

  $$(".modal").forEach((modal) => {
    $$("[data-close]", modal).forEach((el) => el.addEventListener("click", () => closeModal(modal)));
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const open = $$(".modal").find((m) => !m.hidden);
      if (open) closeModal(open);
      else if (mobileNav.classList.contains("is-open")) setMenu(false);
    }
    // focus trap inside an open modal
    if (e.key === "Tab") {
      const modal = $$(".modal").find((m) => !m.hidden);
      if (!modal) return;
      const focusables = $$('button, a[href], input, textarea, select, [tabindex]:not([tabindex="-1"])', modal)
        .filter((el) => !el.disabled && el.offsetParent !== null);
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* ---------------------------------------------------------
     Init
     --------------------------------------------------------- */
  function init() {
    cacheOriginals();
    const saved = (() => { try { return localStorage.getItem("lukas-lang"); } catch (e) { return null; } })();
    applyLang(saved === "en" ? "en" : "ko", false);

    $$(".lang-switch button").forEach((b) => {
      b.addEventListener("click", () => applyLang(b.getAttribute("data-lang"), true));
    });

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    initReveal();
    initCounters();
    initNavSpy();
    initPortfolio();

    $("#year").textContent = new Date().getFullYear();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
