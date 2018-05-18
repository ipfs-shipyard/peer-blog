# Distributed Blog Application

## What

The IPFS blogging platform will be a practical, multi-tenant blogging platform in the same vein as Medium.
This DApp will serve as the most basic of three (Blog platform, Forum, and Issue Tracker) that will share the same set of tools for DApp data management which will be carefully designed to take advantage of IPFS while not compromising on user experience (UX) and security.

Featuring themes, a markdown editor, tags, multiple authors, private drafts, the IPFS Blog DApp will be a feature-complete blog platform.
It will lack features that more advanced CMSes have, to focus specifically on blog use cases.

## Why

The IPFS DApp Blog will serve as a working example for making Web DApps with ipfs-js. It will be useful as a blog service for the IPFS network, bringing with it the hosting advantages of IPFS.

## Goals (What does success look like?)

* Protocol Labs could use it for their blog.
* Developers will use it for a documented example of a DApp.
* Developers will develop their own DApps based on the same technology stack.

## Target Users

* Authors will be users that want their content to never disappear, regardless of hosting, maintenance, etc.
* IPFS enthusiasts, to show that IPFS is viable and useful.
* Readers will be anyone and everyone who reads blog posts.

## Considerations / Risks

### Security

Bad peers may be able to deny service to users by producing large numbers of bad transactions, althought they would never get past the signature checks.

If a legitimate user was tricked into running a nefarious client, data could be corrupted or destroyed in any number of ways.

### Configuration Trade-offs

#### Blockchain 
The blockchain time entries are optional, and if not used, revoking permissions becomes more difficult, because timestamps can be faked, and actions can be added after a permission has been removed but appear to come from a time when the permission existed. All data produced by old keys would need to be recreated (or at least re-signed) by a user adopting the actions of the invalid keys.

An external blockchain service for the purpose of timestamps is outlined in the [Data Architecture Document](DATA-ARCHITECTURE.md)

#### Open or Closed Registration
The admin may configure the blog to allow anyone to register, or conform to a whitelist.
This whitelist may use an external service like keybase.io or uPort.

## Workflow and User Stories

### As an author, They would like to...

#### Log In

![Login Flow](assets/blog/Login-Flow.jpg)

  1. The author naviates to the URI of the Blog and clicks on the log in button
  2. The author provides their credentials directly or through a 3rd party login system
  3. (Internal) If a third-party is used, the application generates a key-pair and uses the 3rd party system (keyb)ase.io or uPort) to sign the generated public key. This key-pair is added to the user's identity.
  3. The author is presented a view that lists recent drafts and posts, and actions that they can perform

#### Browse all of their posts and drafts

![Login Flow](assets/blog/Login-Flow.jpg)

  1. The author, upon being logged in, are presented a view of posts and drafts starting with the most recently authored.
  2. The author can navigate to the next or previous page of results underneath the list.
  3. The author can selects "Drafts" to view only pages of drafts.

#### Author a new post

![Add Edit Flow](assets/blog/Add-Edit-Flow.jpg)

  1. The author logs in and is presented with a view of recent posts and drafts along with possible actions.
  2. The author clicks on "Create New Post" or similar and is presented with a view that includes forms for the subject, body, and tags. There are also buttons for "Save as Draft", "Publish", and "Preview." There is also a form for adding media files.
  3. The author can fill out the subject and tags as plain text, and can use markdown for the body.
  4. The author clicks "Save as Draft" or "Publish."
  5. The author is directed back to the default author view (recent posts and possible actions). The entry will be listed in the recent posts.

#### Edit an existing post

![Add Edit Flow](assets/blog/Add-Edit-Flow.jpg)

  1. The author, upon being logged in, are presented a view of posts and drafts starting with the most recently authored.
  2. The author navigates to an post or draft and clicks on the subject.
  3. The author is presented with the same view as a new post, except that the values of the post are filled in and there is a list of previous versions by date. They can edit the subject, body, tags.
  4. The actions of "Save as Draft" and "Publish" is presented if this is a draft or "Unpublish and Save As Draft" and "Publish new Version" if this is a published post.
#### Unpublish a post

![Add Edit Flow](assets/blog/Add-Edit-Flow.jpg)

  1. The author, upon being logged in, are presented a view of posts and drafts starting with the most recently authored.
  2. The author navigates to an post and clicks on the subject.
  3. The author is presented the edit view.
  4. The author clicks "Unpublish and Save as Draft."
  5. The author is directed back to the default view where they will see the draft listed in the recent posts and drafts.

#### Publish a draft post

