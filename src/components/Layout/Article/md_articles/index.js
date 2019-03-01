// import example01_md from './example01.md';
import intro_md from './intro.md';
import arraycardio01_md from './arrayCardio01.md';
import arraycardio02_md from './arrayCardio02.md';

// const example01 = {
//   md: example01_md,
//   title: "This here is the first Example",
//   path: 'example01'
// }

const intro = {
  md: intro_md,
  title: "Introduction",
  path: 'intro'
}

const arraycardio01 = {
  md: arraycardio01_md,
  title: "Array Cardio 01",
  path: 'arraycardio01'
}

const arraycardio02 = {
  md: arraycardio02_md,
  title: "Array Cardio 02",
  path: 'arraycardio02'
}

const articles = {
  // example01,
  intro,
  arraycardio01,
  arraycardio02
}

export default articles;