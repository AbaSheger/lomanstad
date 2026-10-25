import { test, expect } from '@playwright/test'

test.use({ viewport: { width: 390, height: 844 } })

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test('hamburger button is visible on mobile', async ({ page }) => {
  await expect(page.getByRole('button', { name: 'Öppna meny' })).toBeVisible()
})

test('mobile menu opens when hamburger is clicked', async ({ page }) => {
  await page.getByRole('button', { name: 'Öppna meny' }).click()
  await expect(page.locator('#mobile-menu')).not.toHaveAttribute('aria-hidden', 'true')
  await expect(page.getByRole('link', { name: 'Hemstädning' }).first()).toBeVisible()
})

test('mobile menu closes when a link is clicked', async ({ page }) => {
  await page.getByRole('button', { name: 'Öppna meny' }).click()
  await page.getByRole('link', { name: 'Prislista' }).first().click()
  await expect(page.locator('#mobile-menu')).toHaveAttribute('aria-hidden', 'true')
})

test('mobile menu closes when X button is clicked', async ({ page }) => {
  await page.getByRole('button', { name: 'Öppna meny' }).click()
  await page.getByRole('button', { name: 'Stäng meny' }).click()
  await expect(page.locator('#mobile-menu')).toHaveAttribute('aria-hidden', 'true')
})

test('page renders correctly on mobile', async ({ page }) => {
  await expect(page.locator('h1, h2').first()).toBeVisible()
})
