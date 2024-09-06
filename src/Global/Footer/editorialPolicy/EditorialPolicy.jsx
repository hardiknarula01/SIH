import React from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../Footer";
import img from "../../../Assets/profile-1.png";
import { Link } from "react-router-dom";
import TopBar from "../../Navbar/TopBar";

const EditorialPolicy = () => {
  return (
    <>
      <TopBar />
      <Navbar className="fixed top-0 left-0 w-full z-50 bg-white shadow-md" />
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-100 text-gray-900">
        <div className="flex-1 flex flex-col items-center p-6 lg:p-20 pt-24">
          <div className="w-full lg:w-3/4 bg-white p-10 rounded-lg shadow-lg">
            <h1 className="font-bold text-4xl lg:text-5xl mt-6 text-center text-black">
              <Link to="/" className="text-primary">
                Ultimed<span className="text-secondary">Solution </span>
              </Link>
              Editorial and Content Policy
            </h1>
            <div className="my-8">
              <hr className="border-t-2 border-gray-300 w-full mt-6" />
              <div className="flex flex-col md:flex-row lg:flex-row md:justify-between lg:justify-between items-center text-lg text-gray-700 my-4">
                <div className="flex items-center space-x-4">
                  <img
                    src={img}
                    alt="Author"
                    className="w-12 h-12 rounded-full"
                  />
                  <span className="font-semibold underline">Johen Doe</span>
                </div>
                <span className="font-semibold mt-2 lg:mt-0">
                  Published: Nov 27, 2024
                </span>
              </div>
              <hr className="border-t-2 border-gray-300 w-full" />
            </div>
            <p className="text-xl lg:text-2xl italic text-center mb-8">
              Welcome to{" "}
              <span className="font-semibold">Breaking the Blueprint</span> - a
              blog series that dives into the unique business challenges and
              opportunities of underrepresented business owners and
              entrepreneurs. Learn how they've grown or scaled their businesses,
              explored entrepreneurial ventures within their companies, or
              created side hustles, and how their stories can inspire and inform
              your own success.
            </p>
            <div className="text-lg lg:text-xl space-y-8">
              <section>
                <h2 className="text-3xl font-bold text-black mb-4">
                  About <span className="text-primary">Ultimed</span>
                  <span className="text-secondary">Solutions </span>
                </h2>
                <p>
                  MedWander is a leading platform dedicated to providing
                  comprehensive solutions in the Healthcare Travel Industry. Our
                  mission is to offer seamless access to the best medical
                  services worldwide, supporting our clients every step of the
                  way on their journey to achieving optimal health and wellness.
                </p>
              </section>
              <section>
                <h2 className="text-3xl font-bold text-black mb-4">
                  Who We Are
                </h2>
                <p>
                  At MedWander, we specialize in connecting patients with
                  top-tier medical facilities globally, ensuring that every
                  individual has access to the highest quality care. Our team
                  comprises seasoned professionals with extensive experience in
                  medical travel, healthcare coordination, and patient advocacy.
                </p>
              </section>
              <section>
                <h2 className="text-3xl font-bold text-black mb-4">
                  What We Offer
                </h2>
                <ul className="list-disc pl-6">
                  <li>
                    Expertly Curated Content: Our content is curated and
                    reviewed by medical professionals and travel experts to
                    ensure accuracy, clarity, and relevance. We provide
                    well-researched information on medical treatments,
                    healthcare facilities, and travel logistics.
                  </li>
                  <li>
                    Comprehensive Support: From initial consultation to
                    post-treatment follow-up, we offer end-to-end support for
                    all aspects of medical travel, including visa assistance,
                    travel arrangements, accommodation, and local support.
                  </li>
                  <li>
                    Personalized Solutions: We tailor our services to meet the
                    unique needs of each patient, ensuring personalized care and
                    attention throughout their medical journey.
                  </li>
                </ul>
              </section>
              <section>
                <h2 className="text-3xl font-bold text-black mb-4">
                  Our Commitment
                </h2>
                <p>
                  We are committed to providing clear, objective, and
                  well-researched information to empower our clients to make
                  informed decisions about their healthcare options. Our goal is
                  to make complex medical travel processes simple and
                  accessible.
                </p>
              </section>
              <section>
                <h2 className="text-3xl font-bold text-black mb-4">
                  Get in Touch
                </h2>
                <p>
                  Feel free to reach out with any suggestions, ideas, or
                  questions at{" "}
                  <a
                    href="mailto:your-email@example.com"
                    className="text-blue-600 underline"
                  >
                    your-email@example.com
                  </a>
                  . We value your input and are always here to help. Connect
                  with us on:
                  <ul className="list-disc pl-6 mt-2">
                    <li>
                      <a href="#" className="text-blue-600 underline">
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-blue-600 underline">
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-blue-600 underline">
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-blue-600 underline">
                        WhatsApp
                      </a>
                    </li>
                  </ul>
                </p>
              </section>
              <section>
                <h2 className="text-3xl font-bold text-black mb-4">
                  Writers and Editors
                </h2>
                <p>
                  Our content is crafted by professional writers with at least
                  two years of experience in medical writing. Each piece is
                  reviewed by experts with relevant clinical and research
                  expertise to maintain accuracy, clarity, and engagement.
                </p>
                <p>
                  Our editorial team is committed to continuous learning and
                  improvement in healthcare.
                </p>
              </section>
              <section>
                <h2 className="text-3xl font-bold text-black mb-4">
                  Editorial Process
                </h2>
                <ul className="list-disc pl-6">
                  <li>
                    Research & Writing: The author analyzes sources and drafts
                    content according to Ultimed  editorial policy. We use
                    reputable sources such as industry publications, websites of
                    specialized organizations, and credible media.
                  </li>
                  <li>
                    Medical/Expert Review: A specialist verifies the content to
                    ensure the information is accurate and relevant.
                  </li>
                  <li>
                    Editorial Review: An editor reviews the text for readability
                    and consistency with our style guide.
                  </li>
                  <li>
                    Publication and Design Review: The author publishes the
                    material on the website, editor checks the material’s design
                    and layout.
                  </li>
                </ul>
                <p>
                  This process ensures high-quality content. If you notice an
                  error, please inform us at{" "}
                  <a
                    href="mailto:ultimed.solution@gmail.com"
                    className="text-blue-600 underline"
                  >
                    ultimed.solution@gmail.com
                  </a>
                  .
                </p>
              </section>
              <section>
                <h2 className="text-3xl font-bold text-black mb-4">
                  Core Values of Our Content
                </h2>
                <ul className="list-disc pl-6">
                  <li>
                    Insightful content: Our content answers users' questions
                    with non-obvious insights and practical facts.
                  </li>
                  <li>
                    Clarity and Simplicity: We explain terms and processes
                    clearly for all audiences.
                  </li>
                  <li>
                    Data Driven Objectivity: We base our materials on objective
                    data and statistics, presenting unbiased analyses.
                  </li>
                  <li>
                    Expertise: We strive for accuracy, using primary sources
                    such as Medscape, Pubmed, WebMD, Health.gov.
                  </li>
                  <li>
                    Empathetic Communication: We communicate with empathy,
                    avoiding imposing opinions.
                  </li>
                </ul>
              </section>
              <section>
                <h2 className="text-3xl font-bold text-black mb-4">
                  Tone of Voice
                </h2>
                <p>
                  Our tone is informative yet friendly, combining the precision
                  of informational style with approachability. We avoid
                  familiarity, diminutives, moralizing, aggression, and
                  bullying.
                </p>
              </section>
              <section>
                <h2 className="text-3xl font-bold text-black mb-4">Sources</h2>
                <p>
                  We use credible sources such as Medscape, Pubmed, WebMD,
                  Health.gov, and peer-reviewed journals.
                </p>
                <p>
                  <span className="font-semibold">Ultimed Solution</span> uses only
                  reliable, up-to-date, and evidence-based information. Our team
                  of medical experts and content creators ensures accuracy and
                  quality.
                </p>
              </section>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default EditorialPolicy;
