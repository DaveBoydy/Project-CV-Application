import { createContext, useContext } from 'react'
import type {
  GeneralContextValue,
  EducationContextValue,
  ExperienceContextValue,
} from './types'

const GeneralContext = createContext<GeneralContextValue | undefined>(undefined)

const useGeneralContext = () => {
  const context = useContext(GeneralContext)

  if (!context) {
    throw new Error('Must be used within the correct ContextProvider')
  }

  return context
}

const EducationContext = createContext<EducationContextValue | undefined>(
  undefined,
)

const useEducationContext = () => {
  const context = useContext(EducationContext)

  if (!context) {
    throw new Error('Must be used within the correct ContextProvider')
  }

  return context
}

const ExperienceContext = createContext<ExperienceContextValue | undefined>(
  undefined,
)

const useExperienceContext = () => {
  const context = useContext(ExperienceContext)

  if (!context) {
    throw new Error('Must be used within the correct ContextProvider')
  }

  return context
}

export {
  GeneralContext,
  useGeneralContext,
  EducationContext,
  useEducationContext,
  ExperienceContext,
  useExperienceContext,
}
