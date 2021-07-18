let arc = require('../../../../../../src')

// eslint-disable-next-line
async function handler (req) {
  let { query, session } = req
  if (query.session === 'create') {
    session.unique = new Date().toISOString()
  }
  if (query.session === 'update') {
    session.another = new Date().toISOString()
  }
  if (query.session === 'destroy') {
    session = {}
  }
  return {
    session,
    json: JSON.stringify(session)
  }
}

exports.handler = arc.http.async(handler)
