export type NewsItemProps = {
  id: string
  headline: string
  content: string
}

export const newsItems: NewsItemProps[] = [
  {
    id: "newsItem-1",
    headline: "Vestibulum hendrerit mollis tincidunt",
    content:
      "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at.",
  },
]

export const getNextNewsItem = async (): Promise<NewsItemProps> =>
  new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          id: `newsItem-${newsItems.length + 1}`,
          headline: "Vestibulum hendrerit mollis tincidunt",
          content:
            "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at.",
        }),
      500
    )
  })
