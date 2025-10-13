import { slugify } from "@/lib/textConverter";

const taxonomyFilter = (posts: any[], name: string, key: string) =>
  posts.filter((post) => {
    const values = post?.data?.[name];
    if (!Array.isArray(values)) {
      return false;
    }
    return values.map((value: string) => slugify(value)).includes(key);
  });

export default taxonomyFilter;
