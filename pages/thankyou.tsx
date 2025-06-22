// pages/thankyou.tsx

import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import { Button } from "react-day-picker";

export default function ThankYouPage() {
  const router = useRouter();

  return (
    <Layout>
      <div className="pt-32 pb-20 min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            Thank You for Registering!
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Your registration has been successful. We look forward to seeing you
            at the workshop.
          </p>
          <Button onClick={() => router.push("/workshops")}>
            Back to Workshops
          </Button>
        </div>
      </div>
    </Layout>
  );
}
