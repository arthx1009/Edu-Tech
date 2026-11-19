import { useState } from "react";
import educationIcon from "../assets/images/faq/01-education.png";
import peopleIcon from "../assets/images/faq/02-people.png";
import pathwayIcon from "../assets/images/faq/03-pathway.png";
import learningIcon from "../assets/images/faq/04-learning.png";
import experienceIcon from "../assets/images/faq/05-experience.png";
import classesIcon from "../assets/images/faq/06-classes.png";
import expertsIcon from "../assets/images/faq/07-experts.png";
import kyroIcon from "../assets/images/faq/08-kyro.png";
import certificationIcon from "../assets/images/faq/09-certification.png";
import privacyIcon from "../assets/images/faq/10-privacy.png";
import healthcareIcon from "../assets/images/faq/11-healthcare.png";
import gettingStartedIcon from "../assets/images/faq/12-getting-started.png";

const faqs = [
  {
    question: "What is Tarvyx Education?",
    answer: "A multidisciplinary learning platform that turns curiosity into capability through practical, industry-relevant learning. It is a division of Tarvyx Mind Systems Group.",
    icon: educationIcon,
  },
  {
    question: "Who can learn at Tarvyx?",
    answer: "Learners of every stage: Kids (5–8), Pro Kids (8–12), Spark (10–14), Pro Spark (14–18), Future (18–25), Professional (25+) and Tarvyx Life for any age.",
    icon: peopleIcon,
  },
  {
    question: "Which pathway is right for me or my child?",
    answer: "Start with the stage that feels right. If you sit between two stages, tell us what interests you and our team will help you choose.",
    icon: pathwayIcon,
  },
  {
    question: "What can I learn?",
    answer: "Fields include AI, software and digital technology; engineering, automotive and advanced technology; career and professional skills; future skills for young minds; and AI, healthcare and medical sciences.",
    icon: learningIcon,
  },
  {
    question: "Do I need prior experience?",
    answer: "You do not need to know where your curiosity will lead. Start by exploring what interests you, and our team will help you find a suitable starting point.",
    icon: experienceIcon,
  },
  {
    question: "Are classes online or offline?",
    answer: "Tarvyx offers online and offline classes and reaches learners across India. Availability can differ by pathway and location, so ask the team about yours.",
    icon: classesIcon,
  },
  {
    question: "Who guides the learning?",
    answer: "Learning is shaped by professionals and specialists who practise in the field, across diverse domains.",
    icon: expertsIcon,
  },
  {
    question: "What is Kyro?",
    answer: "Kyro is an AI-powered learning companion designed to make learning more accessible, guided and engaging.",
    icon: kyroIcon,
  },
  {
    question: "What are the fees, duration and certification?",
    answer: "These can differ by pathway. Share your interest and our team will give you current, accurate details for the pathway you are considering. (Publish specifics only once confirmed.)",
    icon: certificationIcon,
  },
  {
    question: "Is my, or my child's, information safe?",
    answer: "We only ask what we need to help you find a suitable pathway, and we explain how we use it in our Privacy Policy.",
    icon: privacyIcon,
  },
  {
    question: "Does healthcare learning qualify me to practise?",
    answer: "No. Healthcare learning at Tarvyx is educational and does not replace formal medical qualification, licensing or clinical training.",
    icon: healthcareIcon,
  },
  {
    question: "How do I get started?",
    answer: "Click \"Share My Interest\", tell us what you are curious about, and our team will start a conversation with you.",
    icon: gettingStartedIcon,
  },
];

export default function FaqSection() {
  const [openItems, setOpenItems] = useState<Set<number>>(() => new Set());

  function toggleItem(index: number) {
    setOpenItems((current) => {
      const next = new Set(current);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }

  return (
    <section className="faq-section" id="faq-section" aria-labelledby="faq-title">
      <div className="faq-container">
        <header className="faq-hero">
          <div className="faq-hero__copy">
            <span className="faq-label">
              <span className="faq-label__mark" aria-hidden="true">?</span>
              FAQ
            </span>
            <h1 id="faq-title">
              Questions people ask
              <br />
              before <span>they begin.</span>
            </h1>
            <p>
              Clear answers remove doubt and reduce drop-offs. Every answer below is grounded in the
              supplied profile or points to the team for specifics.
            </p>
          </div>
        </header>

        <div className="faq-list" aria-label="Frequently asked questions">
          {faqs.map((faq, index) => {
            const isOpen = openItems.has(index);
            const answerId = `faq-answer-${index + 1}`;

            return (
              <article className={`faq-item${isOpen ? " is-open" : ""}`} key={faq.question}>
                <img className="faq-item__icon" src={faq.icon} alt="" loading="lazy" />
                <div className="faq-item__content">
                  <button
                    className="faq-item__trigger"
                    id={`faq-question-${index + 1}`}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => toggleItem(index)}
                  >
                    <span>{faq.question}</span>
                    <svg className="faq-item__chevron" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                  <div
                    className="faq-item__answer"
                    id={answerId}
                    role="region"
                    aria-labelledby={`faq-question-${index + 1}`}
                    aria-hidden={!isOpen}
                  >
                    <div className="faq-item__answer-inner">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
