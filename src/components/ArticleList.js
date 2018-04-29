import React from 'react'
import Article from "./Article";
export default function ArticleList({articles}) {
  const articleElements = articles.map(article =>
    <li key={article.id}><Article article={article}/></li>
  )
  return (
    <div>
      <ul>
        {articleElements}
      </ul>
    </div>
  )

}