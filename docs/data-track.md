<h1 style="color: #7c3aed;">Data Track</h1>

<div style="background: #f5f3ff; border-left: 4px solid #7c3aed; padding: 1em 1.25em; border-radius: 0 6px 6px 0; margin-bottom: 1.5em;">

Welcome to the **Data Track**.

This track is about learning how to **ask questions with data**.

You will learn how tables work, how to look up information, how to filter results, and how to solve problems using **SQL**.

If you like mysteries, patterns, sorting things, or finding answers, this track is probably for you.

</div>

---

<h2 style="color: #7c3aed; border-bottom: 2px solid #c4b5fd; padding-bottom: 0.25em;">What you will do in this track</h2>

In this track, you will:
- learn what a database is
- read and write simple SQL queries
- search through tables for useful information
- solve the **SQL Murder Mystery**
- make your own small database project
- show your work to a teacher or mentor

You do **not** need to become an expert.
You do need to show that you can use data to answer real questions.

---

<h2 style="color: #7c3aed; border-bottom: 2px solid #c4b5fd; padding-bottom: 0.25em;">What counts as progress?</h2>

Progress in this track should happen in **small steps**.

You are not waiting until the very end to prove you learned something. You should be able to complete small checkpoints as you go.

There are three levels:
- **Bronze** - Learn what tables and simple queries are.
- **Silver** - Use SQL to answer harder questions and solve a real puzzle.
- **Gold** - Build your own small data project and explain it.

Each level has:
- ideas to learn
- things to practice
- things to build or finish
- a place for sign-off

---

<h2 style="color: #7c3aed; border-bottom: 2px solid #c4b5fd; padding-bottom: 0.25em;">What is SQL?</h2>

**SQL** stands for **Structured Query Language**.

That sounds fancy, but the important part is simple:

> SQL is a way to ask a database questions.

A database might store things like:
- student names
- book titles
- animal facts
- game scores
- planets
- movie characters
- anything else that fits into rows and columns

Example questions:
- Which students are in Room 12?
- Which animals can fly?
- Which games have a score higher than 500?
- Which planets are bigger than Earth?

SQL helps you answer questions like that.

---

<h2 style="color: #7c3aed; border-bottom: 2px solid #c4b5fd; padding-bottom: 0.25em;">Bronze Level</h2>

### Goal
Learn the basic parts of a database and write your first simple SQL queries.

### Learn
At Bronze level, you should understand these ideas:
- what a **database** is
- what a **table** is
- what a **row** is
- what a **column** is
- what a **query** is

### Practice
Try to do these things:
- view a table
- select all data from a table
- select only one or two columns
- filter rows with a simple condition

### Example SQL ideas
You do not need to memorize these perfectly, but you should start recognizing them:

```sql
SELECT * FROM animals;
```

```sql
SELECT name, color FROM animals;
```

```sql
SELECT * FROM animals WHERE can_fly = 1;
```

### Bronze checkpoints
Complete these before asking for Bronze sign-off:
- [ ] I can explain what a table is.
- [ ] I can explain what a row is.
- [ ] I can explain what a column is.
- [ ] I can run a `SELECT *` query.
- [ ] I can select specific columns.
- [ ] I can use a simple `WHERE` condition.
- [ ] I saved my work or screenshots.

### Bronze mini-project ideas
Pick at least **one**:
- make queries about animals
- make queries about planets
- make queries about game characters
- make queries about books or movies
- use a starter database from the repo

<div style="background: #f5f3ff; border: 1px solid #c4b5fd; border-radius: 6px; padding: 1em 1.25em; margin-top: 0.5em;">

### Bronze sign-off
- Student name: __________________________
- Milestone: Bronze Data Track
- Teacher / Mentor: ______________________
- Date: __________________________________
- Approved: Yes / No
- Notes: _________________________________

</div>

---

<h2 style="color: #7c3aed; border-bottom: 2px solid #c4b5fd; padding-bottom: 0.25em;">Silver Level</h2>

### Goal
Use SQL to answer better questions, sort results, count things, and solve a real mystery.

### Learn
At Silver level, you should practice these ideas:
- `ORDER BY`
- `COUNT`
- using more than one condition
- searching carefully instead of guessing wildly

### Practice
Try to do these things:
- sort a table from A-Z or smallest-largest
- count how many rows match a rule
- find only rows that match two conditions
- answer questions using evidence from the data

### Example SQL ideas

```sql
SELECT * FROM planets ORDER BY diameter_km DESC;
```

```sql
SELECT COUNT(*) FROM animals WHERE can_swim = 1;
```

```sql
SELECT * FROM characters WHERE team = 'Blue' AND score > 50;
```

### Required Silver milestone
To complete Silver, you must complete:

- [ ] **SQL Murder Mystery**

This is required because it makes you use SQL for a real problem instead of random practice.

When you finish it, save proof of your work:
- a screenshot
- your notes
- your answer
- or a copy of the queries you used

### Silver checkpoints
- [ ] I can use `ORDER BY`.
- [ ] I can use `COUNT`.
- [ ] I can use more than one condition.
- [ ] I completed the SQL Murder Mystery.
- [ ] I saved proof of my work.
- [ ] I can explain how at least one of my queries helped solve the mystery.

