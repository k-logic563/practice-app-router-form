import React from 'react'
import { Container } from 'react-bootstrap'

import ContactForm from '../_components/Form'

const ContactPage = () => {
  return (
    <Container>
      <section className="py-5">
        <h1 className="fw-bold">お問い合わせフォーム</h1>
        <ContactForm />
      </section>
    </Container>
  )
}

export default ContactPage
