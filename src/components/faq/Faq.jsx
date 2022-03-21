import React, { useState } from 'react'
import Accordion from '../../Accordion';
import './faq.css'

const faq = () => {


  const accordionData = [
    {
      title: 'When will I be able to mint my Real Estate?',
      content: `You will be able to mint your Real Estate early April. Official dates TBA.`
    },
    {
      title: 'Where will I live?',
      content: `You will be able to own a house in the city or live on a private Land in a house designed to your taste by an architect.`
    },
    {
      title: 'What blockchain will you be using?',
      content: `The Ethereum Blockchain.`
    },
    {
      title: 'What are your secondary royalty fees?',
      content: `6%, for the game's maintenance.`
    },
    {
      title: 'Will I drive my car in the city?',
      content: `Yes, you will.`
    }
  ];

  return (
    <div>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  )
}

export default faq