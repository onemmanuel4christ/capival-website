import { createClient } from "@sanity/client";

export default createClient({
  projectId: "qen8wdnl",
  dataset: "production",
  apiVersion: "2023-04-08", // Or the latest version
  useCdn: true, // Use the Content Delivery Network for faster responses
});
