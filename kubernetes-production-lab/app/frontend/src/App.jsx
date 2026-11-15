
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [expenses, setExpenses] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)

  const [form, setForm] = useState({
    cloud_provider: 'GCP',
    service_name: '',
    amount: '',
    currency: 'INR',
    description: ''
  })

  // Fetch expenses from backend
  const fetchExpenses = () => {
    setLoading(true)

    fetch('http://localhost:8000/expenses/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch expenses')
        }
        return response.json()
      })
      .then(data => setExpenses(data))
      .catch(error => setError(error.message))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    fetchExpenses()
  }, [])

  // Update form values
  const handleChange = (event) => {
    const { name, value } = event.target

    setForm({
      ...form,
      [name]: value
    })
  }

  // Submit expense to backend
  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')

    setSubmitting(true)

    try {
      const response = await fetch('http://localhost:8000/expenses/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...form,
          amount: Number(form.amount)
        })
      })

      if (!response.ok) {
        throw new Error('Failed to create expense')
      }

      // Clear form after successful submission
      setForm({
        cloud_provider: 'GCP',
        service_name: '',
        amount: '',
        currency: 'INR',
        description: ''
      })

      // Refresh expense list
      fetchExpenses()

    } catch (error) {
      setError(error.message)
    } finally {
      setSubmitting(false)
    }
  }

  const total = expenses.reduce(
    (sum, expense) => sum + Number(expense.amount),
    0
  )

  return (
    <div>
      <header>
        <h1>CloudOps Expense Tracker</h1>
        <p>Monitor your cloud spending</p>
      </header>

      <main>
        <section>
          <h2>Total Cloud Spending</h2>
          <h3>₹ {total.toFixed(2)}</h3>
        </section>

        <section>
          <h2>Add Expense</h2>

          <form onSubmit={handleSubmit}>
            <div>
              <label>Cloud Provider</label>
              <select
                name="cloud_provider"
                value={form.cloud_provider}
                onChange={handleChange}
              >
                <option value="GCP">GCP</option>
                <option value="AWS">AWS</option>
                <option value="Azure">Azure</option>
              </select>
            </div>

            <div>
              <label>Service Name</label>
              <input
                name="service_name"
                value={form.service_name}
                onChange={handleChange}
                placeholder="Cloud Run"
                required
              />
            </div>

            <div>
              <label>Amount</label>
              <input
                type="number"
                name="amount"
                value={form.amount}
                onChange={handleChange}
                placeholder="1500"
                min="0.01"
                step="0.01"
                required
              />
            </div>

            <div>
              <label>Currency</label>
              <select
                name="currency"
                value={form.currency}
                onChange={handleChange}
              >
                <option value="INR">INR</option>
                <option value="USD">USD</option>
              </select>
            </div>

            <div>
              <label>Description</label>
              <input
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Monthly Cloud Run cost"
              />
            </div>

            <button type="submit" disabled={submitting}>
              {submitting ? 'Adding...' : 'Add Expense'}
            </button>
          </form>
        </section>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <section>
          <h2>Recent Expenses</h2>

          {loading ? (
            <p>Loading expenses...</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Provider</th>
                  <th>Service</th>
                  <th>Amount</th>
                  <th>Currency</th>
                </tr>
              </thead>

              <tbody>
                {expenses.map(expense => (
                  <tr key={expense.id}>
                    <td>{expense.cloud_provider}</td>
                    <td>{expense.service_name}</td>
                    <td>{expense.amount}</td>
                    <td>{expense.currency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>
      </main>
    </div>
  )
}

export default App
