class Chore {
  constructor(chore, adapter) {
    this.title = chore.title
    this.priority = chore.priority
    this.duration = chore.duration
    this.id = chore.id
    this.adapter = adapter
  }

  renderCard() {
    const choreCard = document.createElement('div')
    choreCard.classList.add('chore-card')
    choreCard.innerHTML = `
    <button class='delete-button' data-id=${this.id}>x</button>
    <h3> ${this.title} </h3>
    <p> Duration: ${this.duration} </p>
    <input value="${this.priority}" />`

    const deletebtn = choreCard.querySelector('button')
    deletebtn.addEventListener('click', (e) => this.removeCard(e))

    const inputTag = choreCard.querySelector('input')
    inputTag.addEventListener('blur', (e) => this.updatePriority(e))

    const choreList = document.querySelector("#chore-list")
    choreList.append(choreCard)

    return choreCard
  }

  removeCard(e) {
    this.adapter.deleteChore(this.id)
      .then(res => {
        e.target.parentElement.remove()
      })
  }

  updatePriority(e) {
    const newPriority = e.target.value
    const body = {priority: newPriority}
    this.adapter.patchChore(this.id, body)
  }
}
