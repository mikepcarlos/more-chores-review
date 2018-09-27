const URL = 'http://localhost:3000/chores'

document.addEventListener('DOMContentLoaded', () => {
  const adapter = new Adapter(URL)
  adapter.get().then(choreList => {
    choreList.forEach(chore => {
      const newChore = new Chore(chore, adapter)
      newChore.renderCard()
    })
  })

  const form = document.querySelector("#new-chore-form")

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const chore = {
      title: e.target.title.value,
      duration: e.target.duration.value,
      priority: e.target.priority.value
    }

    adapter.postChore(chore).then(newChore => {
      const postedChore = new Chore(newChore, adapter)
      postedChore.renderCard()
    })
  })
})
