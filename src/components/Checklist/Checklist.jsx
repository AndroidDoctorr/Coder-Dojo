import { useState } from 'react'
import { Stack, Checkbox, Text } from '@mantine/core'

// Persists checked state in localStorage using storageKey
export default function Checklist({ items, storageKey, color }) {
  const [checked, setChecked] = useState(() => {
    try {
      const saved = localStorage.getItem(storageKey)
      return saved ? JSON.parse(saved) : items.map(() => false)
    } catch {
      return items.map(() => false)
    }
  })

  const toggle = (i) => {
    const next = checked.map((v, idx) => (idx === i ? !v : v))
    setChecked(next)
    try {
      localStorage.setItem(storageKey, JSON.stringify(next))
    } catch {
      // localStorage unavailable — just use state
    }
  }

  return (
    <Stack gap="xs">
      {items.map((item, i) => (
        <Checkbox
          key={i}
          checked={checked[i]}
          onChange={() => toggle(i)}
          color={color}
          label={
            <Text size="sm" td={checked[i] ? 'line-through' : undefined} c={checked[i] ? 'dimmed' : undefined}>
              {item}
            </Text>
          }
        />
      ))}
    </Stack>
  )
}
