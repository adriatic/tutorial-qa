// web/src/components/ArticlesCell/ArticlesCell.js

export const QUERY = gql`
  query BlogPostsQuery {
    articles: posts {
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ articles }) => {
  return articles.map((article) => (
    <article key={article.id}>
      <header>
        <h2>{article.title}</h2>
      </header>
      <p>{article.body}</p>
      <div>Posted at: {article.createdAt}</div>
    </article>
  ))
}