### Silver mini-project ideas
Pick at least **one** in addition to the mystery:
- find the top 5 highest scores in a table
- count how many animals belong to each group
- sort books by year
- search a table for matching clues
- answer 5 data questions from a starter database

<div style="background: #f5f3ff; border: 1px solid #c4b5fd; border-radius: 6px; padding: 1em 1.25em; margin-top: 0.5em;">

### Silver sign-off
- Student name: __________________________
- Milestone: Silver Data Track
- Teacher / Mentor: ______________________
- Date: __________________________________
- Approved: Yes / No
- Notes: _________________________________

</div>

---

<h2 style="color: #7c3aed; border-bottom: 2px solid #c4b5fd; padding-bottom: 0.25em;">Gold Level</h2>

### Goal
Make your own small database project and show that you can use SQL on something you understand.

### Learn
At Gold level, the big idea is this:

> Data becomes more powerful when you organize it well and ask good questions.

You should build something small but real.

### Build
Create your own small project using one of these ideas:
- a creature database
- a game character database
- a Pokemon database
- a space database
- a dinosaur database
- a sports database
- a book or movie database
- your own idea

Your project should include:
- at least **one table**
- at least **5 rows** of data
- clear column names
- at least **5 useful SQL queries**

Better version:
- **two related tables**
- more data
- cleaner categories

### Gold checkpoints
- [ ] I created my own database or data table project.
- [ ] My project has at least 5 rows of data.
- [ ] My project has clear column names.
- [ ] I wrote at least 5 useful SQL queries.
- [ ] I can explain what at least 2 of my queries do.
- [ ] I saved my SQL code or screenshots.
- [ ] I showed my project to a teacher or mentor.

### Gold project examples
- "Which Pokemon have the highest HP?"
- "Which planets are rocky planets?"
- "Which game characters are on the red team?"
- "Which dinosaurs are herbivores?"
- "Which books were published before 2000?"

<div style="background: #f5f3ff; border: 1px solid #c4b5fd; border-radius: 6px; padding: 1em 1.25em; margin-top: 0.5em;">

### Gold sign-off
- Student name: __________________________
- Milestone: Gold Data Track
- Teacher / Mentor: ______________________
- Date: __________________________________
- Approved: Yes / No
- Notes: _________________________________

</div>

---

<h2 style="color: #7c3aed; border-bottom: 2px solid #c4b5fd; padding-bottom: 0.25em;">Final completion requirements</h2>

To complete the **Data Track**, you must finish **all** of these:

- [ ] Bronze checkpoints completed
- [ ] Silver checkpoints completed
- [ ] Gold checkpoints completed
- [ ] SQL Murder Mystery completed
- [ ] A small database project of your own completed
- [ ] Teacher or mentor reviewed your work

If you did all of that, then you did not just "mess around with SQL a little." You actually completed the track.

<div style="background: #f5f3ff; border: 1px solid #c4b5fd; border-radius: 6px; padding: 1em 1.25em; margin-top: 0.5em;">

### Final approval
- Student name: __________________________
- Final project name: ____________________
- Teacher / Mentor: ______________________
- Date: __________________________________
- Approved for Data Track completion: Yes / No
- Notes: _________________________________

</div>

---

<h2 style="color: #7c3aed; border-bottom: 2px solid #c4b5fd; padding-bottom: 0.25em;">Helpful tools and resources</h2>

### Start here
- [W3Schools SQL Tutorial](https://www.w3schools.com/sql/)
- [Khan Academy: Intro to SQL](https://www.khanacademy.org/computing/computer-programming/sql)
- [SQL Murder Mystery](https://mystery.knightlab.com/)

### Useful tools
- [DB Browser for SQLite](https://sqlitebrowser.org/)
- [SQLite Tutorial](https://www.sqlitetutorial.net/)

### Optional extension
These are **extra**, not required for the main track:
- [Machine Learning for Kids](https://machinelearningforkids.co.uk/)
- [Code.org AI Activities](https://code.org/ai)

The optional extension is there if you want to see how data can connect to AI later.
Do not skip the main SQL work just to jump to the shiny buzzword part.

---

<h2 style="color: #7c3aed; border-bottom: 2px solid #c4b5fd; padding-bottom: 0.25em;">Files and starter projects in the repo</h2>

The repo may include things like:
- starter databases
- sample tables
- example SQL files
- screenshots
- instructions

Suggested folder ideas:
- `bonus-tracks/data-track.md`
- `code/sql/`
- `code/sql/starter-databases/`
- `code/sql/example-queries/`

If your teacher or mentor gives you a starter file, save your changed version with a clear name.

Example:
- `animals-project-taylor.db`
- `planet-queries-jordan.sql`

---

<h2 style="color: #7c3aed; border-bottom: 2px solid #c4b5fd; padding-bottom: 0.25em;">What to do after this track</h2>

If you finish the Data Track, good next choices are:
- **Web Track** if you want to show data on a webpage later
- **Robot Track** if you want to work with inputs and outputs instead of tables
- **Gaming Track** if you want to track scores, items, or player stats in games

Data shows up everywhere. That is part of why this track matters.
