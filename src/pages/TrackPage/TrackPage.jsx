import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Title, Text, Stack, List, Paper, SimpleGrid, Anchor, Button, Group, Badge, Accordion } from '@mantine/core'
import { getTrack } from '../../data/tracks'
import LevelTabs from '../../components/LevelTabs/LevelTabs'
import styles from './TrackPage.module.scss'

const contentModules = {
  gaming: () => import('../../data/content/gaming.js'),
  data:   () => import('../../data/content/data-track.js'),
  robot:  () => import('../../data/content/robot.js'),
  web:    () => import('../../data/content/web.js'),
}

export default function TrackPage() {
  const { trackId } = useParams()
  const navigate = useNavigate()
  const track = getTrack(trackId)
  const [content, setContent] = useState(null)

  useEffect(() => {
    const loader = contentModules[trackId]
    if (!loader) return
    loader().then((mod) => setContent(mod.default))
  }, [trackId])

  if (!track) {
    return (
      <Stack align="center" gap="md" py="xl">
        <Text size="xl">Track not found.</Text>
        <Button onClick={() => navigate('/bonus-tracks')}>Back to Bonus Tracks</Button>
      </Stack>
    )
  }

  if (!content) return null

  return (
    <Stack gap="xl">
      {/* Header */}
      <div className={styles.header} style={{ borderColor: track.borderColor, background: track.lightBg }}>
        <div className={styles.headerAccent} style={{ background: track.color }} />
        <Group gap="md" align="center">
          <Text className={styles.emoji}>{track.emoji}</Text>
          <div>
            <Title order={1} style={{ color: track.color, lineHeight: 1.1 }}>{track.name}</Title>
            <Text c="dimmed" size="lg">{track.tagline}</Text>
            <Text size="sm" mt={4} fs="italic" c="dimmed">{content.goodFor}</Text>
          </div>
        </Group>
      </div>

      {/* Background context — collapsed by default so it doesn't block the levels */}
      {content.context && (
        <Accordion variant="separated" chevronPosition="right">
          <Accordion.Item value="context">
            <Accordion.Control>
              <Text fw={600} size="sm">{content.context.title}</Text>
            </Accordion.Control>
            <Accordion.Panel>
              <Text size="sm" mb="sm">{content.context.body}</Text>
              <List spacing="xs" size="sm">
                {content.context.points.map((p) => <List.Item key={p}>{p}</List.Item>)}
              </List>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      )}

      {/* Levels */}
      <div className={styles.section}>
        <LevelTabs levels={content.levels} trackId={trackId} trackColor={track.color} />
      </div>

      {/* Resources */}
      <div className={styles.section}>
        <Title order={3} mb="sm" c="#022F6C">Resources</Title>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xs">
          {content.resources.map(({ label, url }) => (
            <Anchor key={label} href={url} target="_blank" rel="noopener noreferrer" size="sm">
              {label}
            </Anchor>
          ))}
        </SimpleGrid>
      </div>

      {/* Optional advanced section (Web track only) */}

      {content.advanced && (
        <Paper p="md" withBorder radius="md" style={{ borderColor: '#93c5fd', background: '#eff6ff' }}>
          <Badge color="blue" variant="light" mb="sm">Optional — after you finish the main track</Badge>
          <Text fw={700} mb="xs">{content.advanced.title}</Text>
          <Text size="sm" mb="sm">{content.advanced.body}</Text>
          <List spacing="xs" size="sm">
            {content.advanced.items.map((item) => <List.Item key={item}>{item}</List.Item>)}
          </List>
        </Paper>
      )}

      <Group>
        <Button variant="light" onClick={() => navigate('/bonus-tracks')}>
          ← Back to Bonus Tracks
        </Button>
      </Group>
    </Stack>
  )
}
