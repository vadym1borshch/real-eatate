import {
  Menu,
  MenuHandler,
  MenuList,
} from '@material-tailwind/react'
import { ReactNode } from 'react'
import Button from '../button'
import { cn } from '../../../helpers/ui.ts'

interface Props {
  children: ReactNode;
  label: string
  open: boolean
  setOpen: (open: boolean) => void
  withIcon?: boolean
  triggerButtonClassName?: string
  variant?: 'outlined' | 'text' | 'filled',
}

const Dropdown = ({ children, label, open, setOpen, withIcon, triggerButtonClassName, variant = 'text' }: Props) => {

  return (
    <Menu open={open} handler={() => setOpen(!open)}>
      <MenuHandler>
        <Button
          onClick={() => {}}
          variant={variant}
          className={cn('text-base z-1000', triggerButtonClassName)}
          iconId={withIcon ? 'chevronDownIcon' : undefined}
          iconClassName={cn('transition-transform', { 'rotate-180 transition-transform': open })}
        >
          {label}
        </Button>
      </MenuHandler>
      <MenuList className="w-fit min-w-fit border-transparent border-[0px]">
        {children}
      </MenuList>
    </Menu>
  )
}

export default Dropdown