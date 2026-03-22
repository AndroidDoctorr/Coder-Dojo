import { Title, Text, Stack, Group, SimpleGrid, Table, Tabs, Accordion, Anchor, List, Badge, Paper } from '@mantine/core'
import { TRACKS } from '../../data/tracks'
import TrackCard from '../../components/TrackCard/TrackCard'
import styles from './Home.module.scss'

const SCHEDULE = [
  { week: 'Week 1', topic: 'Introduction, coding fundamentals, set up computers, HTML?' },
  { week: 'Week 2', topic: 'HTML and JS' },
  { week: 'Week 3', topic: 'Python' },
  { week: 'Week 4', topic: 'Raspberry Pi + breadboards' },
  { week: 'Week 5', topic: 'Start project' },
  { week: 'Week 6', topic: 'Finish & demo projects' },
]

const TERMINAL_COMMANDS = [
  { cmd: 'pwd',          desc: 'Print working directory — shows where you are',                   example: 'pwd' },
  { cmd: 'ls',           desc: 'List files and folders in the current directory',                  example: 'ls' },
  { cmd: 'ls -la',       desc: 'List everything, including hidden files, with details',            example: 'ls -la' },
  { cmd: 'cd',           desc: 'Change directory — move into a folder',                            example: 'cd Documents' },
  { cmd: 'cd ..',        desc: 'Go up one folder',                                                 example: 'cd ..' },
  { cmd: 'cd ~',         desc: 'Go to your home directory',                                        example: 'cd ~' },
  { cmd: 'mkdir',        desc: 'Make a new folder',                                                example: 'mkdir my-project' },
  { cmd: 'touch',        desc: 'Create a new empty file',                                          example: 'touch index.html' },
  { cmd: 'rm',           desc: 'Remove a file (careful — no undo!)',                               example: 'rm old-file.txt' },
  { cmd: 'clear',        desc: 'Clear the terminal screen',                                        example: 'clear' },
  { cmd: 'code .',       desc: 'Open the current folder in VS Code',                              example: 'code .' },
  { cmd: 'code',         desc: 'Open a specific file in VS Code',                                  example: 'code index.html' },
  { cmd: 'python',       desc: 'Run a Python file',                                                example: 'python script.py' },
  { cmd: 'python3',      desc: 'Same as above on some systems',                                    example: 'python3 script.py' },
]

const VOCAB = [
  {
    category: 'Core concepts',
    terms: [
      { term: 'Variable', def: 'A named container that stores a value. The value can change.', code: 'score = 0\nname = "Alex"' },
      { term: 'Expression', def: 'Any piece of code that produces a value.', code: '2 + 2\nscore * 10' },
      { term: 'Statement', def: 'A complete instruction that does something — assigning a variable, calling a function, running a loop.' },
      { term: 'Boolean', def: 'A value that is either True or False. Used in conditions.', code: 'is_running = True\ngame_over = False' },
    ],
  },
  {
    category: 'Control flow',
    terms: [
      { term: 'Conditional', def: 'Code that only runs if a condition is true. Uses if, else, and elif.', code: 'if score > 10:\n    print("You win!")\nelse:\n    print("Keep trying.")' },
      { term: 'For loop', def: 'Repeats a block of code a set number of times, or once for each item in a list.', code: 'for i in range(5):\n    print(i)' },
      { term: 'While loop', def: 'Repeats a block of code as long as a condition stays true.', code: 'while lives > 0:\n    play_game()' },
    ],
  },
  {
    category: 'Functions',
    terms: [
      { term: 'Function', def: 'A named, reusable block of code. You define it once and call it when needed.', code: 'def greet(name):\n    print("Hello, " + name)\n\ngreet("Alex")' },
      { term: 'Argument / Parameter', def: 'The values you pass into a function. The parameter is the name in the definition; the argument is the value you pass when calling.' },
      { term: 'Return value', def: 'What a function gives back after it runs.', code: 'def add(a, b):\n    return a + b\n\nresult = add(3, 4)  # result is 7' },
    ],
  },
  {
    category: 'Data types',
    terms: [
      { term: 'String', def: 'A piece of text. Written inside quotes.', code: 'message = "Hello, world!"' },
      { term: 'Integer / Float', def: 'int is a whole number. float is a number with a decimal.', code: 'lives = 3\nspeed = 1.5' },
      { term: 'List / Array', def: 'A collection of values stored in order.', code: 'colors = ["red", "green", "blue"]' },
      { term: 'Index', def: 'The position of an item in a list. Starts at 0, not 1.', code: 'colors[0]  # "red"\ncolors[2]  # "blue"' },
    ],
  },
  {
    category: 'General',
    terms: [
      { term: 'Bug', def: 'An error or mistake in code that causes it to behave incorrectly.' },
      { term: 'Debug', def: 'The process of finding and fixing bugs.' },
      { term: 'Comment', def: 'A note in the code that the computer ignores.', code: '# This is a comment\nscore = score + 1  # Add 1 to the score' },
      { term: 'Syntax', def: 'The rules for how code must be written. A syntax error means something was typed incorrectly.' },
      { term: 'Library / Module', def: 'A collection of pre-written code you can import and use.', code: 'from gpiozero import LED' },
    ],
  },
]

