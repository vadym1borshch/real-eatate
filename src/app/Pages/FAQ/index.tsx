import FAQ from '../../../components/organisms/home-page/faq'
import { useState } from 'react'
import { faqFilters } from '../../../components/organisms/home-page/faq/data.ts'
import { useTranslation } from 'react-i18next'
import { cn } from '../../../helpers/ui.ts'

export const FAQPage = () => {
  const [currentFilter, serCurrentFilter] = useState('rent')
  const { t } = useTranslation()
  return (
    <FAQ filter={currentFilter}>
      <div className="pt-[90px] flex justify-between max-w-[683px] w-full">
        {faqFilters.map((filter) => (
          <span
            key={filter.id}
            onClick={()=>serCurrentFilter(filter.key)}
            className={cn("cursor-pointer hover:text-gray transition-hover duration-300",{ 'underline': currentFilter === filter.key })}
          >
            {t(filter.value)}
          </span>
        ))}
      </div>
    </FAQ>
  )
}