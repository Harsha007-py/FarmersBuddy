import React, { Component } from 'react'
import { query } from './UserFunctions'

class Query extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      phone: '',
      query:'',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const newQuery = {
      email: this.state.email,
      phone: this.state.phone,
      crop: this.state.crop,
      query: this.state.query
    }

    query(newQuery).then(res => {
      this.props.history.push(`/profile`)
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Enter Your Query</h1>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  placeholder="Enter your Phone Number"
                  value={this.state.phone}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Crop</label>
                <input
                  type="text"
                  className="form-control"
                  name="crop"
                  placeholder="Enter your Crop Type"
                  value={this.state.crop}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Query</label>
                <input
                  type="textarea"
                  rows="4"
                  cols="50"
                  className="form-control"
                  name="crop"
                  placeholder="Enter your Query"
                  value={this.state.query}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Query!
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Query