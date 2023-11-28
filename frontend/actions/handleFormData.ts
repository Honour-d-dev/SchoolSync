'use server'

import { handleFormValidate } from '@/lib/utils'

export const handleFormData = async (data: FormData) => {
  const name = data.get('fullName')
  const email = data.get('email')
  const school = data.get('school')
  const image = data.get('image')

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
  console.log(name, email, school)
}
