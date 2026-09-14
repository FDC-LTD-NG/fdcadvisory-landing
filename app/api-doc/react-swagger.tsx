"use client";

import dynamic from "next/dynamic";
import "swagger-ui-react/swagger-ui.css";

// Dynamically import SwaggerUI with ssr:false because swagger-ui-react
// is not compatible with React Server Components.
const SwaggerUI = dynamic(() => import("swagger-ui-react"), { ssr: false });

type Props = {
  spec: Record<string, unknown>;
};

function ReactSwagger({ spec }: Props) {
  return <SwaggerUI spec={spec} />;
}

export default ReactSwagger;
