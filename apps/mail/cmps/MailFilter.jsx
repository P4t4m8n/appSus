import { mailService } from '../services/mail.service.js'

const { useState, useEffect } = React

export function MailFilter({ filterBy, onSetFilterBy }) {
  const [localFilter, setLocalFilter] = useState(mailService.getDefaultFilter())

  useEffect(() => {
    onSetFilterBy(localFilter)
  }, [localFilter, onSetFilterBy])

  function handleChange({ target }) {
    const { name, value, type, checked } = target
    let newValue = type === 'checkbox' ? checked : value

    // Special handling for the 'isRead' checkbox to allow null state
    if (name === 'isRead') {
      newValue =
        localFilter.isRead === null
          ? true
          : localFilter.isRead === true
          ? false
          : null
    }

    setLocalFilter((prev) => ({
      ...prev,
      [name]: newValue,
    }))
  }

  function onSubmitFilter(ev) {
    ev.preventDefault()
    console.log('Applying filter:', localFilter) // Add this line to check the filter
    onSetFilterBy(localFilter)
  }

  return (
    <section className="mail-filter">
      <form onSubmit={onSubmitFilter}>
        <input
          value={localFilter.subject}
          onChange={handleChange}
          type="text"
          placeholder="Subject"
          name="subject"
        />

        <input
          value={localFilter.from}
          onChange={handleChange}
          type="text"
          placeholder="From"
          name="from"
        />

        <input
          value={localFilter.to}
          onChange={handleChange}
          type="text"
          placeholder="To"
          name="to"
        />

        <input
          checked={localFilter.isRead === true} // checked only if true
          onChange={handleChange}
          type="checkbox"
          name="isRead"
        />
        <label htmlFor="isRead">Is Read</label>

        <button type="submit">Apply Filters</button>
      </form>
    </section>
  )
}
