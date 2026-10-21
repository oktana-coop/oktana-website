import { expect, test } from '@playwright/test';

import { defaultSupportTier, supportTiers } from '../src/lib/support-tiers';

test.describe('monthly support', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('preselects the default tier', async ({ page }) => {
    await expect(
      page.getByRole('radio', { name: `€${defaultSupportTier.amount}/month` })
    ).toBeChecked();
    await expect(
      page.getByRole('link', { name: /Become a monthly supporter/ })
    ).toHaveAttribute('href', defaultSupportTier.link);
  });

  const otherTiers = supportTiers.filter((tier) => tier !== defaultSupportTier);

  for (const tier of otherTiers) {
    test(`links to the €${tier.amount} tier when picked`, async ({ page }) => {
      await page.getByRole('radio', { name: `€${tier.amount}/month` }).check();

      await expect(
        page.getByRole('link', { name: /Become a monthly supporter/ })
      ).toHaveAttribute('href', tier.link);
    });
  }
});
