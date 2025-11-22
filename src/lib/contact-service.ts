/**
 * Contact Form Submission Service
 *
 * This service handles contact form submissions. Currently implemented as a mock
 * that logs to console. In the future, this can be easily swapped with a CRM API
 * integration by replacing the implementation while keeping the same interface.
 */

export interface IContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface IContactServiceResponse {
  success: boolean;
  message: string;
}

/**
 * Mock contact service implementation
 * Logs form data to console and simulates API call
 *
 * TODO: Replace with actual CRM API integration
 * Example: Replace this function with a call to your CRM provider
 * (e.g., HubSpot, Salesforce, Pipedrive, etc.)
 */
async function mockContactService(
  data: IContactFormData
): Promise<IContactServiceResponse> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Log form data to console (for development/debugging)
  console.log('[Contact Form Submission]', {
    timestamp: new Date().toISOString(),
    data,
  });

  // In production, you might want to remove console.log or use a logging service
  // For now, this helps with debugging during development

  return {
    success: true,
    message: 'Thank you for your message! We will get back to you soon.',
  };
}

/**
 * Submit contact form data
 *
 * This is the main entry point for form submissions.
 * To integrate with a CRM, replace the mockContactService call with your API call.
 *
 * Example CRM integration:
 * ```typescript
 * async function submitToCRM(data: IContactFormData): Promise<IContactServiceResponse> {
 *   const response = await fetch('https://your-crm-api.com/contacts', {
 *     method: 'POST',
 *     headers: { 'Content-Type': 'application/json' },
 *     body: JSON.stringify(data),
 *   });
 *   return response.json();
 * }
 * ```
 */
export async function submitContactForm(
  data: IContactFormData
): Promise<IContactServiceResponse> {
  try {
    // Currently using mock service
    // TODO: Replace with actual CRM API call
    return await mockContactService(data);

    // Future implementation example:
    // return await submitToCRM(data);
  } catch (error) {
    console.error('[Contact Form Error]', error);
    return {
      success: false,
      message:
        'Sorry, there was an error submitting your message. Please try again later.',
    };
  }
}

