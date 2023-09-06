import React from "react";
import { Accordion } from "../../../components/ui/Accordion";

export function Docs() {
  return (
    <>
      <Accordion title="How it was done?" className="mb-3 max-w-3xl">
        <div className="text-start">
          <p>
            It was made using <strong>React</strong> in the frontend and{" "}
            <strong>NestJS</strong> in the backend. <br />
            The proyect was structured this way: <br />
          </p>
          <div className="bg-indigo-900 text-gray-300 p-1">
            <code>
              <pre>
                apps/ <br />
                │ <br />
                └── frontend/ <br />
                └── backend/ <br />
              </pre>
            </code>
          </div>
          <br />
          <p>
            The frontend folder was structured with the idea of handling a
            large-scale project, supporting multiple pages and components.{" "}
            <br />
            For example, it employs custom hooks and services. Inside the
            'components' folder, you'll find all the UI components shared across
            all the pages. <br />
            Additionally, the 'pages' folder can be organized logically to
            reflect the UI, making it easier to find the code you're looking.
          </p>
          <p>In this case Context API or Redux was not used just to minimize the dev time.</p>
        </div>
      </Accordion>
    </>
  );
}
