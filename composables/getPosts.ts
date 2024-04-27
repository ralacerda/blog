export default async function (tag?: string, limit?: number) {
  const query = queryContent(`/posts/`).only([
    "title",
    "tags",
    "publishDate",
    "description",
    "_path",
  ]);

  query.where({ draft: false });

  if (tag) {
    query.where({ tags: { $contains: tag } });
  }

  if (limit) {
    query.limit(5);
  }

  query.sort({ publishDate: -1 });

  return query.find();
}
