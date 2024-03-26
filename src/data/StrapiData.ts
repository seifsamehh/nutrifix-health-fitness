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

const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

export async function getStrapiData(path: string) {
  const url = new URL(path, baseUrl);

  const searchParams = new URLSearchParams(landingPageQuery);
  //! Add this when you want to remove cache
  // searchParams.set("timestamp", String(Date.now())); //* Add a unique timestamp query parameter
  url.search = searchParams.toString();

  const requestTimeout = 10000; //* Set a timeout of 10 seconds

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), requestTimeout);

    const response = await fetch(url.href, {
      signal: controller.signal,
    });

    clearTimeout(timeoutId); //* Clear the timeout

    if (!response.ok) {
      throw new Error(
        "Failed to fetch data. Server returned " + response.status
      );
    }

    const data = await response.json();
    const flattenedData = flattenAttributes(data);
    return flattenedData;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
