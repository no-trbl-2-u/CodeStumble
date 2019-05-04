/* eslint-disable jsx-a11y/img-has-alt */
import intro_md from './intro.md'
import arraycardio01_md from './arrayCardio01.md'
import arraycardio02_md from './arrayCardio02.md'
import expressFCC_md from './expressFCC.md'

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

// TODO: Finish formatting -> Limit use of ```js ...<code /> ... ```
const expressFCC = {
  md: expressFCC_md,
  title: "Free Code Camp Node Express Follow-Along",
  path: 'expressFCC'
}

const articles = {
  intro,
  arraycardio01,
  arraycardio02,
  expressFCC
}

export default articles;