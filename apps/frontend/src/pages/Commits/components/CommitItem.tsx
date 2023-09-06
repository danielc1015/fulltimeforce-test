import React from 'react'

import { Card, CardBody, CardTitle } from '../../../components/ui/Card'

interface Props {
  commit: any;
}

export function CommitItem({ commit }: Props) {
  return (
    <>
      <Card>
        <CardTitle>{commit.title}</CardTitle>
        <CardBody>{commit.body}</CardBody>
      </Card>
    </>
  )
}
