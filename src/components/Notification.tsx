import { useEffect, useState } from 'react'

const names = [
  'Ana Paula', 'Carlos Silva', 'Fernanda Dias', 'Lucas Souza', 'Juliana Rocha',
  'Marcos Lima', 'Isabela Martins', 'João Vitor', 'Amanda Nunes', 'Felipe Gomes'
]

function getRandomName() {
  return names[Math.floor(Math.random() * names.length)]
}

function getRandomValue() {
  const value = Math.random() * (632 - 82) + 82
  return value.toFixed(2).replace('.', ',') // ex: "412,56"
}

export default function Notification() {
  const [visible, setVisible] = useState(true)
  const [name, setName] = useState(getRandomName())
  const [value, setValue] = useState(getRandomValue())

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setName(getRandomName())
        setValue(getRandomValue())
        setVisible(true)
      }, 500) // Tempo para esconder e trocar os dados
    }, 7000) // A cada 7 segundos

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed bottom-5 left-5 z-50">
      {visible && (
        <div className="flex items-center gap-3 p-4 rounded-lg bg-green-100 text-green-800 shadow animate-fade-in-out">
          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" strokeWidth="2"
            viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <div>
            <p className="font-semibold">Saque realizado!</p>
            <p>{name} recebeu <strong>R$ {value}</strong></p>
          </div>
        </div>
      )}
    </div>
  )
}
