import { useState } from "react"

const NewsItem = ({ headline: initialHeadline, content }) => {
  const headline = initialHeadline
  const tag = null

  const tagOptions = ["", "World", "Finance", "Sport", "Gossip"]

  return (
    <div className="row mb-3">
      <div className="col-8">
        <h4>
          {headline} <span className="badge bg-info">{tag}</span>
        </h4>
        <div className="mb-2">{content}</div>
      </div>
      <div className="card col-4 p-3">
        <div className="form-group mb-3">
          <input className="form-control" placeholder="Edit Headline" />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="tag-select">
            Select Tag
          </label>
          <select className="form-select ml-2" id="tag-select">
            {tagOptions.map((value) => (
              <option key={value}>{value}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

export default NewsItem
