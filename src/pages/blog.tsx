import Head from "next/head";

import Container from "../components/blog/container";
import HeroPost from "../components/blog/hero-post";
import Intro from "../components/blog/intro";
import Layout from "../components/blog/layout";
import MoreStories from "../components/blog/more-stories";
import Post from "../interfaces/post";
import { getAllPosts } from "../utils/api";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <title>Blog | Akademia bliskich relacji</title>
        </Head>
        <Container>
          <div className="max-w-screen-lg mx-auto">
            <Intro />
            {heroPost && (
              <HeroPost
                title={heroPost.title}
                coverImage={heroPost.coverImage}
                date={heroPost.date}
                author={heroPost.author}
                slug={heroPost.slug}
                excerpt={heroPost.excerpt}
              />
            )}
          </div>
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
