import { type Page } from '@playwright/test';

/**
 * Fills in the newsletter form in the footer and submits it.
 */
export const subscribeToNewsletter = async ({
  page,
  email,
}: {
  page: Page;
  email: string;
}) => {
  await page.getByLabel('Email address').fill(email);
  await page.getByRole('button', { name: 'Subscribe' }).click();
};
