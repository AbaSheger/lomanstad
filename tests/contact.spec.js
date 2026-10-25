import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
  await page.locator('#kontakt').scrollIntoViewIfNeeded()
})

test('contact section is visible', async ({ page }) => {
  await expect(page.locator('#kontakt')).toBeVisible()
})

test('phone link has correct href', async ({ page }) => {
  const phoneLink = page.locator('#kontakt a[href^="tel"]').first()
  await expect(phoneLink).toHaveAttribute('href', /\+46760076957/)
})

test('email link has correct href', async ({ page }) => {
  const emailLink = page.locator('#kontakt a[href^="mailto"]').first()
  await expect(emailLink).toHaveAttribute('href', 'mailto:info@lomanstad.se')
})

test('form shows validation errors when submitted empty', async ({ page }) => {
  await page.getByRole('button', { name: 'Skicka förfrågan' }).click()
  await expect(page.getByText('Förnamn krävs')).toBeVisible()
  await expect(page.getByText('Efternamn krävs')).toBeVisible()
  await expect(page.getByText('E-post krävs')).toBeVisible()
  await expect(page.getByText('Du måste godkänna integritetspolicyn')).toBeVisible()
})

test('form shows invalid email error', async ({ page }) => {
  await page.fill('#fornamn', 'Anna')
  await page.fill('#efternamn', 'Lindgren')
  await page.fill('#epost', 'not-an-email')
  await page.getByRole('button', { name: 'Skicka förfrågan' }).click()
  await expect(page.getByText('Ogiltig e-postadress')).toBeVisible()
})

test('validation error clears when field is filled', async ({ page }) => {
  await page.getByRole('button', { name: 'Skicka förfrågan' }).click()
  await expect(page.getByText('Förnamn krävs')).toBeVisible()
  await page.fill('#fornamn', 'Anna')
  await expect(page.getByText('Förnamn krävs')).not.toBeVisible()
})

test('service dropdown contains all 6 services', async ({ page }) => {
  const options = page.locator('#tjanst option')
  await expect(options).toHaveCount(7) // 6 services + placeholder
})

test('privacy modal opens when integritetspolicyn is clicked', async ({ page }) => {
  await page.getByRole('button', { name: 'integritetspolicyn' }).click()
  await expect(page.getByRole('dialog')).toBeVisible()
})

test('privacy modal closes', async ({ page }) => {
  await page.getByRole('button', { name: 'integritetspolicyn' }).click()
  await expect(page.getByRole('dialog')).toBeVisible()
  await page.keyboard.press('Escape')
  await expect(page.getByRole('dialog')).not.toBeVisible()
})
