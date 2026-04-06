import { useState } from 'react'
import emailjs from 'emailjs-com'
import { SERVICE_EMAIL_ID, EMAIL_TEMPLATE_ID, EMAILjS_PUBLIC_KEY } from '@/helpers/constant'

export const useContactVM = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [isSending, setIsSending] = useState<boolean>(false)
  const [status, setStatus] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSending(true)
    setStatus('')

    try {
      const result = await emailjs.send(
        SERVICE_EMAIL_ID,
        EMAIL_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        EMAILjS_PUBLIC_KEY
      )

      if (result.status === 200) {
        setStatus('✅ Pesan berhasil dikirim!')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('❌ Gagal mengirim pesan, coba lagi.')
      }
    } catch (error) {
      console.error(error)
      setStatus('⚠️ Terjadi kesalahan, coba lagi.')
    } finally {
      setIsSending(false)
    }
  }

  return {
    form,
    status,
    isSending,
    handleChange,
    handleSubmit,
  }
}
