
const BlogPosts = [
  {
    id: 1,
    title: "Article 1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Article 2",
    content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    title: "Article 3",
    content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const ArticleContainer = ({ title, content }) => (
  <div className="bg-white border-2 border-[#333] rounded-lg p-4 mb-4">
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    <p className="text-black">{content}</p>
  </div>
);

// overlay that scrolls each article and adjusts address bar based on intersection
const ArticleViewer = ({ title, content }) => (
  <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#333]/50 p-4 ">
    <article className="relative bg-white border-2 border-[#333] rounded-lg p-4 mx-auto w-full max-w-md">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-black prose">{content}</p>
      
    </article>
  </div>
);

export const HomePage = () => (
  <div className="p-4 flex flex-col">
    {BlogPosts.map((post) => (
      <ArticleContainer key={post.id} title={post.title} content={post.content} />
    ))}
    
    <ArticleViewer title={BlogPosts[0].title} content={BlogPosts[0].content} />
  </div>
);
