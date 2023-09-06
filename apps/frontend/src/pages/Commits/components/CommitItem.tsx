import React from "react";

import { Card, CardBody, CardTitle } from "../../../components/ui/Card";
import { Commit } from "../../../types/commit";

interface Props {
  commit: Commit;
}

export function CommitItem({ commit }: Props) {
  return (
    <>
      <Card className="mb-2" url={commit.commit.url} >
        <CardTitle>{commit.commit.message}</CardTitle>
        <CardBody>
          <p>Author: {commit.commit.author.name}</p>
          <p>Date: {commit.commit.author.date}</p>
          <small>SHA: {commit.sha}</small>
        </CardBody>
      </Card>
    </>
  );
}
