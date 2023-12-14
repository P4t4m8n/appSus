import { mailService } from '../services/mail.service.js'

const { useState, useEffect } = React

export function MailFilter({ filterBy, onSetFilterBy }) {
  const [localFilter, setLocalFilter] = useState(mailService.getDefaultFilter())

  useEffect(() => {
    onSetFilterBy(localFilter)
  }, [localFilter, onSetFilterBy])

  function handleChange({ target }) {
    const { name, value } = target
    setLocalFilter((prev) => ({
      ...prev,
      [name]: value,
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
          value={localFilter.body}
          onChange={handleChange}
          type="text"
          placeholder="Body"
          name="body"
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

        <select
          name="isRead"
          value={localFilter.isRead}
          onChange={handleChange}
        >
          <option value="">All</option>
          <option value="true">Read</option>
          <option value="false">Unread</option>
        </select>

        <button type="submit">Apply Filters</button>
      </form>
    </section>
  )
}