const LINKS = [
  {
    category: 'Best beginner coding websites',
    items: [
      { label: 'W3Schools: HTML Tutorial', url: 'https://www.w3schools.com/html/', desc: 'Simple, step-by-step HTML lessons with live examples.' },
      { label: 'W3Schools: CSS Tutorial', url: 'https://www.w3schools.com/css/', desc: 'Colors, fonts, borders, spacing, and layout basics.' },
      { label: 'W3Schools: JavaScript Tutorial', url: 'https://www.w3schools.com/js/', desc: 'Variables, functions, buttons, and events.' },
      { label: 'W3Schools: Python Tutorial', url: 'https://www.w3schools.com/python/', desc: 'Beginner-friendly Python syntax and examples.' },
      { label: 'Raspberry Pi Projects', url: 'https://projects.raspberrypi.org/', desc: 'Free step-by-step coding projects for kids.' },
      { label: 'Code Club Projects', url: 'https://projects.raspberrypi.org/en/codeclub', desc: 'Beginner projects for websites, games, and Python.' },
      { label: 'Code.org App Lab', url: 'https://code.org/en-US/tools/app-lab', desc: 'Build simple apps and practice JavaScript ideas.' },
      { label: 'Python.org: Python for Beginners', url: 'https://www.python.org/about/gettingstarted/', desc: 'Official Python beginner page.' },
    ],
  },
  {
    category: 'Raspberry Pi and breadboard projects',
    items: [
      { label: 'Raspberry Pi Python Projects', url: 'https://projects.raspberrypi.org/en/collections/python', desc: 'Good beginner Python projects.' },
      { label: 'Intro to Python Path', url: 'https://projects.raspberrypi.org/en/pathways/python-intro', desc: 'A structured beginner path for learning Python.' },
      { label: 'GPIO Zero Basic Recipes', url: 'https://gpiozero.readthedocs.io/en/stable/recipes.html', desc: 'Simple examples for LEDs, buttons, buzzers, and more.' },
    ],
  },
]

export default function Home() {
  return (
    <Stack gap="lg">
      <div className={styles.hero}>
        <img src={`${import.meta.env.BASE_URL}qr.png`} alt="QR Code" className={styles.qr} />
        <p className={styles.title}>Coder Dojo</p>
        <p className={styles.subtitle}>Andrew Torr — NineStar Connect &nbsp;·&nbsp; Wednesdays 2:15–4:15</p>
      </div>

      <div className={styles.section}>
        <Title order={2} mb="md" className={styles.sectionTitle}>Bonus Tracks</Title>
        <Text mb="md" c="dimmed">
          Extra paths you can follow to earn a Challenge Coin. Complete all four and earn a Gold Challenge Coin.
        </Text>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
          {TRACKS.map((track) => (
            <TrackCard key={track.id} track={track} size="lg" />
          ))}
        </SimpleGrid>
      </div>

      <div className={styles.section}>
        <Title order={2} mb="md" className={styles.sectionTitle}>Rough Schedule</Title>
        <Table striped withTableBorder>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Week</Table.Th>
              <Table.Th>Topic</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {SCHEDULE.map(({ week, topic }) => (
              <Table.Tr key={week}>
                <Table.Td fw={600}>{week}</Table.Td>
                <Table.Td>{topic}</Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </div>

      <div className={styles.section}>
        <Title order={2} mb="md" className={styles.sectionTitle}>Reference</Title>
        <Tabs defaultValue="terminal" color="#0066b3">
          <Tabs.List mb="md">
            <Tabs.Tab value="terminal">Terminal Commands</Tabs.Tab>
            <Tabs.Tab value="vocab">Vocabulary</Tabs.Tab>
            <Tabs.Tab value="links">Links</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="terminal">
            <Text size="sm" c="dimmed" mb="md">
              These work in Mac/Linux/Raspberry Pi terminals. On Windows use PowerShell or Git Bash.
              <br />
              <strong>Tip:</strong> Press ↑ to re-run your last command. Press Tab to autocomplete a filename.
            </Text>
            <Table striped withTableBorder>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Command</Table.Th>
                  <Table.Th>What it does</Table.Th>
                  <Table.Th>Example</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {TERMINAL_COMMANDS.map(({ cmd, desc, example }) => (
                  <Table.Tr key={cmd}>
                    <Table.Td><Badge variant="light" color="gray" radius="sm">{cmd}</Badge></Table.Td>
                    <Table.Td size="sm">{desc}</Table.Td>
                    <Table.Td><code>{example}</code></Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </Tabs.Panel>

          <Tabs.Panel value="vocab">
            <Accordion variant="separated">
              {VOCAB.map(({ category, terms }) => (
                <Accordion.Item key={category} value={category}>
                  <Accordion.Control fw={600}>{category}</Accordion.Control>
                  <Accordion.Panel>
                    <Stack gap="md">
                      {terms.map(({ term, def, code }) => (
                        <Paper key={term} p="sm" withBorder radius="sm">
                          <Text fw={700} size="sm" mb={4}>{term}</Text>
                          <Text size="sm" c="dimmed" mb={code ? 'xs' : 0}>{def}</Text>
                          {code && <pre className={styles.codeBlock}>{code}</pre>}
                        </Paper>
                      ))}
                    </Stack>
                  </Accordion.Panel>
                </Accordion.Item>
              ))}
            </Accordion>
          </Tabs.Panel>

          <Tabs.Panel value="links">
            <Stack gap="lg">
              {LINKS.map(({ category, items }) => (
                <div key={category}>
                  <Text fw={700} mb="sm">{category}</Text>
                  <List spacing="sm">
                    {items.map(({ label, url, desc }) => (
                      <List.Item key={label}>
                        <Anchor href={url} target="_blank" rel="noopener noreferrer" fw={600}>
                          {label}
                        </Anchor>
                        {' '}— {desc}
                      </List.Item>
                    ))}
                  </List>
                </div>
              ))}
            </Stack>
          </Tabs.Panel>
        </Tabs>
      </div>
    </Stack>
  )
}

