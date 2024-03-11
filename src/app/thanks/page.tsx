'use client'

import React from 'react'
import { Alert, Container } from 'react-bootstrap'

const ThanksPage = () => {
  return (
    <Container>
      <div className="py-5">
        <Alert variant="success">
          <Alert.Heading>送信完了</Alert.Heading>
          <p className="mb-0">お問い合わせありがとうございます。内容を確認の上、担当者よりご連絡いたします。</p>
        </Alert>
      </div>
    </Container>
  )
}

export default ThanksPage
