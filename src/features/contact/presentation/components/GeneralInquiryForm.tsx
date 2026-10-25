'use client';

import React, { useState, useId } from 'react';
import { CONTACT_CONTENT } from '../../content';
import {
  submitContactInquiry,
  formatContactMailto,
  type ContactInquiryPayload,
} from '../../infrastructure/intake-engine';
import styles from './general-inquiry-form.module.css';

interface FormErrors {
  fullName?: string;
  email?: string;
  topic?: string;
  overview?: string;
}

interface GeneralInquiryFormProps {
  selectedTopic: string;
  onTopicChange: (topic: string) => void;
}

export function GeneralInquiryForm({
  selectedTopic,
  onTopicChange,
}: GeneralInquiryFormProps): React.JSX.Element {
  const { form } = CONTACT_CONTENT;
  const formId = useId();

  const [formData, setFormData] = useState<ContactInquiryPayload>({
    fullName: '',
    email: '',
    topic: selectedTopic || 'new-product',
    overview: '',
    timeline: '',
    budget: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [mailtoFallback, setMailtoFallback] = useState<string | null>(null);

  // Sync external topic selection changes
  React.useEffect(() => {
    if (selectedTopic && selectedTopic !== formData.topic) {
      setFormData((prev) => ({ ...prev, topic: selectedTopic }));
    }
  }, [selectedTopic]);

  const handleChange = (field: keyof ContactInquiryPayload, value: string): void => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (field === 'topic') {
      onTopicChange(value);
    }
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      nextErrors.fullName = form.fields.fullName.requiredError;
    }

    if (!formData.email.trim()) {
      nextErrors.email = form.fields.email.requiredError;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = form.fields.email.invalidError;
    }

    if (!formData.overview.trim()) {
      nextErrors.overview = form.fields.overview.requiredError;
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    const result = await submitContactInquiry(formData);
    setIsSubmitting(false);

    if (result.ok) {
      setIsSuccess(true);
      if (result.fallbackMailtoUrl) {
        setMailtoFallback(result.fallbackMailtoUrl);
      }
    } else {
      setSubmitError(result.message || form.errorMessage.detail);
      setMailtoFallback(result.fallbackMailtoUrl || formatContactMailto(formData));
    }
  };

  const handleReset = (): void => {
    setFormData({
      fullName: '',
      email: '',
      topic: 'new-product',
      overview: '',
      timeline: '',
      budget: '',
    });
    setIsSuccess(false);
    setSubmitError(null);
    setMailtoFallback(null);
    setErrors({});
  };

  return (
    <section id="inquiry-form" className={styles.section} aria-labelledby="inquiry-form-heading">
      <div className={styles.header}>
        <span className={styles.eyebrow}>{form.eyebrow}</span>
        <h2 id="inquiry-form-heading" className={styles.headline}>
          {form.headline}
        </h2>
        <p className={styles.lead}>{form.lead}</p>
      </div>

      <div className={styles.container}>
        {isSuccess ? (
          <div className={styles.successCard} role="status" aria-live="polite">
            <div className={styles.successIcon} aria-hidden="true">
              ✓
            </div>
            <h3 className={styles.successTitle}>{form.successMessage.headline}</h3>
            <p className={styles.successDetail}>{form.successMessage.detail}</p>
            {mailtoFallback && (
              <p className={styles.mailtoNotice}>
                Operating in static export mode.{' '}
                <a href={mailtoFallback} className={styles.mailtoLink}>
                  Click here to dispatch transmission via your default email client →
                </a>
              </p>
            )}
            <button type="button" onClick={handleReset} className={styles.resetButton}>
              {form.actions.reset}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form} noValidate>
            <div className={styles.grid}>
              {/* Name */}
              <div className={styles.fieldGroup}>
                <label htmlFor={`${formId}-fullName`} className={styles.label}>
                  {form.fields.fullName.label}
                </label>
                <input
                  id={`${formId}-fullName`}
                  type="text"
                  className={`${styles.input} ${errors.fullName ? styles.inputError : ''}`}
                  placeholder={form.fields.fullName.placeholder}
                  value={formData.fullName}
                  onChange={(e) => handleChange('fullName', e.target.value)}
                  aria-invalid={errors.fullName ? 'true' : undefined}
                  aria-describedby={errors.fullName ? `${formId}-fullName-err` : undefined}
                />
                {errors.fullName && (
                  <span id={`${formId}-fullName-err`} className={styles.errorMessage} role="alert">
                    {errors.fullName}
                  </span>
                )}
              </div>

              {/* Email */}
              <div className={styles.fieldGroup}>
                <label htmlFor={`${formId}-email`} className={styles.label}>
                  {form.fields.email.label}
                </label>
                <input
                  id={`${formId}-email`}
                  type="email"
                  className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                  placeholder={form.fields.email.placeholder}
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  aria-invalid={errors.email ? 'true' : undefined}
                  aria-describedby={errors.email ? `${formId}-email-err` : undefined}
                />
                {errors.email && (
                  <span id={`${formId}-email-err`} className={styles.errorMessage} role="alert">
                    {errors.email}
                  </span>
                )}
              </div>

              {/* Topic */}
              <div className={styles.fieldGroupFull}>
                <label htmlFor={`${formId}-topic`} className={styles.label}>
                  {form.fields.topic.label}
                </label>
                <select
                  id={`${formId}-topic`}
                  className={styles.select}
                  value={formData.topic}
                  onChange={(e) => handleChange('topic', e.target.value)}
                >
                  {form.fields.topic.options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Overview */}
              <div className={styles.fieldGroupFull}>
                <label htmlFor={`${formId}-overview`} className={styles.label}>
                  {form.fields.overview.label}
                </label>
                <textarea
                  id={`${formId}-overview`}
                  rows={6}
                  className={`${styles.textarea} ${errors.overview ? styles.inputError : ''}`}
                  placeholder={form.fields.overview.placeholder}
                  value={formData.overview}
                  onChange={(e) => handleChange('overview', e.target.value)}
                  aria-invalid={errors.overview ? 'true' : undefined}
                  aria-describedby={errors.overview ? `${formId}-overview-err` : undefined}
                />
                {errors.overview && (
                  <span id={`${formId}-overview-err`} className={styles.errorMessage} role="alert">
                    {errors.overview}
                  </span>
                )}
              </div>

              {/* Timeline (Optional) */}
              <div className={styles.fieldGroup}>
                <label htmlFor={`${formId}-timeline`} className={styles.label}>
                  {form.fields.timeline.label}
                </label>
                <select
                  id={`${formId}-timeline`}
                  className={styles.select}
                  value={formData.timeline}
                  onChange={(e) => handleChange('timeline', e.target.value)}
                >
                  <option value="">Select timeframe (Optional)</option>
                  {form.fields.timeline.options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Budget (Optional) */}
              <div className={styles.fieldGroup}>
                <label htmlFor={`${formId}-budget`} className={styles.label}>
                  {form.fields.budget.label}
                </label>
                <select
                  id={`${formId}-budget`}
                  className={styles.select}
                  value={formData.budget}
                  onChange={(e) => handleChange('budget', e.target.value)}
                >
                  <option value="">Select budget range (Optional)</option>
                  {form.fields.budget.options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Error Notice */}
            {submitError && (
              <div className={styles.errorNotice} role="alert">
                <p className={styles.errorNoticeText}>{submitError}</p>
                {mailtoFallback && (
                  <a href={mailtoFallback} className={styles.errorMailtoAction}>
                    {form.errorMessage.directMailLabel}
                  </a>
                )}
              </div>
            )}

            {/* Privacy notice */}
            <div className={styles.privacyNotice}>
              <span className={styles.privacyShield} aria-hidden="true">
                🛡
              </span>
              <p className={styles.privacyText}>{form.privacyNotice}</p>
            </div>

            {/* Submit Action */}
            <div className={styles.submitRow}>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ''}`}
              >
                {isSubmitting ? form.actions.submitting : form.actions.submit}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
