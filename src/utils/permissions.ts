import type { User, UserType } from '../types'

export function canViewAdmin(user: User | null): boolean {
  return user?.admin === true
}

export function getUserType(user: User | null): UserType {
  return user?.admin ? 'admin' : 'user'
}
