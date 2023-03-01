export const prevNextPost = (allSlugs, currentSlug) => {
  const numberOfPosts = allSlugs.length;

  //全スラッグの配列の中から現在のスラッグと等しい物のインデックス番号を取得
  const index = allSlugs.findIndex(({ slug }) => slug === currentSlug);
  console.log(index);

  const prevPost =
    index + 1 === numberOfPosts ? { title: "", slug: "" } : allSlugs[index + 1];
  console.log(prevPost);
  const nextPost =
    index - 1 === 0 ? { title: "", slug: "" } : allSlugs[index - 1];
  console.log(nextPost);

  return [prevPost, nextPost];
};
