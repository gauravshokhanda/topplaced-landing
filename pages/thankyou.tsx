// pages/thankyou.tsx

import { GetServerSideProps } from "next";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const ThankYouPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Client-side navigation in case the user is redirected
    if (!router.isReady) return;
    // You can access query params here if needed
  }, [router.isReady]);

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
};

export default ThankYouPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  // You can access the query params here if needed (e.g., order info, user details, etc.)
  // This will ensure the page is rendered on the server, and the user can see it after payment.
  return {
    props: {}, // You can pass props if needed
  };
};