![Add Edit Flow](assets/blog/Add-Edit-Flow.jpg)

  1. The author, upon being logged in, are presented a view of posts and drafts starting with the most recently authored.
  2. The author navigates to an drft and clicks on the subject.
  3. The author is presented the edit view.
  4. The author clicks "Publish"
  5. The author is directed back to the default view where they will see the post listed in the recent posts and drafts.
  6. (Internal) The draft is encrypted with the current shared key for the authors.
- Change the blog theme
  1. The author, upon being logged in, are presented a view of posts and drafts starting with the most recently authored.
  2. One of the actions available is to change the blog theme from a dropdown list or to upload a new theme file.
  3. There will also be a link in the upload form to a document for creating themes.

#### Invite others to author posts

![User Mgmt Flow](assets/blog/User-Mgmt-Flow.jpg)

  1. The author, upon being logged in, are presented a view of posts and drafts starting with the most recently authored.
  2. One of the actions listed is "Manage Authors."
  3. Clicking on that action will load a view that presents existing authors and a form to add a new author.
  4. The author fills in the form for the new author including name and public key (or external service?)
  5. The author submits the new author form, and now the view includes the new author in the list of authors.
  6. (Internal) a new key is generated for the encypted blog posts, and shared with users. All of the draft files are re-encrypted.

#### Disinvite others to author posts

![User Mgmt Flow](assets/blog/User-Mgmt-Flow.jpg)

  1. The author, upon being logged in, are presented a view of posts and drafts starting with the most recently authored.
  2. One of the actions listed is "Manage Authors."
  3. Clicking on that action will load a view that presents existing authors and a form to add a new author.
  4. Each author has an associated action to "Remove Author" which the author clicks on.
  5. The author is presented with dialog "Are you sure you want to remove [author]?"
  6. The author clicks the affirmative action and the associated author is removed from the list of authors.
  7. Optionally, the removed author's posts may be removed.
  8. Optionally, all of the author'ss actions may be undone and blog post files re-generated.
  9. (Internal) a new key is generated for the encypted blog posts, and shared with users. All of the draft files are re-encrypted.

#### Rotate out keys when my private key has been compromised 

![User Mgmt Flow](assets/blog/User-Mgmt-Flow.jpg)

  1. The author, upon being logged in, are presented a view of posts and drafts starting with the most recently authored.
  2. One of the actions listed is "My Pofile" which the author clicks on.
  3. A view is presented of the author's profile including name, avatar, their current public keys, and a list of previous keys. There is a form for setting a new public key.
  4. The author fills in their new public key (possibly retrieved from external service) and submits the form.
  5. The profile view now shows the new key as the public key and lists the old public keys in the "previous keys" list.
  6. (Internal) Actions from here on must use the new key. Depending on blog configuration old actions may be recreated with the new key and old ones discarded. This depends on security settings and whether a blockchain is used for timestamps on the actions or whether actions must be re-signed with the new key.
####  Delete user comments
  1. The author, upon being logged in, are presented a view of posts and drafts starting with the most recently authored.
  2. The author navigates to an drft and clicks on the subject.
  3. The author is presented the edit view.
  4. The user clicks the "Remove" button next to the comment they'd like to delete.

#### Render my blog to HTML5 and publish on IPFS
1. As a logged in user, I browse to my blog and click "Render to HTML"
2. The blog renders my blog index to html, and the individual blog posts to html.
3. The html files are published to IPFS and the index may be associated with IPNS.

### As a reader, They would like to

#### Find the blog
1. The reader discovers the blog and visits an https/ipfs URI in their browser. The browser client loads the appropriate markdown files and renders them using a theme.

#### Scan the posts
1. The reader browses a list of posts, displaying title, author, date, and first paragraph. A list of tags/subjects is viewable.
2. The user clicks a title and is shown a more complete view of the blog post.
3. The user clicks one of the related tags and gets a list of blog posts for that tag.

#### Comment on a blog post
1. The reader browses a list of posts, displaying title, author, date, and first paragraph. A list of tags/subjects is viewable.
2. The user clicks a title and is shown a more complete view of the blog post.
3. The user clicks into the comment box at the end of the blog post.
4. They type their comment using markdown.
5. The user clicks "Add comment"
6. The list of comments is updated to reflect their newly created comment.

#### Follow a blog
1. The logged-in user browses to a blog that they enjoy.
2. There is a button or link to follow the blog.
3. The user's main feed will now include posts from this blog.

#### Manage follows
1. The logged in user clicks on a settings or profile button.
2. The user navigates to an option to manage the blogs they follow.
3. For each blog the user follows there is a link or button to unfollow said post.
4. When the user clicks "unfollow," the list is updated to not include that blog.
5. The users's main feed will no longer include posts from the blogs that they unfollowed.

## Requirements

### Functional

