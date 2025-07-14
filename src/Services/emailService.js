import emailjs from '@emailjs/browser'

export const sendSubscriptionEmail = async (user_email) => {
  try {
    const result = await emailjs.send(
      "service_gfpikpq",
      "template_r3vmqrr",
      { message: `New email is Subscribed ${user_email}` },
    import.meta.env.VITE_EmailJs_PUBLIC_KEY
    )
    return { success: true, result }
  } catch (error) {
    return { success: false, error }
  }
}



/**
 * TODO add name once I add the Database
 */
export const sendMessageEmail = async ( user_message, user_name, user_email) => {

  try {
    const result = await emailjs.send(
      "service_gfpikpq",
      "template_27n38lb",
      { 
        title: 'Contact',
        message: `
        Dear TimeCapsule \n 
        I hope this emmail finds you well \n 
        ${user_message}
        Best Regargss, \n
        ${user_name},
        ${user_email}`,
      },
    import.meta.env.VITE_EmailJs_PUBLIC_KEY
    )
    return { success: true, result }
  } catch (error) {
    return { success: false, error }
  }
}

