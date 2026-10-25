import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
  await page.locator('#prislista').scrollIntoViewIfNeeded()
})

test('prislista section is present', async ({ page }) => {
  await expect(page.locator('#prislista')).toBeVisible()
})

test('all 4 price categories are shown', async ({ page }) => {
  const categories = ['Hemstädning', 'Flyttstädning', 'Fönsterputs', 'Kontors- & Trappstädning']
  for (const cat of categories) {
    await expect(page.locator('#prislista').getByText(cat).first()).toBeVisible()
  }
})

test('hemstadning price is visible', async ({ page }) => {
  await expect(page.locator('#prislista').getByText('210 kr/tim')).toBeVisible()
})

test('flyttstadning price is visible', async ({ page }) => {
  await expect(page.locator('#prislista').getByText('30 kr/kvm')).toBeVisible()
})

test('bra att veta section is present', async ({ page }) => {
  await expect(page.locator('#prislista').getByText('Bra att veta')).toBeVisible()
})

test('reseavgift is listed as 0 kr', async ({ page }) => {
  await expect(page.locator('#prislista').getByText(/0 kr inom Säters tätort/)).toBeVisible()
})
