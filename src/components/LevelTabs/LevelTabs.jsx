import { Tabs, Text, Stack, List, Paper, Badge, SimpleGrid, Code, ScrollArea } from '@mantine/core'
import Checklist from '../Checklist/Checklist'
import styles from './LevelTabs.module.scss'

const LEVELS = [
  { key: 'bronze', label: '🥉 Bronze', color: '#b45309' },
  { key: 'silver', label: '🥈 Silver', color: '#64748b' },
  { key: 'gold',   label: '🥇 Gold',   color: '#d97706' },
]

export default function LevelTabs({ levels, trackId, trackColor }) {
  return (
    <Tabs defaultValue="bronze" color={trackColor}>
      <Tabs.List mb="lg">
        {LEVELS.map(({ key, label }) => (
          <Tabs.Tab key={key} value={key} className={styles.tab}>
            {label}
          </Tabs.Tab>
        ))}
      </Tabs.List>

      {LEVELS.map(({ key, color }) => {
        const level = levels[key]
        if (!level) return null
        const storageKey = `checklist-${trackId}-${key}`

        return (
          <Tabs.Panel key={key} value={key}>
            <Stack gap="lg">
              {/* Goal */}
              <Paper p="md" radius="md" style={{ background: '#f8fafc', borderLeft: `4px solid ${color}` }}>
                <Text fw={700} size="lg">{level.goal}</Text>
              </Paper>

              {/* Practice */}
              <div>
                <Text fw={600} mb="xs">Try it</Text>
                <List spacing="xs" size="sm" icon={<span style={{ color: trackColor }}>→</span>}>
                  {level.practice.map((item, i) => <List.Item key={i}>{item}</List.Item>)}
                </List>
              </div>

              {/* Code examples */}
              {level.codeExamples?.length > 0 && (
                <div>
                  <Text fw={600} mb="xs">Example code</Text>
                  <Stack gap="sm">
                    {level.codeExamples.map((ex, i) => (
                      <div key={i}>
                        <Text size="xs" c="dimmed" mb={4}>{ex.label}</Text>
                        <ScrollArea>
                          <Code block>{ex.code}</Code>
                        </ScrollArea>
                      </div>
                    ))}
                  </Stack>
                </div>
              )}

              {/* Checkpoints */}
              <div>
                <Text fw={600} mb="xs">✅ Checkpoints <Text span size="xs" c="dimmed" fw={400}>(progress saves automatically)</Text></Text>
                <Checklist
                  items={level.checkpoints}
                  storageKey={storageKey}
                  color={trackColor}
                />
              </div>

              {/* Project ideas */}
              <div>
                <Text fw={600} mb="xs">⚡ Build something</Text>
                <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xs">
                  {level.miniProjects.map((idea, i) => (
                    <Badge key={i} variant="light" color="gray" size="lg" radius="sm" className={styles.ideaBadge}>
                      {idea}
                    </Badge>
                  ))}
                </SimpleGrid>
              </div>
            </Stack>
          </Tabs.Panel>
        )
      })}
    </Tabs>
  )
}
