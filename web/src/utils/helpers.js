import { parseISO, format } from "date-fns";

const sanityProjectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID || "zakv95rn";
const sanityDataset = import.meta.env.PUBLIC_SANITY_DATASET || "production";
const sanityGraphqlUrl =
  import.meta.env.PUBLIC_SANITY_GRAPHQL_URL ||
  `https://${sanityProjectId}.api.sanity.io/v1/graphql/${sanityDataset}/default`;

export async function getSanityContent({ query, variables = {} }) {
  if (!sanityGraphqlUrl) {
    throw new Error(
      "Sanity GraphQL URL is not configured. Set PUBLIC_SANITY_GRAPHQL_URL or PUBLIC_SANITY_PROJECT_ID and PUBLIC_SANITY_DATASET in web/.env."
    );
  }

  const response = await fetch(sanityGraphqlUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  if (!response.ok) {
    throw new Error(
      `Sanity request failed: ${response.status} ${response.statusText}`
    );
  }

  const payload = await response.json();

  if (payload.errors?.length) {
    const firstError = payload.errors[0]?.message || "Unknown GraphQL error";
    throw new Error(`Sanity GraphQL error: ${firstError}`);
  }

  const { data } = payload;

  if (data && data.allBlog) {
    const hiddenBlogs = ["Benefits of IEEE", "IEEE-IIITD Events Report"];
    data.allBlog = data.allBlog.filter(
      (blog) => !hiddenBlogs.includes(blog.title)
    );
  }

  return data;
}

export function formatBlogPostDate(date) {
  const dateString = parseISO(date, "YYYY/MM/dd");
  const formattedDateString = format(dateString, "dd MMMM yyyy");
  return `${formattedDateString}`;
}
