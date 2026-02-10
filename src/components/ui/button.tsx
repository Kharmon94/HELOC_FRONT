import { type ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from './utils'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        'px-4 py-2 rounded-lg font-medium transition-colors',
        variant === 'primary' && 'bg-brand-blue text-white hover:opacity-90',
        variant === 'secondary' && 'bg-brand-cyan text-gray-900 hover:opacity-90',
        variant === 'outline' && 'border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white',
        className
      )}
      {...props}
    />
  )
)
Button.displayName = 'Button'
export { Button }
