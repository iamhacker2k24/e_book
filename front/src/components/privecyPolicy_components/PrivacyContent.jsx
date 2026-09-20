import React, { useEffect, useRef, useState } from "react";

import {
  FiFileText,
  FiDatabase,
  FiSettings,
  FiActivity,
  FiShare2,
  FiShield,
  FiUser,
  FiUsers,
  FiRefreshCw,
  FiMail,
  FiLock,
  FiChevronRight,
} from "react-icons/fi";

const PrivacyContent = () => {
  const [activeSection, setActiveSection] = useState("introduction");

  const contentRef = useRef(null);

  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      icon: FiFileText,
    },
    {
      id: "information",
      title: "Information We Collect",
      icon: FiDatabase,
    },
    {
      id: "usage",
      title: "How We Use Your Information",
      icon: FiSettings,
    },
    {
      id: "cookies",
      title: "Cookies & Tracking",
      icon: FiActivity,
    },
    {
      id: "sharing",
      title: "Data Sharing",
      icon: FiShare2,
    },
    {
      id: "security",
      title: "Data Security",
      icon: FiShield,
    },
    {
      id: "rights",
      title: "Your Rights",
      icon: FiUser,
    },
    {
      id: "children",
      title: "Children's Privacy",
      icon: FiUsers,
    },
    {
      id: "changes",
      title: "Changes to This Policy",
      icon: FiRefreshCw,
    },
    {
      id: "contact",
      title: "Contact Us",
      icon: FiMail,
    },
  ];

  /*
  ============================================================
  DETECT ACTIVE SECTION
  ============================================================
  */

  useEffect(() => {
    const container = contentRef.current;

    if (!container) return;

    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top -
              b.boundingClientRect.top
          );

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        root: container,
        rootMargin: "-10% 0px -70% 0px",
        threshold: 0,
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  /*
  ============================================================
  SIDEBAR CLICK
  ============================================================
  */

  const scrollToSection = (id) => {
    const container = contentRef.current;
    const element = document.getElementById(id);

    if (!container || !element) return;

    const containerRect = container.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();

    const scrollTop =
      container.scrollTop +
      (elementRect.top - containerRect.top) -
      20;

    container.scrollTo({
      top: scrollTop,
      behavior: "smooth",
    });

    setActiveSection(id);
  };

  return (
    <section className="w-full bg-white py-10">
      <div className="mx-auto max-w-[1250px] px-5">

        {/* =====================================================
            MAIN LAYOUT
        ===================================================== */}

        <div className="grid items-start gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">

          {/* ===================================================
              LEFT SIDEBAR
          =================================================== */}

          <aside className="lg:sticky lg:top-24 lg:self-start">

            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">

              <h2 className="mb-4 px-3 text-sm font-bold text-slate-900">
                Privacy Policy
              </h2>

              <nav className="space-y-1">

                {sections.map((section) => {
                  const Icon = section.icon;

                  const isActive =
                    activeSection === section.id;

                  return (
                    <button
                      key={section.id}
                      type="button"
                      onClick={() =>
                        scrollToSection(section.id)
                      }
                      className={`
                        group
                        flex
                        w-full
                        items-center
                        gap-3
                        rounded-xl
                        px-3
                        py-2.5
                        text-left
                        text-sm
                        transition-all
                        duration-200

                        ${
                          isActive
                            ? "bg-blue-50 font-semibold text-blue-600"
                            : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                        }
                      `}
                    >

                      <Icon
                        className={`
                          shrink-0
                          text-base

                          ${
                            isActive
                              ? "text-blue-600"
                              : "text-slate-400 group-hover:text-blue-500"
                          }
                        `}
                      />

                      <span className="flex-1">
                        {section.title}
                      </span>

                      {isActive && (
                        <FiChevronRight className="text-sm" />
                      )}

                    </button>
                  );
                })}

              </nav>

              {/* =================================================
                  CONTACT BOX
              ================================================= */}

              <div className="mt-5 rounded-xl bg-blue-50 p-4">

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100">
                  <FiLock className="text-blue-600" />
                </div>

                <p className="mt-3 text-xs leading-5 text-slate-600">
                  Your privacy is important to us. If you have
                  any questions, feel free to contact us.
                </p>

                <button
                  type="button"
                  onClick={() =>
                    scrollToSection("contact")
                  }
                  className="
                    mt-3
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-lg
                    bg-blue-600
                    px-4
                    py-2.5
                    text-xs
                    font-bold
                    text-white
                    transition
                    hover:bg-blue-700
                    active:scale-95
                  "
                >
                  Contact Us
                  <FiChevronRight />
                </button>

              </div>

            </div>

          </aside>


          {/* ===================================================
              RIGHT CONTENT
          =================================================== */}

          <main className="min-w-0">

            <div
              ref={contentRef}
              id="privacy-content"

              className="
                max-h-none
                overflow-visible

                rounded-2xl
                border
                border-slate-200
                bg-white
                px-6
                py-7
                shadow-sm

                md:px-8

                lg:max-h-[calc(100vh-120px)]
                lg:overflow-y-auto
                lg:overflow-x-hidden

                overscroll-y-auto

                scrollbar-thin
                scrollbar-track-transparent
                scrollbar-thumb-slate-300
                hover:scrollbar-thumb-slate-400
              "
            >

              {/* =================================================
                  1. INTRODUCTION
              ================================================= */}

              <PolicySection
                id="introduction"
                number="1"
                title="Introduction"
              >

                <p>
                  Welcome to BookNest. This Privacy Policy explains
                  how we collect, use, disclose, and protect your
                  information when you use our website, mobile app,
                  and services.
                </p>

                <p className="mt-3">
                  By using BookNest, you agree to the practices
                  described in this policy.
                </p>

              </PolicySection>


              {/* =================================================
                  2. INFORMATION WE COLLECT
              ================================================= */}

              <PolicySection
                id="information"
                number="2"
                title="Information We Collect"
              >

                <p>
                  We may collect the following types of information:
                </p>

                <ul className="mt-3 space-y-2 pl-5">

                  <li className="list-disc">
                    <strong>Personal Information:</strong>{" "}
                    Name, email address, phone number and billing
                    details.
                  </li>

                  <li className="list-disc">
                    <strong>Account Information:</strong>{" "}
                    Login credentials, profile details and
                    preferences.
                  </li>

                  <li className="list-disc">
                    <strong>Usage Information:</strong>{" "}
                    Pages visited, searches, device information
                    and analytics data.
                  </li>

                  <li className="list-disc">
                    <strong>Payment Information:</strong>{" "}
                    Payment information is processed securely
                    through trusted third-party payment providers.
                  </li>

                </ul>

              </PolicySection>


              {/* =================================================
                  3. HOW WE USE
              ================================================= */}

              <PolicySection
                id="usage"
                number="3"
                title="How We Use Your Information"
              >

                <p>
                  We use your information to:
                </p>

                <ul className="mt-3 space-y-2 pl-5">

                  <li className="list-disc">
                    Provide and improve our services.
                  </li>

                  <li className="list-disc">
                    Process orders and payments.
                  </li>

                  <li className="list-disc">
                    Personalize your reading experience.
                  </li>

                  <li className="list-disc">
                    Send important updates and notifications.
                  </li>

                  <li className="list-disc">
                    Maintain platform security and reliability.
                  </li>

                </ul>

              </PolicySection>


              {/* =================================================
                  4. COOKIES
              ================================================= */}

              <PolicySection
                id="cookies"
                number="4"
                title="Cookies & Tracking Technologies"
              >

                <p>
                  We use cookies and similar tracking technologies
                  to improve your experience, analyze site traffic,
                  remember preferences and understand how our
                  platform is used.
                </p>

                <p className="mt-3">
                  You can manage or disable cookies through your
                  browser settings. Some features may not work
                  correctly if cookies are disabled.
                </p>

              </PolicySection>


              {/* =================================================
                  5. DATA SHARING
              ================================================= */}

              <PolicySection
                id="sharing"
                number="5"
                title="Data Sharing"
              >

                <p>
                  We do not sell your personal information.
                </p>

                <p className="mt-3">
                  We may share limited information with trusted
                  service providers when necessary to operate
                  BookNest, such as payment processors, hosting
                  providers and analytics services.
                </p>

              </PolicySection>


              {/* =================================================
                  6. SECURITY
              ================================================= */}

              <PolicySection
                id="security"
                number="6"
                title="Data Security"
              >

                <p>
                  We implement appropriate technical and
                  organizational measures to protect your
                  information from unauthorized access, loss,
                  misuse or disclosure.
                </p>

                <p className="mt-3">
                  However, no method of transmission over the
                  internet or electronic storage is completely
                  secure.
                </p>

              </PolicySection>


              {/* =================================================
                  7. YOUR RIGHTS
              ================================================= */}

              <PolicySection
                id="rights"
                number="7"
                title="Your Rights"
              >

                <p>
                  Depending on applicable law, you may have rights
                  regarding your personal information.
                </p>

                <ul className="mt-3 space-y-2 pl-5">

                  <li className="list-disc">
                    Access or update your personal information.
                  </li>

                  <li className="list-disc">
                    Request correction of inaccurate information.
                  </li>

                  <li className="list-disc">
                    Request deletion of your information.
                  </li>

                  <li className="list-disc">
                    Manage communication preferences.
                  </li>

                  <li className="list-disc">
                    Object to certain data processing activities.
                  </li>

                </ul>

              </PolicySection>


              {/* =================================================
                  8. CHILDREN
              ================================================= */}

              <PolicySection
                id="children"
                number="8"
                title="Children's Privacy"
              >

                <p>
                  BookNest is not intended for children under the
                  applicable minimum age in their jurisdiction.
                  We do not knowingly collect personal information
                  from children.
                </p>

              </PolicySection>


              {/* =================================================
                  9. CHANGES
              ================================================= */}

              <PolicySection
                id="changes"
                number="9"
                title="Changes to This Policy"
              >

                <p>
                  We may update this Privacy Policy from time to
                  time. When we make changes, we will update the
                  effective date shown at the top of this page.
                </p>

                <p className="mt-3">
                  We encourage you to review this page periodically
                  for the latest information.
                </p>

              </PolicySection>


              {/* =================================================
                  10. CONTACT
              ================================================= */}

              <PolicySection
                id="contact"
                number="10"
                title="Contact Us"
              >

                <p>
                  If you have questions or concerns about this
                  Privacy Policy, please contact us.
                </p>

                <div className="mt-4 rounded-xl bg-blue-50 p-4">

                  <p className="text-sm font-semibold text-slate-900">
                    BookNest Support
                  </p>

                  <a
                    href="mailto:support@booknest.com"
                    className="
                      mt-1
                      inline-block
                      text-sm
                      text-blue-600
                      hover:underline
                    "
                  >
                    support@booknest.com
                  </a>

                </div>

              </PolicySection>

            </div>

          </main>

        </div>
      </div>
    </section>
  );
};


/*
============================================================
REUSABLE POLICY SECTION
============================================================
*/

const PolicySection = ({
  id,
  number,
  title,
  children,
}) => {
  return (
    <section
      id={id}
      className="
        scroll-mt-5
        border-b
        border-slate-100
        py-8
        first:pt-0
        last:border-b-0
      "
    >

      <div className="flex gap-4">

        {/* Number */}
        <div
          className="
            flex
            h-8
            w-8
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-blue-50
            text-sm
            font-bold
            text-blue-600
          "
        >
          {number}
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">

          <h2
            className="
              text-xl
              font-bold
              tracking-tight
              text-slate-900
              md:text-2xl
            "
          >
            {title}
          </h2>

          <div
            className="
              mt-3
              text-sm
              leading-6
              text-slate-600
              md:text-base
            "
          >
            {children}
          </div>

        </div>

      </div>

    </section>
  );
};

export default PrivacyContent;