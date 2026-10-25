/**
 * Contact Feature Content Specification
 *
 * Authority: Level 2 Audience-Facing Content Spec v1.1 (Screen 06: Contact & Project Inquiry)
 * Authority: Level 3 Information Architecture v2.0 (§11.6)
 * Governing Rule: DEC-009 Mandatory UI Text Centralization
 */

export interface ContactChannel {
  readonly type: 'email' | 'phone' | 'whatsapp';
  readonly label: string;
  readonly value: string;
  readonly href: string;
  readonly ariaLabel: string;
}

export interface ContactPathway {
  readonly id: string;
  readonly code: string;
  readonly title: string;
  readonly description: string;
  readonly actionLabel: string;
  readonly actionHref?: string;
  readonly isExternal?: boolean;
  readonly channels?: readonly ContactChannel[];
}

export const CONTACT_CONTENT = {
  header: {
    eyebrow: 'GET IN TOUCH',
    binaryTelemetry: '01000011 01001111 // INTAKE // DIRECT TRANSMISSION',
    headline: 'Start with a conversation.',
    lead:
      'Whether you have a concrete functional specification or an early-stage concept, we welcome direct discussions about engineering, architecture, and technology consulting.',
    locationAnchor: 'Based in Kerala, India — Working Globally.',
    phone: '+91 88482 10456',
    phoneHref: 'tel:+918848210456',
    whatsappHref: 'https://wa.me/918848210456',
    email: 'binarysequence.techart@gmail.com',
    emailHref: 'mailto:binarysequence.techart@gmail.com',
  },

  pathways: {
    eyebrow: '+ CHOOSE THE RELEVANT PATH',
    headline: 'Three ways to engage.',
    items: [
      {
        id: 'pathway-blueprint',
        code: 'PATHWAY A // NEW PRODUCTS',
        title: 'The Sequence Blueprint',
        description:
          'De-risk your digital product before writing code. A fixed-scope 10-day discovery engagement producing independent, client-owned system specifications.',
        actionLabel: 'Initiate a Sequence Blueprint →',
        actionHref: '/blueprint',
      },
      {
        id: 'pathway-existing',
        code: 'PATHWAY B // EXISTING SYSTEMS',
        title: 'Architecture & Optimization',
        description:
          'Comprehensive architectural reviews, performance optimizations, and legacy decoupling for live enterprise platforms and complex applications.',
        actionLabel: 'Inquire About Existing Systems ↓',
        actionHref: '#inquiry-form',
      },
      {
        id: 'pathway-direct',
        code: 'PATHWAY C // DIRECT INQUIRY',
        title: 'Direct Engineering Transmission',
        description:
          'Direct confidential communication channel for technical leadership, enterprise advisory, and exploratory partnerships.',
        actionLabel: 'binarysequence.techart@gmail.com',
        actionHref: 'mailto:binarysequence.techart@gmail.com',
        isExternal: true,
        channels: [
          {
            type: 'email',
            label: 'MAIL',
            value: 'binarysequence.techart@gmail.com',
            href: 'mailto:binarysequence.techart@gmail.com',
            ariaLabel: 'Send email to binarysequence.techart@gmail.com',
          },
          {
            type: 'phone',
            label: 'TEL',
            value: '+91 88482 10456',
            href: 'tel:+918848210456',
            ariaLabel: 'Call engineering direct line at +91 88482 10456',
          },
          {
            type: 'whatsapp',
            label: 'WA',
            value: '+91 88482 10456',
            href: 'https://wa.me/918848210456',
            ariaLabel: 'Chat on WhatsApp with +91 88482 10456',
          },
        ],
      },
    ] as readonly ContactPathway[],
  },

  form: {
    eyebrow: '+ TRANSMISSION CHANNEL',
    headline: 'General Technical Inquiry',
    lead:
      'Submit your inquiry below. We review every submission directly and respond with technical clarity within two business days.',
    fields: {
      fullName: {
        label: 'Your Name *',
        placeholder: 'Akshay Kumar',
        requiredError: 'Your name is required.',
      },
      email: {
        label: 'Email Address *',
        placeholder: 'akshay@company.com',
        requiredError: 'Email address is required.',
        invalidError: 'Please enter a valid email format (name@company.com).',
      },
      topic: {
        label: 'Subject / Inquiry Topic *',
        options: [
          { value: 'new-product', label: 'New Product Build / Discovery' },
          { value: 'architecture-review', label: 'Architecture & Codebase Review' },
          { value: 'performance-optimization', label: 'Performance & Systems Optimization' },
          { value: 'operational-support', label: 'Operational Support & Advisory' },
          { value: 'general-inquiry', label: 'General Technical Inquiry' },
        ],
      },
      overview: {
        label: 'Project Overview & Context *',
        placeholder:
          'Describe your system context, technical challenges, or what you are aiming to accomplish...',
        requiredError: 'Please provide brief context about your project or inquiry.',
      },
      timeline: {
        label: 'Target Timeline Expectations (Optional)',
        options: [
          { value: 'immediate', label: 'Immediate (< 1 month)' },
          { value: '1-3-months', label: '1–3 Months' },
          { value: '3-6-months', label: '3–6 Months' },
          { value: 'flexible', label: 'Flexible / Exploratory' },
        ],
      },
      budget: {
        label: 'Budget Horizon (Optional)',
        options: [
          { value: 'under-10k', label: 'Under $10,000' },
          { value: '10k-25k', label: '$10,000 – $25,000' },
          { value: '25k-50k', label: '$25,000 – $50,000' },
          { value: '50k-plus', label: '$50,000+' },
          { value: 'blueprint-scope', label: 'To Be Scoped via Blueprint' },
        ],
      },
    },
    privacyNotice:
      'Information submitted through this form is used exclusively to respond to your project inquiry. We never share your data with third parties or subscribe you to marketing lists.',
    actions: {
      submit: 'Send Message',
      submitting: 'Transmitting Message...',
      reset: 'Send Another Transmission',
    },
    successMessage: {
      headline: 'Transmission Received.',
      detail:
        'Thank you for reaching out. We have logged your inquiry and will respond directly to your email address within two business days.',
    },
    errorMessage: {
      headline: 'Transmission Notice',
      detail:
        'Direct automated transmission encountered a network disruption. Your inputs have been preserved. You can retry or dispatch via email below.',
      directMailLabel: 'Send via Default Mail Client →',
    },
  },
} as const;
