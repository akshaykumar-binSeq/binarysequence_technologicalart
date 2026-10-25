/**
 * Blueprint Feature Infrastructure: Inquiry Submission Engine
 *
 * Provides resilient intake handling:
 * 1. Dispatches to configured endpoint (NEXT_PUBLIC_CONTACT_ENDPOINT or NEXT_PUBLIC_BLUEPRINT_ENDPOINT)
 * 2. Provides deterministic mailto fallback preserving user data for static export environments
 */

export interface BlueprintInquiryData {
  purpose: string;
  problem: string;
  horizon: string;
  existingSystems: string;
  constraints: string;
  fullName: string;
  email: string;
  organization: string;
}

export interface IntakeSubmissionResult {
  ok: boolean;
  message?: string;
  fallbackMailtoUrl?: string;
}

const PRIMARY_DISCOVERY_EMAIL = 'binarysequence.techart@gmail.com';

export function formatBlueprintMailto(data: BlueprintInquiryData): string {
  const subject = encodeURIComponent(
    `[Blueprint Discovery] ${data.organization || 'Inquiry'} — ${data.fullName || 'Architecture Discovery'}`
  );

  const bodyContent = [
    '=== SEQUENCE BLUEPRINT DISCOVERY INQUIRY ===',
    '',
    `Full Name: ${data.fullName}`,
    `Work Email: ${data.email}`,
    `Organization: ${data.organization}`,
    '',
    '--- 01. SYSTEM PURPOSE ---',
    data.purpose || '(Not provided)',
    '',
    '--- 02. CORE PROBLEM ---',
    data.problem || '(Not provided)',
    '',
    '--- 03. FIVE-YEAR HORIZON ---',
    data.horizon || '(Not provided)',
    '',
    '--- 04. CONTEXT & CONSTRAINTS ---',
    `Existing Systems: ${data.existingSystems || 'None specified'}`,
    `Known Constraints / Target Window: ${data.constraints || 'None specified'}`,
    '',
    '============================================',
    'Transmitted via Binary Sequence Technological Art (binarysequence.art/blueprint)',
  ].join('\n');

  const body = encodeURIComponent(bodyContent);
  return `mailto:${PRIMARY_DISCOVERY_EMAIL}?subject=${subject}&body=${body}`;
}

export async function submitBlueprintInquiry(data: BlueprintInquiryData): Promise<IntakeSubmissionResult> {
  const endpoint =
    typeof process !== 'undefined'
      ? process.env.NEXT_PUBLIC_BLUEPRINT_ENDPOINT || process.env.NEXT_PUBLIC_CONTACT_ENDPOINT
      : undefined;

  const mailtoUrl = formatBlueprintMailto(data);

  if (!endpoint) {
    // In static export without configured backend, provide mailto link and proceed cleanly
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
        source: 'blueprint-inquiry',
        timestamp: new Date().toISOString(),
        ...data,
      }),
    });

    if (!response.ok) {
      return {
        ok: false,
        message: `Remote server responded with status ${response.status}`,
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
      message: err instanceof Error ? err.message : 'Network error during submission.',
      fallbackMailtoUrl: mailtoUrl,
    };
  }
}
