import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Section from '../components/section'
import Carduse from '../components/sCarduse'
import TestimonialUse from '../compUse.js/testimonialUse'
import ReadUse from '../compUse.js/readUse'


function MainPage() {
    return (
        <div className="md:container mx-auto px-4 scroll-smooth">
            <Navbar link='#main-feature' about='#team' />
            <Section 
            htitle='Machine Learning Powered Recommender System' 
            para='Humans are inherently curious. In fact, curiosity is linked to the evolution of humankind. For instance, according to famous historian Yuval Noah Harari in his bestseller book "Sapiens", our language skills evolved as a way of gossiping...' 
            isrc='https://images.unsplash.com/photo-1689865725935-2a981317abb7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            link ='https://www.nvidia.com/en-us/glossary/data-science/recommendation-system/' 
            ihref='#main-feature'
            />
            <ReadUse/>
            <Carduse/>
            <TestimonialUse/>
            <Footer />
        </div>
    )
}

export default MainPage
