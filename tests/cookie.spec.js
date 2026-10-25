import { test, expect } from '@playwright/test'

test('cookie banner appears on first visit', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('alertdialog', { name: 'Cookiemeddelande' })).toBeVisible()
})

test('cookie banner disappears after accepting', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'Godkänn' }).click()
  await expect(page.getByRole('alertdialog', { name: 'Cookiemeddelande' })).not.toBeVisible()
})
