'use server'

import { handleFormValidate } from '@/lib/utils'

export const handleStudentFormData = async (data: FormData, url: string) => {
  const name = data.get('fullName')
  const email = data.get('email')
  const school = data.get('school')
  const image = url

  if (
    !handleFormValidate({
      name: name as string,
      email: email as string,
      school: school as string,
    })
  ) {
    return {
      error: 'validation error',
    }
  }

  console.log(name, email, school, image)
}
