import { flattenAttributes } from "@/lib/utils";
import qs from "qs";

const landingPageQuery = qs.stringify({
  populate: {
    blocks: {
      populate: {
        link: {
          populate: true,
        },
        problem: {
          populate: true,
        },
        process: {
          populate: true,
        },
        sectionTitle: {
          populate: true,
        },
      },
    },
  },
});

const baseUrl = process.env.STRAPI_URL;

export async function getStrapiData(path: string) {
  const url = `${baseUrl}${path}?${landingPageQuery}`;

  const requestTimeout = 10000; //* Set a timeout of 10 seconds
  const maxRetries = 3; //* Set the maximum number of retries

  let retries = 0;

  while (retries < maxRetries) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), requestTimeout);

      const response = await fetch(url, {
        signal: controller.signal,
      });

      clearTimeout(timeoutId); //* Clear the timeout

      if (!response.ok) {
        throw new Error(
          `Failed to fetch data. Server returned ${response.status}`
        );
      }

      const data = await response.json();
      const flattenedData = flattenAttributes(data);
      return flattenedData;
    } catch (error: any) {
      if (error.name === "AbortError") {
        throw new Error("Request timed out");
      }
      if (error.status === 429 || error.status === 503) {
        retries++;
        await new Promise((resolve) => setTimeout(resolve, 1000)); //* Wait for 1 second before retrying
        continue;
      }
      console.error(error);
      throw error;
    }
  }

  throw new Error("Maximum number of retries reached");
}
