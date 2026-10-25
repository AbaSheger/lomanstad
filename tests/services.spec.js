import { test, expect } from '@playwright/test'

const services = [
  { id: 'hemstadning', title: 'Hemstädning' },
  { id: 'flyttstadning', title: 'Flyttstädning' },
  { id: 'storstadning', title: 'Storstädning' },
  { id: 'kontorsstadning', title: 'Kontorsstädning' },
  { id: 'fonsterputsning', title: 'Fönsterputsning' },
  { id: 'trappstadning', title: 'Trappstädning' },
]

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test('all 6 service sections are present', async ({ page }) => {
  for (const service of services) {
    await expect(page.locator(`#${service.id}`)).toBeAttached()
  }
})

test('service cards show title and image', async ({ page }) => {
  for (const service of services) {
    const section = page.locator(`#${service.id}`)
    await expect(section.getByRole('img').first()).toBeVisible()
    await expect(section.getByText(service.title).first()).toBeVisible()
  }
})

test('accordion opens on click and shows details', async ({ page }) => {
  const section = page.locator('#hemstadning')
  const button = section.getByRole('button').first()
  await button.click()
  await expect(button).toHaveAttribute('aria-expanded', 'true')
})

test('accordion closes on second click', async ({ page }) => {
  const section = page.locator('#hemstadning')
  const button = section.getByRole('button').first()
  await button.click()
  await expect(button).toHaveAttribute('aria-expanded', 'true')
  await button.click()
  await expect(button).toHaveAttribute('aria-expanded', 'false')
})
