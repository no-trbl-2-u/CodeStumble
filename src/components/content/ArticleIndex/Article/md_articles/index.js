import example01_md from './example01.md';
import intro_md from './intro.md';

const example01 = {
  md: example01_md,
  title: "This here is the first Example",
  path: 'example01'
}

const intro = {
  md: intro_md,
  title: "Introduction",
  path: 'intro'
}

const articles = {
  example01,
  intro
}

export default articles;