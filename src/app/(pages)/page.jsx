"use client"
import Image from 'next/image'
import Link from 'next/link'
import Exercise from './exercises/Exercise'
import Hero from './Hero'
import FeaturedClasses from './FeaturedClasses'
import MembershipOptions from './pricing/MembershipOptions'
import Contact from './contact/Contact'
import FooterBanner from './FooterBanner'
import BMI from './BMI'
// import heroImg from '../../../public/images/hero.png'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedClasses />
      <Exercise />
      <BMI />
      <MembershipOptions />
      <Contact />
      <FooterBanner />
    </>
  )
}
