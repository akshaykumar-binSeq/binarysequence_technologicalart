'use client';

import React from 'react';
import Link from 'next/link';
import { MailIcon, PhoneIcon, WhatsAppIcon } from '@/core/icons';
import { CONTACT_CONTENT } from '../../content';
import styles from './contact-pathways.module.css';

interface ContactPathwaysProps {
  onSelectTopic?: (topic: string) => void;
}

export function ContactPathways({ onSelectTopic }: ContactPathwaysProps): React.JSX.Element {
  const { pathways } = CONTACT_CONTENT;

  const handlePathwayAction = (id: string, e: React.MouseEvent<HTMLAnchorElement>): void => {
    if (id === 'pathway-existing') {
      e.preventDefault();
      if (onSelectTopic) {
        onSelectTopic('architecture-review');
      }
      const el = document.getElementById('inquiry-form');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        const overviewField = document.getElementById('contact-overview');
        if (overviewField) {
          overviewField.focus();
        }
      }
    }
  };

  return (
    <section id="contact-pathways" className={styles.section} aria-labelledby="pathways-heading">
      <div className={styles.header}>
        <span className={styles.eyebrow}>{pathways.eyebrow}</span>
        <h2 id="pathways-heading" className={styles.headline}>
          {pathways.headline}
        </h2>
      </div>

      <div className={styles.grid}>
        {pathways.items.map((item) => {
          const isExternal = Boolean(item.isExternal);
          const isInternalLink = item.actionHref && item.actionHref.startsWith('/');

          return (
            <article key={item.id} id={item.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.code}>{item.code}</span>
              </div>

              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>

              <div className={styles.actionContainer}>
                {item.channels && item.channels.length > 0 ? (
                  <div className={styles.channelList}>
                    {item.channels.map((ch) => {
                      const Icon =
                        ch.type === 'email'
                          ? MailIcon
                          : ch.type === 'phone'
                          ? PhoneIcon
                          : WhatsAppIcon;

                      return (
                        <a
                          key={ch.type}
                          href={ch.href}
                          className={styles.channelLink}
                          aria-label={ch.ariaLabel}
                          {...(ch.type === 'whatsapp' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        >
                          <span className={styles.channelPrefixGroup}>
                            <Icon className={styles.channelIcon} />
                            <span className={styles.channelPrefix}>{ch.label}</span>
                          </span>
                          <span className={styles.channelValue}>{ch.value}</span>
                          <span className={styles.channelArrow} aria-hidden="true">
                            ↗
                          </span>
                        </a>
                      );
                    })}
                  </div>
                ) : isInternalLink ? (
                  <Link href={item.actionHref!} className={styles.actionLink}>
                    {item.actionLabel}
                  </Link>
                ) : isExternal ? (
                  <a
                    href={item.actionHref}
                    className={styles.actionLink}
                    rel="noopener noreferrer"
                  >
                    {item.actionLabel}
                  </a>
                ) : (
                  <a
                    href={item.actionHref || '#inquiry-form'}
                    className={styles.actionLink}
                    onClick={(e) => handlePathwayAction(item.id, e)}
                  >
                    {item.actionLabel}
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
