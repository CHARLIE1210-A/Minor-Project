import React from 'react'
import Read from '../components/read'
function ReadUse() {
  return (
    <div>
      <Read id='main-content'
      h2title='Overview of Recommendation System '
      para='A recommendation system is an artificial intelligence or AI algorithm, usually associated with machine learning, that uses Big Data to suggest or recommend additional products to consumers. These can be based on various criteria, including past purchases, search history, demographic information, and other factors. Recommender systems are highly useful as they help users discover products and services they might otherwise have not found on their own.'
      para1='Recommender systems are trained to understand the preferences, previous decisions, and characteristics of people and products using data gathered about their interactions. These include impressions, clicks, likes, and purchases. Because of their capability to predict consumer interests and desires on a highly personalized level, recommender systems are a favorite with content and product providers. They can drive consumers to just about any product or service that interests them, from books to videos to health classes to clothing.'
      h3title='Types of Recommendation Systems'
      para3='While there are a vast number of recommender algorithms and techniques, most fall into these broad categories: collaborative filtering,  content filtering and context filtering.'
      para4='algorithms recommend items (this is the filtering part) based on preference information from many users (this is the collaborative part). This approach uses similarity of user preference behavior,  given previous interactions between users and items, recommender algorithms learn to predict future interaction. These recommender systems build a model from a user’s past behavior, such as items purchased previously or ratings given to those items and similar decisions by other users.For example, if a collaborative filtering recommender knows you and another user share similar tastes in movies, it might recommend a movie to you that it knows this other user already likes.'
      para5='by contrast, uses the attributes or features of an item  (this is the content part) to recommend other items similar to the user’s preferences. This approach is based on similarity of item and user features,  given information about a user and items they have interacted with (e.g. a user’s age, the category of a restaurant’s cuisine, the average review for a movie),  model the likelihood of a new interaction.  For example, if a content filtering recommender sees you liked the movies You’ve Got Mail and Sleepless in Seattle, it might recommend another movie to you with the same genres and/or cast such as Joe Versus the Volcano'
      para6='includes users’ contextual information in  the recommendation process. Netflix  spoke at NVIDIA GTC about making better recommendations by framing a recommendation as a contextual sequence prediction. This approach uses a sequence of contextual user actions, plus the current context, to predict the probability of the next action. In the Netflix example, given one sequence for each user—the country, device, date, and time when they watched a movie—they trained a model to predict what to watch next.'
      span1='Collaborative filtering  '
      span2='Content filtering, '
      span3='Context filtering '
      />
    </div>
  )
}

export default ReadUse
