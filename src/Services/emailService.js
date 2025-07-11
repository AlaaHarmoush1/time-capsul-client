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

