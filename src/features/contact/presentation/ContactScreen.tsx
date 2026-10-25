'use client';

import React, { useState } from 'react';
import { MailIcon, PhoneIcon, WhatsAppIcon } from '@/core/icons';
import { CONTACT_CONTENT } from '../content';
import { ContactPathways } from './components/ContactPathways';
import { GeneralInquiryForm } from './components/GeneralInquiryForm';
import styles from './contact.module.css';

export function ContactScreen(): React.JSX.Element {
  const { header } = CONTACT_CONTENT;
  const [selectedTopic, setSelectedTopic] = useState<string>('new-product');

  return (
    <div className={styles.page}>
      {/* 1. Header & Location Anchor */}
      <section className={styles.hero} aria-labelledby="contact-hero-heading">
        <div className={styles.heroInner}>
          <div className={styles.metaRow}>
            <span className={styles.eyebrow}>{header.eyebrow}</span>
            <span className={styles.binaryTicker} aria-hidden="true">
              {header.binaryTelemetry}
            </span>
          </div>

          <h1 id="contact-hero-heading" className={styles.headline}>
            {header.headline}
          </h1>

          <p className={styles.lead}>{header.lead}</p>

          <div className={styles.heroActionsRow}>
            <div className={styles.locationBadge}>
              <span className={styles.locationPin} aria-hidden="true">
                ◎
              </span>
              <span>{header.locationAnchor}</span>
            </div>

            <div className={styles.directPillsStrip}>
              <a
                href={header.emailHref}
                className={styles.heroDirectPill}
                aria-label={`Send email to ${header.email}`}
              >
                <MailIcon className={styles.heroPillIcon} />
                <span className={styles.heroPillPrefix}>MAIL //</span>
                <span>{header.email}</span>
                <span aria-hidden="true">↗</span>
              </a>
              <a
                href={header.phoneHref}
                className={styles.heroDirectPill}
                aria-label={`Call ${header.phone}`}
              >
                <PhoneIcon className={styles.heroPillIcon} />
                <span className={styles.heroPillPrefix}>TEL //</span>
                <span>{header.phone}</span>
                <span aria-hidden="true">↗</span>
              </a>
              <a
                href={header.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.heroDirectPill}
                aria-label={`Chat on WhatsApp with ${header.phone}`}
              >
                <WhatsAppIcon className={styles.heroPillIcon} />
                <span className={styles.heroPillPrefix}>WA //</span>
                <span>{header.phone}</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Choose the Relevant Path */}
      <ContactPathways onSelectTopic={(topic) => setSelectedTopic(topic)} />

      {/* 3. General Inquiry Form */}
      <GeneralInquiryForm
        selectedTopic={selectedTopic}
        onTopicChange={(topic) => setSelectedTopic(topic)}
      />
    </div>
  );
}
