import React from 'react'
import ServiceCard from './ServiceCard'
import './Services.css'
import whatsappAutomationToolSvg from '../../assets/automationToolForPersonalAccounts.svg'
import leadsOrganizationSvg from '../../assets/organizeLeads.svg'
import campaignPreformance from '../../assets/campaignPreformance.svg'
import scheduleMessages from '../../assets/scheduleMessages.svg'


const services = [
  {
    "title": "WhatsApp Automation Tool",
    "description": "Automation tool for WhatsApp personal and business accounts",
    "image": whatsappAutomationToolSvg
  },
  {
    "title": "Leads Organization",
    "description": "Organize your leads and customers in one place",
    "image": leadsOrganizationSvg
  },
  {
    "title": "Campaigns Performance Tracking",
    "description": "Track your campaigns' performance and optimize them",
    "image": campaignPreformance
  },
  {
    "title": "Schedule Messaging",
    "description": "Schedule your messages to be sent at a specific time",
    "image": scheduleMessages
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
