import React from 'react'
import ServiceCard from './ServiceCard'
import './Services.css'
import Explore from '../../assets/Explore.svg'
import dogodex from '../../assets/dogodex.svg'
import makeFriends from '../../assets/makeFriends.svg'
import shareYourThoughts from '../../assets/shareYourThoughts.svg'


const services = [
  {
    "title": "Find new dogs in your area",
    "description": "browse dogs in your area and find new friends",
    "image": Explore
  },
  {
    "title": "DogoDex",
    "description": "Find all the information you need about dogs",
    "image": dogodex
  },
  {
    "title": "Make new friends ",
    "description": "Make friends with other dogs and their owners",
    "image": makeFriends
  },
  {
    "title": "Share your thoughts",
    "description": "Post your thoughts and share them with the world",
    "image": shareYourThoughts
  }
]


const Services = () => {
  return (
    <div className="services-container">
      {Object.entries(services).map(
        ([key, service]) => (
          <ServiceCard
            key={key}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        )
      )}
    </div>
  )
}

export default Services
