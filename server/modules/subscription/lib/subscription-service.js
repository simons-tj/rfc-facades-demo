exports.getSubscriptionForAuthor = (authorId) => axios(process.env.ORCA_API, { fancy: { graphql: { stuff: authorId } } })
