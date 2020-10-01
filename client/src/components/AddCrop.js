import React, { Component } from 'react'
import { addCrop } from './UserFunctions'

class AddCrop extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      phone: '',
      village:'',
      district:'',
      state:'',
      crop:'',
      soil:'',
      area:'',
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

    const newCrop = {
      email: this.state.email,
      password: this.state.password,
      phone: this.state.phone,
      village: this.state.village,
      district: this.state.district,
      state: this.state.state,
      crop: this.state.crop,
      soil: this.state.soil,
      area: this.state.area
    }

    addCrop(newCrop).then(res => {
      this.props.history.push(`/profile`)
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Crop Details</h1>
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
                <label htmlFor="name">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  placeholder="Enter Phone Number"
                  value={this.state.phone}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Village</label>
                <input
                  type="text"
                  className="form-control"
                  name="village"
                  placeholder="Enter Your Village"
                  value={this.state.village}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">District</label>
                <input
                  type="text"
                  className="form-control"
                  name="district"
                  placeholder="Enter Your District"
                  value={this.state.district}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">State</label>
                <input
                  type="text"
                  className="form-control"
                  name="state"
                  placeholder="Enter Your State"
                  value={this.state.state}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Crop</label>
                <input
                  type="text"
                  className="form-control"
                  name="crop"
                  placeholder="Enter Your Crop Type"
                  value={this.state.crop}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Soil</label>
                <input
                  type="text"
                  className="form-control"
                  name="soil"
                  placeholder="Enter Your Soil Type"
                  value={this.state.soil}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Area</label>
                <input
                  type="text"
                  className="form-control"
                  name="area"
                  placeholder="Enter Your Field Area"
                  value={this.state.area}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Submit!
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default AddCrop