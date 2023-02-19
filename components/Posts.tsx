import Link from "next/link";
const Posts = ({
  records,
}: {
  records: {
    [x: string]: any;
    title: string;
    slug: string;
    views: number;
  };
}) => {
  var posts = records;
  var formatDate = (dateString: String) => {
    const day = dateString.substr(0, 2);
    const month = dateString.substr(2, 2);
    const year = dateString.substr(4, 4);
    const date = new Date(`${year}-${month}-${day}`);
    return date.toISOString().slice(0, 10);
  };
  posts = posts.sort((a: { date: string }, b: { date: string }) => {
    return (
      new Date(formatDate(b.date)).getTime() -
      new Date(formatDate(a.date)).getTime()
    );
  });

  return (
    <div>
      <h3 className="font-semibold">Posts</h3>
      <ul>
        {posts.map((post: { views: number; slug: string; title: string }) => (
          <li key={post.slug} className="py-2">
            <Link
              className="font-light text-stone-200 hover:text-stone-300 underline underline-offset-4"
              href={`/post/${post.slug}`}
            >
              - {post.title} [
              {post.views.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
              views]
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
