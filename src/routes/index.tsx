import { createFileRoute } from '@tanstack/react-router'
import { PortfolioExperience } from '@/components/PortfolioExperience'

export const Route = createFileRoute('/')({
  component: PortfolioExperience,
})
