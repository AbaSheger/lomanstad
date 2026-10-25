import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test('navbar is visible on load', async ({ page }) => {
  await expect(page.getByRole('navigation', { name: 'Huvudnavigering' })).toBeVisible()
})

test('logo is visible', async ({ page }) => {
  await expect(page.locator('nav img').first()).toBeVisible()
})

test('desktop nav shows all service links', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 800 })
  const hrefs = ['#hemstadning', '#flyttstadning', '#storstadning', '#kontorsstadning', '#fonsterputsning', '#trappstadning', '#prislista']
  for (const href of hrefs) {
    await expect(page.locator(`nav a[href="${href}"]`).first()).toBeVisible()
  }
})

test('kontakt button scrolls to contact section', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 800 })
  await page.locator('nav a[href="#kontakt"]').first().click()
  await expect(page.locator('#kontakt')).toBeInViewport({ timeout: 3000 })
})

test('nav link scrolls to correct section', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 800 })
  await page.locator('nav a[href="#prislista"]').first().click()
  await expect(page.locator('#prislista')).toBeInViewport({ timeout: 3000 })
})
