export const newsItems = [
  {
    id: "newsItem-1",
    headline: "Vestibulum hendrerit mollis tincidunt",
    content:
      "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at.",
  },
]

export const getNextNewsItem = async () =>
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
