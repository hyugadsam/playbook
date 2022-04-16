const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
        return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
        return `This repository ${this.name} was created by ${this.author}`
    }
}

console.log("Nombre del repo:" + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())

const Issue = {
    title: "Bug 007",
    repositoryNameAssociated: "LaunchX",
    status: "Activo", //1
    numberOfComments: 1,
    labels: ["JavaScript", "Web", "Server"],
    author: "Juan",
    dateCreated: Date.now(),
    lastUpdated: Date.now(),
    getTitleAndAuthor: function()  {
        return `${this.title} - ${this.author}`
    },
    getGeneralInfo: function() {
        return `This ISSUE ${this.title} was created by ${this.author}`
    },
}

console.log("Issue")
console.log(Issue.getTitleAndAuthor())
console.log(Issue.getGeneralInfo())

const PullRequest = {
    title: "Fix of Bug 007",
    branchName: "007",
    dateCreated: Date.now(),
    status: "Created",
    repositoryNameAssociated: "LaunchX",
    issue: Issue,
    getStatus: function() {
        return `Status: ${this.status}`
    },
    getTitleAndAutor: function() {
        return `This PullRequest ${this.title} was created by ${this.issue.author}`
    },
}

console.log("PullRequest")
console.log(PullRequest.getStatus())
console.log(PullRequest.getTitleAndAutor())

// Twitter
const Twitter_user = {user: "carlo", username: "carlogilmar", bio: "...", age: 23}
const Twitter_hashtag = { title: "Js", NumberOfPost: 22 }
const Twitter_post = { user: Twitter_user, CreateDate: Date.now(), comments: ["1", "2"], Images: ["Googleiamges.com/1.jpg"] }
const Twitter_trending_topic = { HashTags: [Twitter_hashtag], Posts: [Twitter_post]}

console.log("Twitter_post")
console.log(Twitter_post)

// Facebook
const Facebook_biography = { bornDate: Date.now(), bonrPlace: "Mex", Job: "Own boss", School: "LaunchX", Friends: []}
const Facebook_user = {user: "sam", username: "sam1234", bio: Facebook_biography, age: 25}
const Facebook_post= { user: Facebook_user, CreateDate: Date.now(), comments: ["1", "2"], Images: ["Googleiamges.com/1.jpg"], usersMentionated: [] }

console.log("Facebook_post")
console.log(Facebook_post)

// Uber
const profile = {user: "sam", username: "sam1234", paymentMethods: ["Cash", "Card", "Paypal"] }
const travel = {user: profile, Driver: "Juan", Car: "Seat Leon", StartPlace: "", Destination: "", paymentMethod: profile.paymentMethods[1], amount: 612.23, start: function() { console.log("Run run ... run!!!!!")} }

console.log("travel")
console.log(travel)
console.log("Travel Start")
travel.start();
