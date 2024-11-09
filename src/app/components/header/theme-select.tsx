import { SunMoon } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import {
  DropdownMenuCheckboxItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from '@/app/components/ui/dropdown-menu'
import { useTheme } from '@/store/theme.store'
import { Theme } from '@/types/themeContext'

const themes: Theme[] = ['light', 'dark', 'system']

export function ThemeSelect() {
  const { theme: currentTheme, setTheme } = useTheme()
  const { t } = useTranslation()

  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>
        <SunMoon className="mr-2 h-4 w-4" />
        <span>{t('theme.label')}</span>
      </DropdownMenuSubTrigger>
      <DropdownMenuPortal>
        <DropdownMenuSubContent>
          {themes.map((theme) => (
            <DropdownMenuCheckboxItem
              key={theme}
              checked={currentTheme === theme}
              disabled={currentTheme === theme}
              onSelect={(e) => {
                e.preventDefault()
                setTheme(theme)
              }}
            >
              {t(`theme.${theme}`)}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    </DropdownMenuSub>
  )
}