#### As an author, I would like to...
- See a list of all my posts
- Create a new post using markdown
- Add tags to my posts
- Edit an existing post
- Delete an existing post
- Save a post as a draft
- Review previous revisions of my draft/post
- Publish a draft post
- Set custom metadata for my posts (opengraph, twitter, etc.)
- Change my blog's theme
- Preview my post in the context of my blog's theme
- Invite others to author posts
- Disinvite others to author posts
- Rotate out keys when my private key has been compromised
- Share private drafts with others without non-authorized users able to read it
- Register
- Create a new blog
- Quote another blog
- Delete user comments
- Render to HTML files

#### As a reader, I would like to...
- See a list of all posts
- Navigate blog posts by date
- Navigate blog posts by author
- Navigate blog posts by tag
- Read a post
- See post changes
- Follow a blog
- Manage subscriptions (follows)
- Add a comment to a post

### Usability

- Needs to be easy to to sign in from multiple devices
- UX needs to feel like a traditional blog
- The application needs to load quickly with reasonably low bandwidth constraints.

### Technical

The majority of the work for this project will be the data platform. It will employ paradigms not familiar to the vast majority of developers, and yet will make them accessible to said developers.

See [DATA-ARCHITECTURE.MD](DATA-ARCHITECTURE.MD)

- Identity system with strong security through signing
    - Able to use an external key service, like Keybase.
    - Hierarchy of admin/user levels
    - Signed centrally
    - Key rotation, invalidation
- Table System with definitions and relationships
    - Built on y.js types
        - Syncable log of changes that can deal with out-of-order
    - Every row signed by the writer (JWS)
    - ACL permissions system
    - Basic ORM
    - References to IPFS URIs (files and the like)
    - Syncing over y.js
        - No-op on failed permissions, signature, or definition
    - Reflection
    - Indexes
- Read permissions through encryption and single-purpose keys
- Markdown bodies
    - yaml headers of y.js table meta-data
    - Routable and renderable without y.js syncing necessary only for logged in uses
- External time entries using blockchains
    - optional trade-off of security / convenience

### Support

* Documentation on how to stand up the application for yourself and others.
* Documentation on how to manage users.
* Notifications to new versions of the client?

## Assumptions

* A blogging dapp will be useful for developers that are new to IPFS.
* Users already know how to use these kinds of applications.
* Core features of IPFS will be useful to blog authors and readers.

## Constraints

* No centralized services should be required, although services like KeyBase and uPort may be used.

## Architecture

The blog will be a web, client-rendered application that syncs data via IPFS and y.js, and produces markdown documents and html pages to be rendered for readers

[ insert diagrams here ]

## Implementation Details

### Author Views

#### `/admin/posts` - Post List
Displays a list of posts including various actions to take on posts such as publish/unpublish.
Clicking on a post or draft subject line will open the editor for that post.
The most recent posts and drafts are listed, with links to further post/draft pages.
The post list can be filtered by draft/published and author.
This is the default admin view and as such also contains a list of actions unrelated to specific posts, such as "Manage Users" and "My Profile."

#### `/admin/posts/new` - Create New Post
This is the main editing interface. It provides a Markdown-based text editor for composition.
It also includes subject and tags fields, and forms for adding media files.
The actions exist for "Save as Draft" and "Publish."

#### `/admin/posts/:post_id` - Post Editor
This is a recycled version of the Create New Post view, except that it's filled with the data from an existing post.
It also includes links to previous edits of the post. Clicking on one loads that version in the editor, but the actions change to saving this version as the current draft/post.

#### `/admin/authors/` - Manage Users

This view lists all of the blog authors. Each author has the action of being revoked.
There is a form for adding users with their name and public key.

#### `/admin/me` - My Profile

This view shows the profile, current key, and past keys of the current user.
The user can rotate keys, update their avatar, and update their name from this view.

### Reader

#### `/` - Blog Homepage
This would be the main user-facing interface for the blog, displaying a list of published posts in reverse-chronological order.
Depending on the theme used, it may list posts with some or all of the body. It may include links to lists of posts by tag or author.

#### `/posts/:post_id` - Blog Post
Renders the Markdown content of a blog post to an individual page. Also contains metadata like publish date.

#### `/tags/:tag_id` - Blog Posts with Tag
Renders a list of posts that are tagged with `tag_id` in reverse-chronological order

## Comparison to a traditional Blogging Platform

Feature             | Standard Blog | IPFS DApp Blog
------------------- | ------------- | ---
Markdown            | ✅             | ✅
Users               | ✅             | ✅
Advanced Navigation | ✅             | ✅
Read Offline        | ❌             | ✅
Edit Offline        | ❌             | ✅
Scheduled Publish   | ✅             | ❌
Edit Posts          | ✅             | ✅
Change Themes       | ✅             | ✅

## Dependencies

* ipfs-js
* y.js
* webpack
* react

## Milestones

## Evaulation Plan and Perfomance Metrics
