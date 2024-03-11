'use client';

import React from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import { useFormState, useFormStatus } from 'react-dom'

import { sendMessage } from '../_actions/postAction'

const SubmitButton = () => {
  const status = useFormStatus()

  return (
    <Button variant="primary" type="submit" disabled={status.pending}>
      { status.pending ? '送信中...' : '送信'}
    </Button>
  )
}

const ContactForm = () => {
  const [state, formAction] = useFormState(sendMessage, {})

  return (
    <>
      { state?.errors && (
        <Alert variant="danger">
          <Alert.Heading>フォーム内容を確認してください</Alert.Heading>
          <ul className="mb-0">
            {Object.entries(state.errors).map(([key, value]) => (
              <li key={key}>{value}</li>
            ))}
          </ul>
        </Alert>
      )}
      <Form action={formAction}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>名前</Form.Label>
          <Form.Control type="text" name="name" placeholder="サンプル太郎" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>メールアドレス</Form.Label>
          <Form.Control type="email" name="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="message">
          <Form.Label>問い合わせ内容</Form.Label>
          <Form.Control as="textarea" name="message" rows={3} />
        </Form.Group>
        <SubmitButton />
      </Form>
    </>
  )
}

export default ContactForm
