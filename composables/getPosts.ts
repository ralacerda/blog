export default async function (tag?: string, limit?: number) {
  const excludeDraft = process.env.NODE_ENV === "development" ? false : true;

  const query = queryContent(`/posts/`).only([
    "title",
    "tags",
    "publishDate",
    "description",
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
}
