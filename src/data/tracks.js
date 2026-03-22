export const TRACKS = [
  {
    id: 'gaming',
    name: 'Gaming Track',
    emoji: '🎮',
    tagline: 'Build small playable games in Godot',
    color: '#dc2626',
    lightBg: '#fff1f2',
    borderColor: '#fca5a5',
  },
  {
    id: 'data',
    name: 'Data Track',
    emoji: '📊',
    tagline: 'Ask questions with data using SQL',
    color: '#7c3aed',
    lightBg: '#f5f3ff',
    borderColor: '#c4b5fd',
  },
  {
    id: 'robot',
    name: 'Robot Track',
    emoji: '🤖',
    tagline: 'Control real hardware with Python',
    color: '#16a34a',
    lightBg: '#f0fdf4',
    borderColor: '#86efac',
  },
  {
    id: 'web',
    name: 'Web Track',
    emoji: '🌐',
    tagline: 'Build websites with HTML, CSS, and JavaScript',
    color: '#2563eb',
    lightBg: '#eff6ff',
    borderColor: '#93c5fd',
  },
]

export const getTrack = (id) => TRACKS.find((t) => t.id === id)
