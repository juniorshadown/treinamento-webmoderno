function Pessoa() {
    this.idade = 1

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 60)
}

new Pessoa