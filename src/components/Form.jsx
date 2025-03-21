/* eslint-disable linebreak-style */
import React from 'react'
import TextInput from './TextInput'
import MultiSelect from './MultiSelect'
import Options from './Options'
import Checkbox from './Checkbox'
import Button from './Button'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      languages: [],
      subscribed: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleMultiSelect = this.handleMultiSelect.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const { target } = event
    const { name } = target
    const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({ [name]: value }, () => {
      console.log(name)
    })
  }

  handleMultiSelect(event) {
    this.setState({ [event.target.name]: [...event.target.selectedOptions].map((o) => o.value) })
  }

  handleSubmit() {
    const {
      firstname,
      lastname,
      email,
      languages,
      subscribed,
    } = this.state
    const subscribedText = subscribed ? 'Yes' : 'No'
    alert(`Firstname: ${firstname}, Lastname: ${lastname}, Email: ${email}, Language: ${languages}, Subscribed: ${subscribedText}`)
  }

  render() {
    const languageList = ['English', 'Spanish', 'French', 'German', 'Japanese']
    const {
      firstname,
      lastname,
      email,
      languages,
      subscribed,
    } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <TextInput
          labelFor="firstname"
          label="Firstname"
          className="form-control"
          type="text"
          name="firstname"
          id="firstname"
          value={firstname}
          handleChange={this.handleChange}
        />
        <TextInput
          labelFor="lastname"
          label="Lastname"
          className="form-control"
          type="text"
          name="lastname"
          id="lastname"
          value={lastname}
          handleChange={this.handleChange}
        />
        <TextInput
          labelFor="email"
          label="E-mail"
          className="form-control"
          type="email"
          name="email"
          id="email"
          value={email}
          handleChange={this.handleChange}
        />
        <MultiSelect
          labelFor="languages"
          label="Languages"
          className="form-control mb-3"
          value={languages}
          handleChange={this.handleMultiSelect}
        >
          <Options options={languageList} />
        </MultiSelect>
        <Checkbox
          labelFor="subscribed"
          label="Subscribe"
          checked={subscribed}
          className="form-check mb-3 text-right"
          handleChange={this.handleChange}
        />
        <Button
          type="submit"
          className="btn btn-primary form-control"
        >
          Submit
        </Button>

      </form>
    )
  }
}

export default Form
