import { Title, Text, Stack, SimpleGrid, Paper, List } from '@mantine/core'
import { TRACKS } from '../../data/tracks'
import TrackCard from '../../components/TrackCard/TrackCard'
import styles from './BonusTracks.module.scss'

const HOW_IT_WORKS = [
  {
    level: '🥉 Bronze',
    color: '#92400e',
    bg: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
    shadow: '0 2px 10px rgba(146,64,14,0.15)',
    desc: 'Learn the basics and finish your first small working project.',
  },
  {
    level: '🥈 Silver',
    color: '#334155',
    bg: 'linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 100%)',
    shadow: '0 2px 10px rgba(51,65,85,0.12)',
    desc: 'Combine ideas and build something more interactive.',
  },
  {
    level: '🥇 Gold',
    color: '#78350f',
    bg: 'linear-gradient(135deg, #fffbeb 0%, #fef08a 100%)',
    shadow: '0 2px 10px rgba(120,53,15,0.15)',
    desc: 'Finish a stronger project that feels complete and that you can explain.',
  },
]

const COUNTS_AS_PROGRESS = {
  does: [
    'Writing code yourself',
    'Changing a tutorial project and making it your own',
    'Fixing bugs',
    'Building something that works',
    'Explaining what part of your code does',
    'Saving your work and showing it to a teacher or mentor',
  ],
  doesNot: [
    'Only reading a tutorial',
    'Only watching a video',
    'Copying code without understanding any of it',
    'Saying you finished without showing the project',
  ],
}

export default function BonusTracks() {
  return (
    <Stack gap="lg">
      <div className={styles.section}>
        <Title order={1} mb="xs" className={styles.pageTitle}>Bonus Tracks</Title>
        <Text c="dimmed" size="lg" mb="md">
          Extra paths you can follow outside the main Dojo lessons. Build real things, earn coins, and learn skills that matter.
        </Text>
        <Text mb="lg">
          You do <strong>not</strong> finish a track just by reading about it. You finish by{' '}
          <strong>making something, testing it, fixing problems, and showing your work</strong>.
        </Text>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
          {TRACKS.map((track) => (
            <TrackCard key={track.id} track={track} size="lg" />
          ))}
        </SimpleGrid>
      </div>

      <div className={styles.section}>
        <Title order={2} mb="md" className={styles.sectionTitle}>How progress works</Title>
        <Text mb="lg" c="dimmed">
          Each track is built around <strong>small wins</strong>. Most tracks have three levels:
        </Text>
        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="md">
          {HOW_IT_WORKS.map(({ level, color, bg, shadow, desc }) => (
            <div key={level} className={styles.levelCard} style={{ background: bg, boxShadow: shadow }}>
              <Text fw={800} size="xl" mb="xs" style={{ color }}>{level}</Text>
              <Text size="sm" style={{ color }}>{desc}</Text>
            </div>
          ))}
        </SimpleGrid>
      </div>

      <div className={styles.section}>
        <Title order={2} mb="md" className={styles.sectionTitle}>What counts as real progress?</Title>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
          <Paper p="md" radius="md" style={{ background: '#f0fdf4', border: '1.5px solid #86efac' }}>
            <Text fw={700} mb="sm" style={{ color: '#15803d' }}>✅ These count</Text>
            <List spacing="xs" size="sm">
              {COUNTS_AS_PROGRESS.does.map((item) => <List.Item key={item}>{item}</List.Item>)}
            </List>
          </Paper>
          <Paper p="md" radius="md" style={{ background: '#fff1f2', border: '1.5px solid #fca5a5' }}>
            <Text fw={700} mb="sm" style={{ color: '#dc2626' }}>❌ These don't count on their own</Text>
            <List spacing="xs" size="sm">
              {COUNTS_AS_PROGRESS.doesNot.map((item) => <List.Item key={item}>{item}</List.Item>)}
            </List>
          </Paper>
        </SimpleGrid>
        <Text size="sm" c="dimmed" mt="md">
          Using tutorials is fine — real programmers do it all the time. What matters is that you can show what you built and explain part of how it works.
        </Text>
      </div>

      <div className={styles.section}>
        <Title order={2} mb="md" className={styles.sectionTitle}>Sign-off and coins</Title>
        <Text mb="sm">
          When you finish a milestone, show your work to a teacher or mentor. They'll ask a few simple questions and sign off. Once that's done, a coin gets prepared for you.
        </Text>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="sm" mt="md">
          <Paper p="md" radius="md" style={{ background: 'linear-gradient(135deg, #fffbeb, #fef3c7)', border: '1.5px solid #fcd34d' }}>
            <Text fw={700}>🪙 Complete any track</Text>
            <Text size="sm" c="dimmed">Earn a Challenge Coin</Text>
          </Paper>
          <Paper p="md" radius="md" style={{ background: 'linear-gradient(135deg, #fffbeb, #fef08a)', border: '1.5px solid #facc15' }}>
            <Text fw={700}>🥇 Complete all four tracks</Text>
            <Text size="sm" c="dimmed">Earn a Gold Challenge Coin</Text>
          </Paper>
        </SimpleGrid>
        <Text size="sm" c="dimmed" mt="md">No sign-off, no coin. Keeps it fair.</Text>
      </div>
    </Stack>
  )
}
