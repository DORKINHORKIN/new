---
slug: blog/article1

title: Article 1
date: 2023-01-01
status: draft

tags: ["character:DorkinHorkin", "content", "management"]
group: blog
view: image

---

# Introduction

Welcome to the first article of this git based content management system.
I might use pages cms to manage my content.

# Considerations on the CMS Workflow

Do I really expect to pull up the repo then open a random md file, edit it, add it, commit it, push it when I want to update my content?
Does that even work in the first place?

### Copilot Answer

Apparently It could but it depends on how annoyed I am with the process.

# More workflow Considerations

It isn't really that hard to pull up something like pages cms to edit my content. It even has an image upload feature too.
I think though its all just complicated because I feel like I don't have control over the process.

# Site Considerations

What if I started this as a tech blog?
Like, imagine it. When I am actually working on the site I can edit the content directly on the site then deploy it with various different workflows.

# Deployment

I thought about the idea of using gh-pages primarily like a CDN.
When I make changes to the backend the frontend can just pull whatever it needs.

I feel like I'm getting used to this workflow.
If I'm gonna be fucking around with this site I might as well show my results.


# Different Views Per Article
It depends on the frontmatter.
If it says `view: album` then the image will be shown prominently with the article on the bottom or tucked into a sidebar.
If it says `view: text` it will be something like twitter.
if it says `view: article` it will process the markdown content and display it as an article.

### How would the album view work?
