'use client';

import React, { useState, useId } from 'react';
import { BLUEPRINT_CONTENT } from '../../content';
import {
  submitBlueprintInquiry,
  formatBlueprintMailto,
  type BlueprintInquiryData,
} from '../../infrastructure/blueprint-intake';
import styles from './blueprint-inquiry-form.module.css';

interface FormErrors {
  fullName?: string;
  email?: string;
  organization?: string;
}

export function BlueprintInquiryForm(): React.JSX.Element {
  const { inquiryForm } = BLUEPRINT_CONTENT;
  const formId = useId();

  const [activeStep, setActiveStep] = useState<number>(0);
  const [formData, setFormData] = useState<BlueprintInquiryData>({
    purpose: '',
    problem: '',
    horizon: '',
    existingSystems: '',
    constraints: '',
    fullName: '',
    email: '',
    organization: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [mailtoFallback, setMailtoFallback] = useState<string | null>(null);

  const totalSteps = inquiryForm.steps.length;
  const currentStepDef = inquiryForm.steps[activeStep];

  const handleInputChange = (field: keyof BlueprintInquiryData, value: string): void => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validateStep4 = (): boolean => {
    const nextErrors: FormErrors = {};
    if (!formData.fullName.trim()) {
      nextErrors.fullName = 'Full name is required to initialize an architectural engagement.';
    }
    if (!formData.email.trim()) {
      nextErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Please provide a valid email format (name@company.com).';
    }
    if (!formData.organization.trim()) {
      nextErrors.organization = 'Organization or project name is required.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleNext = (): void => {
    if (activeStep < totalSteps - 1) {
      setActiveStep((prev) => prev + 1);
      setSubmitError(null);
    }
  };

  const handlePrev = (): void => {
    if (activeStep > 0) {
      setActiveStep((prev) => prev - 1);
      setSubmitError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    if (!validateStep4()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    const result = await submitBlueprintInquiry(formData);
    setIsSubmitting(false);

    if (result.ok) {
      setIsSuccess(true);
      if (result.fallbackMailtoUrl) {
        setMailtoFallback(result.fallbackMailtoUrl);
      }
    } else {
      setSubmitError(result.message || inquiryForm.errorMessage.detail);
      setMailtoFallback(result.fallbackMailtoUrl || formatBlueprintMailto(formData));
    }
  };

  const handleReset = (): void => {
    setFormData({
      purpose: '',
      problem: '',
      horizon: '',
      existingSystems: '',
      constraints: '',
      fullName: '',
      email: '',
      organization: '',
    });
    setActiveStep(0);
    setIsSuccess(false);
    setSubmitError(null);
    setMailtoFallback(null);
    setErrors({});
  };

  return (
    <section id="blueprint-inquiry" className={styles.section} aria-labelledby="inquiry-heading">
      <div className={styles.header}>
        <span className={styles.eyebrow}>{inquiryForm.eyebrow}</span>
        <h2 id="inquiry-heading" className={styles.headline}>
          {inquiryForm.headline}
        </h2>
        <p className={styles.lead}>{inquiryForm.lead}</p>
      </div>

      <div className={styles.container}>
        {/* Wizard Step Progression Bar */}
        <nav className={styles.stepper} aria-label="Blueprint Inquiry Steps">
          <ol className={styles.stepList}>
            {inquiryForm.steps.map((step, idx) => {
              const isCurrent = idx === activeStep;
              const isCompleted = idx < activeStep;

              return (
                <li
                  key={step.stepNumber}
                  className={`${styles.stepItem} ${isCurrent ? styles.stepActive : ''} ${
                    isCompleted ? styles.stepCompleted : ''
                  }`}
                  aria-current={isCurrent ? 'step' : undefined}
                >
                  <button
                    type="button"
                    className={styles.stepButton}
                    onClick={() => {
                      if (idx <= activeStep || isCompleted) {
                        setActiveStep(idx);
                      }
                    }}
                    disabled={idx > activeStep && !isCompleted}
                    aria-label={`Go to Step ${step.stepNumber}: ${step.title}`}
                  >
                    <span className={styles.stepBadge}>{step.stepNumber}</span>
                    <span className={styles.stepTitle}>{step.title}</span>
                  </button>
                </li>
              );
            })}
          </ol>
          <div
            className={styles.progressBar}
            role="progressbar"
            aria-valuenow={activeStep + 1}
            aria-valuemin={1}
            aria-valuemax={totalSteps}
            aria-label="Form completion progress"
          >
            <div
              className={styles.progressFill}
              style={{ width: `${((activeStep + 1) / totalSteps) * 100}%` }}
            />
          </div>
        </nav>

        {/* Success Confirmation View */}
        {isSuccess ? (
          <div className={styles.successCard} role="status" aria-live="polite">
            <div className={styles.successIcon} aria-hidden="true">
              ✓
            </div>
            <h3 className={styles.successTitle}>{inquiryForm.successMessage.headline}</h3>
            <p className={styles.successDetail}>{inquiryForm.successMessage.detail}</p>
            {mailtoFallback && (
              <p className={styles.mailtoNotice}>
                A direct client email protocol has also been prepared.{' '}
                <a href={mailtoFallback} className={styles.mailtoLink}>
                  Send backup copy via default email client →
                </a>
              </p>
            )}
            <button type="button" onClick={handleReset} className={styles.resetButton}>
              {inquiryForm.successMessage.resetLabel}
            </button>
          </div>
        ) : (
          /* Active Step Form View */
          <form onSubmit={handleSubmit} className={styles.formCard} noValidate>
            <div className={styles.stepHeader}>
              <div className={styles.stepPill}>
                STAGE {currentStepDef.stepNumber} OF {totalSteps.toString().padStart(2, '0')}
              </div>
              <h3 className={styles.questionHeading}>{currentStepDef.question}</h3>
              <p className={styles.helperText}>{currentStepDef.helper}</p>
            </div>

            <div className={styles.stepBody}>
              {activeStep === 0 && (
                <div className={styles.inputGroup}>
                  <label htmlFor={`${formId}-purpose`} className="sr-only">
                    System Purpose Description
                  </label>
                  <textarea
                    id={`${formId}-purpose`}
                    rows={6}
                    className={styles.textarea}
                    placeholder={currentStepDef.placeholder}
                    value={formData.purpose}
                    onChange={(e) => handleInputChange('purpose', e.target.value)}
                    aria-describedby={`${formId}-purpose-desc`}
                  />
                  <span id={`${formId}-purpose-desc`} className={styles.subtext}>
                    Tip: Focus on the real-world operational workflow or product experience you want to create.
                  </span>
                </div>
              )}

              {activeStep === 1 && (
                <div className={styles.inputGroup}>
                  <label htmlFor={`${formId}-problem`} className="sr-only">
                    Core Problem Description
                  </label>
                  <textarea
                    id={`${formId}-problem`}
                    rows={6}
                    className={styles.textarea}
                    placeholder={currentStepDef.placeholder}
                    value={formData.problem}
                    onChange={(e) => handleInputChange('problem', e.target.value)}
                    aria-describedby={`${formId}-problem-desc`}
                  />
                  <span id={`${formId}-problem-desc`} className={styles.subtext}>
                    Tip: Clarify who is burdened by this issue today and how critical resolving it is.
                  </span>
                </div>
              )}

              {activeStep === 2 && (
                <div className={styles.inputGroup}>
                  <label htmlFor={`${formId}-horizon`} className="sr-only">
                    Five-Year Horizon Vision
                  </label>
                  <textarea
                    id={`${formId}-horizon`}
                    rows={6}
                    className={styles.textarea}
                    placeholder={currentStepDef.placeholder}
                    value={formData.horizon}
                    onChange={(e) => handleInputChange('horizon', e.target.value)}
                    aria-describedby={`${formId}-horizon-desc`}
                  />
                  <span id={`${formId}-horizon-desc`} className={styles.subtext}>
                    Tip: Consider anticipated load, ecosystem integrations, and team capability evolution.
                  </span>
                </div>
              )}

              {activeStep === 3 && (
                <div className={styles.step4Grid}>
                  <div className={styles.fieldBlock}>
                    <label htmlFor={`${formId}-fullName`} className={styles.label}>
                      {inquiryForm.fields.fullName.label}
                    </label>
                    <input
                      id={`${formId}-fullName`}
                      type="text"
                      className={`${styles.input} ${errors.fullName ? styles.inputError : ''}`}
                      placeholder={inquiryForm.fields.fullName.placeholder}
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      aria-invalid={errors.fullName ? 'true' : undefined}
                      aria-describedby={errors.fullName ? `${formId}-fullName-err` : undefined}
                    />
                    {errors.fullName && (
                      <span id={`${formId}-fullName-err`} className={styles.errorMessage} role="alert">
                        {errors.fullName}
                      </span>
                    )}
                  </div>

                  <div className={styles.fieldBlock}>
                    <label htmlFor={`${formId}-email`} className={styles.label}>
                      {inquiryForm.fields.email.label}
                    </label>
                    <input
                      id={`${formId}-email`}
                      type="email"
                      className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                      placeholder={inquiryForm.fields.email.placeholder}
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      aria-invalid={errors.email ? 'true' : undefined}
                      aria-describedby={errors.email ? `${formId}-email-err` : undefined}
                    />
                    {errors.email && (
                      <span id={`${formId}-email-err`} className={styles.errorMessage} role="alert">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  <div className={styles.fieldBlockFull}>
                    <label htmlFor={`${formId}-organization`} className={styles.label}>
                      {inquiryForm.fields.organization.label}
                    </label>
                    <input
                      id={`${formId}-organization`}
                      type="text"
                      className={`${styles.input} ${errors.organization ? styles.inputError : ''}`}
                      placeholder={inquiryForm.fields.organization.placeholder}
                      value={formData.organization}
                      onChange={(e) => handleInputChange('organization', e.target.value)}
                      aria-invalid={errors.organization ? 'true' : undefined}
                      aria-describedby={errors.organization ? `${formId}-org-err` : undefined}
                    />
                    {errors.organization && (
                      <span id={`${formId}-org-err`} className={styles.errorMessage} role="alert">
                        {errors.organization}
                      </span>
                    )}
                  </div>

                  <div className={styles.fieldBlockFull}>
                    <label htmlFor={`${formId}-existing`} className={styles.label}>
                      {inquiryForm.fields.existingSystems.label}
                    </label>
                    <input
                      id={`${formId}-existing`}
                      type="text"
                      className={styles.input}
                      placeholder={inquiryForm.fields.existingSystems.placeholder}
                      value={formData.existingSystems}
                      onChange={(e) => handleInputChange('existingSystems', e.target.value)}
                    />
                    <span className={styles.subtext}>{inquiryForm.fields.existingSystems.helper}</span>
                  </div>

                  <div className={styles.fieldBlockFull}>
                    <label htmlFor={`${formId}-constraints`} className={styles.label}>
                      {inquiryForm.fields.constraints.label}
                    </label>
                    <input
                      id={`${formId}-constraints`}
                      type="text"
                      className={styles.input}
                      placeholder={inquiryForm.fields.constraints.placeholder}
                      value={formData.constraints}
                      onChange={(e) => handleInputChange('constraints', e.target.value)}
                    />
                    <span className={styles.subtext}>{inquiryForm.fields.constraints.helper}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Error Notice */}
            {submitError && (
              <div className={styles.errorNotice} role="alert">
                <p className={styles.errorNoticeText}>{submitError}</p>
                {mailtoFallback && (
                  <a href={mailtoFallback} className={styles.errorMailtoAction}>
                    {inquiryForm.errorMessage.directMailLabel}
                  </a>
                )}
              </div>
            )}

            {/* Form Footer Controls */}
            <div className={styles.footerControls}>
              <button
                type="button"
                onClick={handlePrev}
                disabled={activeStep === 0 || isSubmitting}
                className={styles.prevButton}
              >
                {inquiryForm.actions.prev}
              </button>

              {activeStep < totalSteps - 1 ? (
                <button type="button" onClick={handleNext} className={styles.nextButton}>
                  {inquiryForm.actions.next}
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ''}`}
                >
                  {isSubmitting ? inquiryForm.actions.submitting : inquiryForm.actions.submit}
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
