// set não aceita repetiçoes indexadas
const times = new Set()
times.add('vasco')
times.add('Sao paulo').add('Palmeiras').add('corinthians')
times.add('flamengo')
times.add('vasco')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('vasco'))
times.delete('flamengo')
console.log(times.has('flamengo'))