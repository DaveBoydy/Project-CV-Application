import { useState } from 'react'
import { initHistories, initWorkData } from '../../data/experience.data'
import type { WorkHistory } from '../../../types'

function useHistory() {
  const [workHistories, setWorkHistories] =
    useState<WorkHistory[]>(initHistories)
  const [workData, setWorkData] = useState<WorkHistory>(initWorkData)

  const handleWorkChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setWorkData((prev) => ({ ...prev, [name]: value }))
  }

  const updateWorkName = (
    id: string,
    company: string,
    workTime: string,
    workTitle: string,
  ) => {
    const uid = `work-${id}`

    setWorkHistories((prev) =>
      prev.map((history) => {
        if (history.workId === uid) {
          return { ...history, company, workTime, workTitle }
        } else {
          return history
        }
      }),
    )
  }

  const updateWorkDescription = (
    id: string,
    num: string,
    description: string,
  ) => {
    const uid = `work-${id}`
    const index = parseInt(num) - 1

    setWorkHistories((prev) =>
      prev.map((history) => {
        if (history.descriptions[index] === description) {
          const updatedDescriptions = history.descriptions.map((desc, i) =>
            i === index && desc === description ? '' : desc,
          )
          return { ...history, descriptions: updatedDescriptions }
        }

        if (history.workId === uid) {
          const updatedDescriptions = history.descriptions.map((desc, i) =>
            i === index ? description : desc,
          )

          return { ...history, descriptions: updatedDescriptions }
        } else {
          return history
        }
      }),
    )
  }

  return {
    workHistories,
    workData,
    setWorkHistories,
    setWorkData,
    handleWorkChange,
    updateWorkName,
    updateWorkDescription,
  }
}

export default useHistory
