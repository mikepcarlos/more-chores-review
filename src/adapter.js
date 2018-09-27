class Adapter {
  constructor(baseURL) {
    this.baseURL = baseURL
  }

  get(path){
    return fetch(this.baseURL).then(res => res.json())
  }

  postChore(chore) {
    return fetch(this.baseURL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(chore)
    }).then(res => res.json())
  }

  deleteChore(id) {
    return fetch(`${this.baseURL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(res => res.json())
  }

  patchChore(id, value) {
    return fetch(`${this.baseURL}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(value)
    }).then(res => res.json())
  }
}
