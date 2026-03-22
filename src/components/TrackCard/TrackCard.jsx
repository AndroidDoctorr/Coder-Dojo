import { Card, Text, Group } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import styles from './TrackCard.module.scss'

export default function TrackCard({ track, size = 'md' }) {
  const navigate = useNavigate()
  const isLarge = size === 'lg'

  return (
    <Card
      className={styles.card}
      style={{ borderColor: track.borderColor, '--track-color': track.color, '--track-bg': track.lightBg }}
      onClick={() => navigate(`/bonus-tracks/${track.id}`)}
      withBorder
    >
      <div className={styles.accent} style={{ background: track.color }} />
      <Group gap="sm" align="flex-start">
        <Text className={styles.emoji} style={{ fontSize: isLarge ? '2.5rem' : '1.75rem' }}>
          {track.emoji}
        </Text>
        <div className={styles.content}>
          <Text className={styles.name} style={{ fontSize: isLarge ? '1.2rem' : '1rem', color: track.color }}>
            {track.name}
          </Text>
          <Text className={styles.tagline} size={isLarge ? 'sm' : 'xs'}>
            {track.tagline}
          </Text>
        </div>
      </Group>
    </Card>
  )
}
