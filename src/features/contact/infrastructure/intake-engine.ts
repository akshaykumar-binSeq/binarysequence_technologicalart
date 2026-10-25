/**
 * Contact Feature Infrastructure: Backend Intake Engine
 *
 * Implements DR-08 Contact Form Destination & Protocol:
 * 1. Primary path: Transmits payload to NEXT_PUBLIC_CONTACT_ENDPOINT via client-side fetch.
 * 2. Fallback path: When unconfigured (static export) or upon network error, builds an
 *    accessible mailto link preserving all entered data and state.
 *
 * Authority: Level 3 Information Architecture v2.0 (§11.6)
 * Destination Email: binarysequence.techart@gmail.com
 */

export interface ContactInquiryPayload {
  fullName: string;
  email: string;
  topic: string;
  overview: string;
  timeline?: string;
  budget?: string;
}

export interface IntakeSubmissionResult {
  ok: boolean;
  message?: string;
  fallbackMailtoUrl?: string;
}

const PRIMARY_INTAKE_EMAIL = 'binarysequence.techart@gmail.com';

const TOPIC_LABELS: Record<string, string> = {
  'new-product': 'New Product Build / Discovery',
  'architecture-review': 'Architecture & Codebase Review',
  'performance-optimization': 'Performance & Systems Optimization',
  'operational-support': 'Operational Support & Advisory',
  'general-inquiry': 'General Technical Inquiry',
};

export function formatContactMailto(data: ContactInquiryPayload): string {
  const topicLabel = TOPIC_LABELS[data.topic] || data.topic || 'General Inquiry';
  const subject = encodeURIComponent(
    `[Inquiry: ${topicLabel}] ${data.fullName || 'Engineering Inquiry'}`
  );

  const bodyContent = [
    '=== BINARY SEQUENCE TECHNOLOGICAL ART // INQUIRY ===',
    '',
    `Name: ${data.fullName}`,
    `Email: ${data.email}`,
    `Subject / Topic: ${topicLabel}`,
    `Timeline Expectations: ${data.timeline || 'Not specified'}`,
    `Budget Horizon: ${data.budget || 'Not specified'}`,
    '',
    '--- PROJECT OVERVIEW & CONTEXT ---',
    data.overview,
    '',
    '====================================================',
    'Origin: binarysequence.art/contact',
  ].join('\n');

  const body = encodeURIComponent(bodyContent);
  return `mailto:${PRIMARY_INTAKE_EMAIL}?subject=${subject}&body=${body}`;
}

export async function submitContactInquiry(
  payload: ContactInquiryPayload
): Promise<IntakeSubmissionResult> {
  const endpoint =
    typeof process !== 'undefined' ? process.env.NEXT_PUBLIC_CONTACT_ENDPOINT : undefined;

  const mailtoUrl = formatContactMailto(payload);

  if (!endpoint) {
    // Static export mode: No external endpoint configured in environment
    return {
      ok: true,
      fallbackMailtoUrl: mailtoUrl,
    };
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        source: 'contact-general-inquiry',
        timestamp: new Date().toISOString(),
        ...payload,
      }),
    });

    if (!response.ok) {
      return {
        ok: false,
        message: `Remote server responded with error code ${response.status}`,
        fallbackMailtoUrl: mailtoUrl,
      };
    }

    return {
      ok: true,
      message: 'Inquiry received successfully.',
    };
  } catch (err) {
    return {
      ok: false,
      message: err instanceof Error ? err.message : 'Network error occurred during submission.',
      fallbackMailtoUrl: mailtoUrl,
    };
  }
}
