import faker from 'faker'
import { sampleSize, sample, times } from 'lodash'

const toObjectById = arr =>
  arr.reduce((acc, item) => {
    acc[item.id] = item
    return acc
  }, {})

const ids = {
  tags: times(10).map(() => faker.random.uuid()),
  posts: times(10).map(() => faker.random.uuid()),
  comments: times(10).map(() => faker.random.uuid()),
  users: times(10).map(() => faker.random.uuid())
}

const tags = ids.tags.map(id => ({
  id,
  name: faker.random.word().toLowerCase()
}))

const posts = ids.posts.map(id => {
  const isPublished = Math.random() > 0.3
  return {
    id,
    title: faker.random.words(),
    date: faker.date.recent(),
    user: sample(ids.users),
    body: faker.lorem.paragraphs(),
    tags: sampleSize(ids.tags, 3),
    comments: sampleSize(ids.comments, 3),
    published: isPublished
  }
})

const comments = ids.comments.map(id => ({
  id,
  date: faker.date.recent(),
  user: sample(ids.users),
  body: faker.lorem.sentence()
}))

const users = ids.users.map(id => {
  const postsByUser = posts.filter(({ user }) => id === user)
  const commentsByUser = comments.filter(({ user }) => id === user)
  return {
    id: faker.random.uuid(),
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    roles: ['user', postsByUser.length ? 'author' : null].filter(Boolean),
    posts: postsByUser.map(p => p.id),
    comments: commentsByUser.map(c => c.id)
  }
})

export default {
  user: {},
  users: toObjectById(users),
  posts: toObjectById(posts),
  tags: toObjectById(tags),
  comments: toObjectById(comments)
}
