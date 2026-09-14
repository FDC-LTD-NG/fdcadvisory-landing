import { getApiDocs } from "@/lib/swagger/spec";
import ReactSwagger from "./react-swagger";

export default async function ApiDocPage() {
  const spec = (await getApiDocs()) as Record<string, unknown>;
  return (
    <section className="container mx-auto max-w-content px-6 py-16">
      <h1 className="mb-8 text-3xl font-semibold tracking-tight text-white">
        API Documentation
      </h1>
      <ReactSwagger spec={spec} />
    </section>
  );
}
