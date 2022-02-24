import React from "react"
import { useParams } from "react-router-dom"

const SinglePage = () => {

  let param = useParams()

  const aboutData = [
    {
      slug: "about-app",
      title: "About the App",
      description:
        "In this app, you can add, delete, submit and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items.",
    },
    {
      slug: "about-author",
      title: "About the Author",
      description:
        "This app was developed by Abdulrahman Alzahrani, just started to learn react. I followed tutorial in https://ibaslogic.com which i recommand to new comers.",
    },
  ]


  let title = aboutData.map(page => {
    if(param.slug === page.slug)
      return page.title
  })
  let description = aboutData.map(page => {
    if(page.slug === param.slug)
      return page.description
  })

  return (
    <div className="main__content">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

export default SinglePage