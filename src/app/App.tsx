import { ReactNode, Suspense, useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import './App.css'
import LanguageSwitcher from '../components/molecules/language-switcher'
import Checkbox from '../components/atoms/checkbox'

const Home = () => {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  return (
    <div className="flex flex-col gap-4 w-full justify-center">
      <h1>{t('title')}</h1>

      <LanguageSwitcher />
      <Checkbox checked={open} setChecked={setOpen} />
    </div>
  )
}

const LanguageWrapper = ({ children }: { children: ReactNode }) => {
  const { lang } = useParams<{ lang: string }>()

  useEffect(() => {
    if (lang && i18next.language !== lang) {
      i18next.changeLanguage(lang).catch(console.error)
    }
  }, [lang])

  return <>{children}</>
}

const Loading = () => <div>Loading translations...</div>

const App = () => {
  return (
    <LanguageWrapper>
      <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Navigate to="/en" replace />} />
            <Route path="/:lang" element={<Home />} />
          </Routes>
        </Suspense>
      </Router>
    </LanguageWrapper>
  )
}

export default App
