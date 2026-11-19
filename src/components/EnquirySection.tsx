import { useState, type FormEvent } from "react";
import robot from "../assets/images/enquiry/robot.png";
import interestIcon from "../assets/images/enquiry/step-interest.png";
import contactIcon from "../assets/images/enquiry/step-contact.png";
import pathwayIcon from "../assets/images/enquiry/step-pathway.png";

type FormNotice = {
  type: "error" | "unavailable";
  message: string;
};

function hasValidPhoneNumber(value: string) {
  if (!/^\+?[\d\s().-]+$/.test(value.trim())) return false;
  const digits = value.replace(/\D/g, "");
  return digits.length >= 7 && digits.length <= 15;
}

export default function EnquirySection() {
  const [isMinor, setIsMinor] = useState(false);
  const [notice, setNotice] = useState<FormNotice | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const phone = form.elements.namedItem("contactNumber") as HTMLInputElement;
    const guardian = form.elements.namedItem("guardianContact") as HTMLInputElement;

    phone.setCustomValidity(
      hasValidPhoneNumber(phone.value) ? "" : "Enter a valid contact number with 7 to 15 digits.",
    );
    guardian.setCustomValidity(
      !isMinor || (hasValidPhoneNumber(guardian.value) && /\p{L}/u.test(guardian.value))
        ? ""
        : "For learners under 18, enter a parent or guardian name and a valid phone number.",
    );

    if (!form.checkValidity()) {
      form.reportValidity();
      setNotice({ type: "error", message: "Please review the highlighted fields before continuing." });
      return;
    }

    setNotice({
      type: "unavailable",
      message: "The enquiry form is not connected to a submission service yet. Your details have not been sent.",
    });
  }

  return (
    <section className="enquiry-section" id="enquiry-section" aria-labelledby="enquiry-title">
      <div className="enquiry-container">
        <header className="enquiry-hero">
          <div className="enquiry-hero__copy">
            <span className="enquiry-label">
              <span className="enquiry-label__icon" aria-hidden="true">
                <svg viewBox="0 0 20 16">
                  <rect x="1" y="1" width="18" height="14" rx="2" />
                  <path d="m2 3 8 6 8-6" />
                </svg>
              </span>
              Get in Touch
            </span>
            <h1 id="enquiry-title">
              Make the Next Step
              <span>Feel Easy.</span>
            </h1>
            <p>
              Have a question, need guidance, or want to explore a learning pathway? Share a few
              details and our team will get in touch.
            </p>
          </div>
          <div className="enquiry-hero__art">
            <span className="enquiry-hero__orb" />
            <img src={robot} alt="3D robot holding a tablet and giving a thumbs-up" />
          </div>
        </header>

        <div className="enquiry-layout">
          <form className="enquiry-form enquiry-glass-card" noValidate onSubmit={handleSubmit}>
            <div className="enquiry-form__heading">
              <h2>Enquiry Form</h2>
              <p>Tell us a little about you and what you&apos;re interested in.</p>
            </div>

            <div className="enquiry-fields">
              <label className="enquiry-field enquiry-field--wide">
                <span>Learner Name <b>*</b></span>
                <input name="learnerName" type="text" autoComplete="name" placeholder="Who is this for?" required />
              </label>

              <label className="enquiry-field">
                <span>Contact Number <b>*</b></span>
                <input
                  name="contactNumber"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="So our team can call you."
                  required
                  onInput={(event) => event.currentTarget.setCustomValidity("")}
                />
              </label>

              <label className="enquiry-field">
                <span>Email Address <b>*</b></span>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="We'll send a short confirmation."
                  required
                />
              </label>

              <label className="enquiry-field enquiry-field--wide">
                <span>Parent / Guardian Name &amp; Contact{isMinor && <b> *</b>}</span>
                <input
                  name="guardianContact"
                  type="text"
                  autoComplete="off"
                  placeholder="If under 18, share a parent or guardian contact."
                  required={isMinor}
                  aria-describedby="guardian-hint"
                  onInput={(event) => event.currentTarget.setCustomValidity("")}
                />
                <span className="enquiry-field__hint" id="guardian-hint">
                  {isMinor ? "Required for learners under 18. Include their name and phone number." : "Required only if the learner is under 18."}
                </span>
              </label>

              <label className="enquiry-minor-check enquiry-field--wide">
                <input
                  type="checkbox"
                  name="learnerUnder18"
                  checked={isMinor}
                  onChange={(event) => {
                    setIsMinor(event.currentTarget.checked);
                    setNotice(null);
                  }}
                />
                <span>The learner is under 18</span>
              </label>

              <label className="enquiry-field">
                <span>School / University / Organisation</span>
                <input name="organisation" type="text" autoComplete="organization" placeholder="Optional." />
              </label>

              <label className="enquiry-field">
                <span>Current Class / Stage</span>
                <select name="stage" defaultValue="">
                  <option value="" disabled>Optional.</option>
                  <option>School student</option>
                  <option>Undergraduate</option>
                  <option>Postgraduate</option>
                  <option>Working professional</option>
                  <option>Other</option>
                </select>
              </label>

              <label className="enquiry-field enquiry-field--wide">
                <span>Area of Interest <b>*</b></span>
                <select name="interest" defaultValue="" required>
                  <option value="" disabled>What are you curious about right now?</option>
                  <option>AI, Software &amp; Digital Technology</option>
                  <option>Engineering, Automotive &amp; Advanced Technology</option>
                  <option>Camera &amp; Imaging Technology</option>
                  <option>Aerospace, Rocket &amp; Space</option>
                  <option>AI, Healthcare &amp; Medical Sciences</option>
                  <option>Career, Industry &amp; Professional Pathways</option>
                  <option>Young Minds &amp; Future Skills</option>
                  <option>Help me choose</option>
                </select>
              </label>

              <label className="enquiry-field">
                <span>Preferred Learning Pathway</span>
                <select name="pathway" defaultValue="">
                  <option value="" disabled>Not sure? Choose &quot;Help me choose&quot;.</option>
                  <option>Help me choose</option>
                  <option>Kids</option>
                  <option>School students</option>
                  <option>Undergraduate</option>
                  <option>Postgraduate</option>
                  <option>Professional</option>
                  <option>Tarvyx Life</option>
                </select>
              </label>

              <label className="enquiry-field">
                <span>Preferred Mode</span>
                <select name="mode" defaultValue="">
                  <option value="" disabled>Select a mode.</option>
                  <option>Online</option>
                  <option>Offline</option>
                </select>
              </label>

              <label className="enquiry-field enquiry-field--wide">
                <span>Anything You Would Like Us To Know?</span>
                <textarea
                  name="message"
                  rows={2}
                  placeholder="Share your questions, goals or anything else (optional)."
                />
              </label>
            </div>

            <label className="enquiry-consent">
              <input name="consent" type="checkbox" required />
              <span>
                I agree to be contacted by Tarvyx Education about learning pathways and have read the
                Privacy Policy.
              </span>
            </label>

            <div className="enquiry-form__footer">
              <button className="enquiry-submit" type="submit">
                Share My Interest <span aria-hidden="true">→</span>
              </button>
              {notice && (
                <p className={`enquiry-form__notice enquiry-form__notice--${notice.type}`} role="status">
                  {notice.message}
                </p>
              )}
            </div>
          </form>

          <aside className="enquiry-aside">
            <section className="enquiry-talk enquiry-glass-card" aria-labelledby="enquiry-talk-title">
              <h2 id="enquiry-talk-title">Prefer to Talk First?</h2>
              <div className="enquiry-talk__body">
                <span className="whatsapp-icon" aria-hidden="true">
                  <svg viewBox="0 0 32 32">
                    <path d="M16 3.2a12.3 12.3 0 0 0-10.5 18.7L4 28l6.3-1.6A12.3 12.3 0 1 0 16 3.2Z" />
                    <path d="M11 9.5c-.5-.8-1-.8-1.5-.8-.4 0-.8 0-1.1.5-.4.4-1.5 1.4-1.5 3.5s1.5 4.1 1.7 4.4c.2.3 2.9 4.7 7.1 6.4 3.5 1.4 4.2 1.1 5 .9.8-.1 2.6-1.1 3-2.1.4-1.1.4-1.9.3-2.1-.1-.2-.4-.4-.9-.6l-3.1-1.5c-.4-.2-.8-.3-1.1.3-.3.5-1.2 1.5-1.4 1.8-.3.3-.5.4-1 .1s-2-.7-3.8-2.3c-1.4-1.2-2.3-2.7-2.6-3.2-.3-.5 0-.7.2-1 .2-.2.5-.6.7-.8.2-.3.3-.5.5-.8.2-.3.1-.6 0-.8-.1-.2-1.1-2.8-1.6-3.8Z" />
                  </svg>
                </span>
                <p>Call or message us on WhatsApp (available during working hours).</p>
              </div>
              <button className="enquiry-whatsapp" type="button" disabled aria-describedby="whatsapp-unavailable">
                Chat on WhatsApp <span aria-hidden="true">→</span>
              </button>
              <p className="enquiry-aside__note" id="whatsapp-unavailable">
                WhatsApp contact details are not configured yet.
              </p>
            </section>

            <section className="enquiry-next enquiry-glass-card" aria-labelledby="enquiry-next-title">
              <h2 id="enquiry-next-title">What Happens Next?</h2>
              <ol className="enquiry-steps">
                <li>
                  <span className="enquiry-step__icon"><img src={interestIcon} alt="" /></span>
                  <span className="enquiry-step__copy">
                    <strong>We receive your interest</strong>
                    <span>Our team reviews your enquiry.</span>
                  </span>
                </li>
                <li>
                  <span className="enquiry-step__icon"><img src={contactIcon} alt="" /></span>
                  <span className="enquiry-step__copy">
                    <strong>We get in touch</strong>
                    <span>A team member will contact you soon.</span>
                  </span>
                </li>
                <li>
                  <span className="enquiry-step__icon"><img src={pathwayIcon} alt="" /></span>
                  <span className="enquiry-step__copy">
                    <strong>Explore your pathway</strong>
                    <span>Together we&apos;ll suggest the right next step for you.</span>
                  </span>
                </li>
              </ol>
            </section>
          </aside>
        </div>
      </div>
    </section>
  );
}
