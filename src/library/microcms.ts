//SDK利用準備
import { createClient, MicroCMSQueries } from "microcms-js-sdk";
const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

//型定義
export type Blog = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
};
export type BlogResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Blog[];
};

//APIの呼び出し
export const getBlogs = async (queries?: MicroCMSQueries) => {
  return await client.get<BlogResponse>({ endpoint: "note", queries });
};
export const getBlogDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail<Blog>({
    endpoint: "note",
    contentId,
    queries,
  });
  
};

// microCMSへAPIリクエスト
// export const getStaticProps: GetStaticProps<Props, Params> = async (
//   context: GetStaticPropsContext<Params, PreviewData>,
// ) => {
//   const id = context.params?.id;
//   const blog = await client.get({ endpoint: 'blogs', contentId: id });

//   // custom Contentの文字列を全て結合
//   let all_content: string = '';

//   //カスタムフィールドの繰り返しの分だけ結合
//   blog.content.map((content: content) => {
//     all_content += content.richEditor;
//     all_content += content.html;
//   });