"use client";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="bg-card shadow-xl rounded-lg p-6 sm:p-8 md:p-10 lg:p-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-card-foreground mb-6 text-center">
              PollyBot.ai Terms of Service
            </h1>

            <p className="text-sm sm:text-base text-muted-foreground mb-8 text-center">
              <strong>Effective Date:</strong> January 1st, 2025
            </p>

            <div className="prose prose-gray max-w-none dark:prose-invert">
              <p className="text-card-foreground mb-6">
                Please read these Terms of Service (&quot;Terms&quot;) carefully before
                accessing or using PollyBot.ai (&quot;Service&quot;).
              </p>

              <h2 className="text-xl sm:text-2xl font-semibold text-card-foreground mb-4 pt-4 border-t border-border">
                1. Acceptance of Terms
              </h2>
              <p className="text-card-foreground mb-6">
                By accessing or using the PollyBot.ai Service, you signify your
                full agreement to these Terms. If you are accessing or using the
                Service on behalf of an organization, you represent and warrant
                that you have the necessary authority to bind that organization
                to these Terms.
              </p>

              <h2 className="text-xl sm:text-2xl font-semibold text-card-foreground mb-4 pt-4 border-t border-border">
                2. Description of Service
              </h2>
              <p className="text-card-foreground mb-6">
                PollyBot.ai is as an intelligent AI integration and
                orchestration platform. Our Service facilitates connections
                between end-users (your customers) and various generative AI /
                large-language models (LLMs), including but not limited to
                OpenAI&quot;s APIs. We enable AI-powered interactions across a
                variety of digital communication channels, serving as a bridge
                between your users and advanced AI capabilities.
              </p>

              <h2 className="text-xl sm:text-2xl font-semibold text-card-foreground mb-4 pt-4 border-t border-border">
                3. User Accounts and Obligations
              </h2>
              <ul className="list-disc list-inside text-card-foreground mb-6 space-y-2">
                <li>
                  <strong>Registration & Access:</strong> To utilize certain
                  features of the Service, you may be required to create an
                  account. You agree to provide accurate, current, and complete
                  information during the registration process and to keep your
                  account information updated. You are solely responsible for
                  maintaining the confidentiality of your account credentials
                  and for all activities that occur under your account, whether
                  or not you authorized them. You must notify PollyBot.ai
                  immediately of any unauthorized use of your account.
                </li>
                <li>
                  <strong>Age & Authority:</strong> You affirm that you are at
                  least 13 years of age (or the legal age of majority in your
                  jurisdiction) and possess the legal capacity to enter into
                  this agreement and comply with these Terms.
                </li>
                <li>
                  <strong>Lawful Use:</strong> You commit to using the Service
                  strictly in compliance with all applicable local, state,
                  national, and international laws, regulations, and generally
                  accepted industry standards.
                </li>
              </ul>

              <h2 className="text-xl sm:text-2xl font-semibold text-card-foreground mb-4 pt-4 border-t border-border">
                4. Prohibited Conduct
              </h2>
              <p className="text-card-foreground mb-4">
                You explicitly agree not to engage in any of the following
                prohibited activities:
              </p>
              <ul className="list-disc list-inside text-card-foreground mb-6 space-y-2">
                <li>
                  Use the Service to generate, transmit, or promote spam,
                  fraudulent content, illegal material, or any deceptive
                  communications.
                </li>
                <li>
                  Misrepresent AI-generated content as having been produced by a
                  human.
                </li>
                <li>
                  Interfere with or disrupt the integrity or performance of the
                  Service or its related systems (e.g., by decompiling code,
                  exploiting rate limits, launching denial-of-service attacks,
                  or engaging in any form of hacking).
                </li>
                <li>
                  Provide harmful or illegal Input (e.g., content that is
                  violent, infringing on intellectual property, or prohibited by
                  the terms of service of OpenAI or any other LLM providers
                  connected via PollyBot.ai).
                </li>
                <li>
                  Use the Service to develop, train, or contribute to the
                  development of any competing AI platform, product, or service.
                </li>
                <li>
                  Attempt to extract, scrape, or redistribute LLM API usage data
                  or any proprietary information from the Service.
                </li>
                <li>
                  Impersonate PollyBot.ai, its employees, or other users, or
                  engage in domain spoofing, branding misuse, or any activity
                  that falsely suggests an affiliation with PollyBot.ai.
                </li>
                <li>
                  Violate any third-party rights, including but not limited to
                  intellectual property rights (copyright, trademark, patent) or
                  privacy rights.
                </li>
              </ul>
              <p className="text-destructive font-bold mb-6">
                Violation of these Terms may result in the immediate suspension
                or termination of your account, forfeiture of your access to the
                Service, and any unutilized service credits or refunds, at our
                sole discretion.
              </p>

              <h2 className="text-xl sm:text-2xl font-semibold text-card-foreground mb-4 pt-4 border-t border-border">
                5. LLM Model, Data Accuracy & Outages
              </h2>
              <p className="text-card-foreground mb-2">
                <strong>No SLA, No Accuracy Guarantee.</strong>
              </p>
              <p className="text-card-foreground mb-4">
                PollyBot.ai acts as a conduit to Large Language Models. Due to
                inherent legal, technical, and operational limitations of both
                PollyBot.ai and the third-party LLMs it connects to,
                PollyBot.ai:
              </p>
              <ul className="list-disc list-inside text-card-foreground mb-6 space-y-2">
                <li>
                  <strong>
                    Does not guarantee uptime, availability, accuracy,
                    correctness, or completeness of any AI-generated output.
                  </strong>
                </li>
                <li>
                  <strong>
                    Cannot ensure the continuous availability or performance of
                    the Service during outages, downtime, or service disruptions
                    of the third-party LLMs (e.g., OpenAI APIs) to which it
                    connects.
                  </strong>
                </li>
                <li>
                  Provides its Service on an &quot;as-is&quot; and &quot;as-available&quot; basis.
                  You should not solely rely on the output generated via the
                  Service for any professional-level decisions, advice, critical
                  operational tasks, or any context where accuracy or
                  reliability is paramount.
                </li>
              </ul>
              <p className="text-card-foreground mb-2">
                <strong>Your Responsibility.</strong>
              </p>
              <p className="text-card-foreground mb-6">
                You acknowledge and accept that outputs generated by AI models
                can frequently be incorrect, incomplete, biased, or misleading.
                It is your sole responsibility to critically evaluate and verify
                all content generated through the Service prior to its use or
                dissemination.
              </p>

              <h2 className="text-xl sm:text-2xl font-semibold text-card-foreground mb-4 pt-4 border-t border-border">
                6. Content Ownership & Use
              </h2>
              <ul className="list-disc list-inside text-card-foreground mb-6 space-y-2">
                <li>
                  <strong>Your Input / AI Output:</strong> You retain all
                  ownership rights to any data, information, or content you
                  provide as input to the Service (&quot;Input&quot;) and to the
                  AI-generated output that is directly a result of your specific
                  use of the Service (&quot;Output&quot;), consistent with the policies of
                  the underlying LLM providers (e.g., OpenAI).
                </li>
                <li>
                  <strong>Our Access & Use Rights:</strong> You grant
                  PollyBot.ai, and where necessary, the underlying LLM
                  providers, a non-exclusive, worldwide, royalty-free license to
                  store, process, analyze, and, solely as required, share your
                  Input and Output to provide and improve the Service, to
                  develop and enhance our technologies, and to comply with legal
                  obligations.
                </li>
                <li>
                  <strong>Usage Limits & Risks:</strong> You bear full
                  responsibility for your use of the generated content,
                  including ensuring compliance with all applicable laws,
                  intellectual property rights, and data protection standards.
                </li>
              </ul>

              <h2 className="text-xl sm:text-2xl font-semibold text-card-foreground mb-4 pt-4 border-t border-border">
                7. Fees & Billing
              </h2>
              <p className="text-card-foreground mb-6">
                If applicable, usage-based or subscription fees for the Service
                will be detailed in your specific agreement or within your
                account dashboard. All charges are considered final. Any refunds
                are provided at our sole discretion, except where explicitly
                required by law.
              </p>

              <h2 className="text-xl sm:text-2xl font-semibold text-card-foreground mb-4 pt-4 border-t border-border">
                8. Termination
              </h2>
              <ul className="list-disc list-inside text-card-foreground mb-6 space-y-2">
                <li>
                  <strong>By You:</strong> You may cease using the Service and
                  terminate your account at any time by following the
                  instructions provided within the Service or by contacting
                  support.
                </li>
                <li>
                  <strong>By Us:</strong> We reserve the right to suspend or
                  terminate your account and access to the Service immediately,
                  at our sole discretion, without prior notice or refund, for
                  any violation of these Terms or for any other reason we deem
                  appropriate.
                </li>
                <li>
                  <strong>Post-termination:</strong> Upon termination, your
                  access to the Service will cease immediately. PollyBot.ai may
                  delete your account data and content, unless retention is
                  required by law or specified otherwise in a separate
                  agreement. Any outstanding fees owed up to the date of
                  termination remain immediately payable.
                </li>
              </ul>

              <h2 className="text-xl sm:text-2xl font-semibold text-card-foreground mb-4 pt-4 border-t border-border">
                9. Indemnification
              </h2>
              <p className="text-card-foreground mb-6">
                You agree to indemnify, defend, and hold harmless PollyBot.ai,
                its affiliates, officers, directors, employees, and agents from
                and against any and all claims, liabilities, damages, losses,
                and expenses, including reasonable attorneys&quot; fees and costs,
                arising out of or in any way connected with:
              </p>
              <ul className="list-disc list-inside text-card-foreground mb-6 space-y-2">
                <li>
                  Your access to or use of the Service or any AI-generated
                  content obtained through the Service.
                </li>
                <li>
                  Your breach of these Terms or any applicable laws or
                  regulations.
                </li>
                <li>
                  Your infringement of any third-party rights, including
                  intellectual property or privacy rights.
                </li>
              </ul>

              <h2 className="text-xl sm:text-2xl font-semibold text-card-foreground mb-4 pt-4 border-t border-border">
                10. Disclaimers & Limitation of Liability
              </h2>
              <ul className="list-disc list-inside text-card-foreground mb-6 space-y-2">
                <li>
                  <strong>NO WARRANTIES:</strong> The Service is provided
                  &quot;as-is&quot; and &quot;as-available,&quot; without any warranties of any
                  kind, either express or implied, including but not limited to
                  implied warranties of merchantability, fitness for a
                  particular purpose, non-infringement, or availability.
                  PollyBot.ai does not warrant that the Service will be
                  uninterrupted, secure, error-free, or free of harmful
                  components.
                </li>
                <li>
                  <strong>LIMITED LIABILITY:</strong> To the maximum extent
                  permitted by applicable law, PollyBot.ai will not be liable
                  for any indirect, incidental, special, consequential,
                  punitive, or exemplary damages, including but not limited to
                  damages for loss of profits, goodwill, use, data, or other
                  intangible losses, arising out of or in connection with these
                  Terms or your use of or inability to use the Service. In no
                  event will PollyBot.ai&quot;s total liability to you for all
                  damages, losses, and causes of action exceed the greater of
                  one hundred U.S. dollars ($100) or the aggregate fees paid by
                  you for the Service in the twelve (12) months immediately
                  preceding the claim giving rise to such liability.
                </li>
              </ul>

              <h2 className="text-xl sm:text-2xl font-semibold text-card-foreground mb-4 pt-4 border-t border-border">
                11. Changes to Terms
              </h2>
              <p className="text-card-foreground mb-6">
                PollyBot.ai reserves the right to modify these Terms at any
                time. We will provide notice of material changes by posting an
                updated version on our website or by sending an email to the
                address associated with your account at least 30 days before
                such changes take effect. Your continued access to or use of the
                Service after the effective date of the revised Terms signifies
                your acceptance of the revised Terms.
              </p>

              <h2 className="text-xl sm:text-2xl font-semibold text-card-foreground mb-4 pt-4 border-t border-border">
                12. Governing Law & Dispute Resolution
              </h2>
              <p className="text-card-foreground mb-6">
                These Terms will be governed by and construed in accordance with
                the laws of the State of Delaware, USA, without regard to its
                conflict-of-law principles. For any legal dispute or claim
                arising from these Terms or your use of the Service, you agree
                to submit to the exclusive jurisdiction of the state or federal
                courts located in Delaware, USA.
              </p>

              <h2 className="text-xl sm:text-2xl font-semibold text-card-foreground mb-4 pt-4 border-t border-border">
                13. Contact
              </h2>
              <p className="text-card-foreground mb-6">
                For any questions or notices regarding these Terms, please
                contact us at:
              </p>
              <p className="text-card-foreground mb-6">
                <strong>Email:</strong> support@pollybot.ai
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
