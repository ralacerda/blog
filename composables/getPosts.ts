export default async function (
  excludeDraft: boolean,
  tag?: string,
  limit?: number
) {
  const { data } = await useAsyncData(() => {
    const query = queryContent(`/posts/`).only([
      "title",
      "tags",
      "publishDate",
      "shortDescription",
      "_path",
    ]);

    if (excludeDraft) {
      query.where({ draft: false });
    }

    if (tag) {
      query.where({ tags: { $contains: tag } });
    }

    if (limit) {
      query.limit(5);
    }

    return query.find();
  });
  return data;
}
