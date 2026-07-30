const navToggle = document.querySelector("[data-nav-toggle]");
const siteNav = document.querySelector("[data-site-nav]");
const checkoutUrl = document.body.dataset.checkoutUrl;

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      document.body.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open navigation");
    }
  });
}

document.querySelectorAll("[data-newsletter-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const input = form.querySelector("input[type='email']");
    const status = form.querySelector("[data-form-status]");

    if (!(input instanceof HTMLInputElement) || !status) {
      return;
    }

    const email = input.value.trim();

    if (!input.validity.valid || !email) {
      status.textContent = "Enter a valid email to join the list.";
      input.focus();
      return;
    }

    try {
      const savedEmails = JSON.parse(localStorage.getItem("patternIssueEmails") || "[]");

      if (!savedEmails.includes(email)) {
        savedEmails.push(email);
        localStorage.setItem("patternIssueEmails", JSON.stringify(savedEmails));
      }
    } catch {
      // Some privacy contexts block localStorage; the visible signup state should still work.
    }

    status.textContent = "You're on the list. The first issue will meet you there.";
    form.reset();
  });
});

document.querySelectorAll("[data-checkout-button]").forEach((button) => {
  if (checkoutUrl) {
    button.setAttribute("href", checkoutUrl);
    return;
  }

  button.addEventListener("click", (event) => {
    event.preventDefault();

    const note = document.querySelector("[data-purchase-note]");
    const newsletter = document.querySelector("#newsletter");
    const emailInput = document.querySelector("#newsletter input[type='email']");

    if (note) {
      note.textContent = "Checkout is ready to connect. Join the launch list for the first release.";
    }

    if (newsletter) {
      newsletter.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    if (emailInput instanceof HTMLInputElement) {
      window.setTimeout(() => emailInput.focus(), 360);
    }
  });
});
