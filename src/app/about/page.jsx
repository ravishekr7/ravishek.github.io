/* eslint-disable react/no-unescaped-entities */

import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { LinkedInIcon, GitHubIcon, XIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description: `I’m a front-end developer from Pakistan. I love learning how to build fast, accessible and scalable web applications. I always keeping an eye on the javascript ecosystem for what comes next and I'm excited to continue.`,
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Front-end developer focused on building apps those meet my client's
            needs.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I'm Muhammad, a front-end developer from Pakistan. I got
              introduced to different topics, like video editing, graphics
              designing and lots more but it never really clicked for me. I
              started my career as front-end developer in 2020 when I get
              introduced to HTML and CSS. I always keeping an eye on the
              javascript ecosystem for what comes next and I'm excited to
              continue.
            </p>
            <p>
              I started with basic HTML and CSS, build websites those no one
              liked. Since then, I've truly worked hard day and night to enhance
              my front-end skills, constantly learning ways to make development
              easier. My biggest motivation as a front-end developer is creating
              websites that truly meet my client's needs.
            </p>
            <p>
              I spent most of my time searching for how I can solve problems and
              bugs on my own and that's where I go to the Google and obviously
              chatGPT where I can find an answer. However, I make mistakes, I
              get frustrate and I believe that, this is common and I continue to
              build things.
            </p>
            <p>
              Currently, I'm working at Tech Mentors, a tech based company that
              is specialized in web applications development. Tech Mentors is
              aiming to tap on the growing demands of the tech industry and set
              itself as one of the best tech company in Berlin, Germany. My
              go-to stack is React, Next.js, and TailwindCSS to build web apps.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://www.linkedin.com/in/imuhammadessa/"
              icon={LinkedInIcon}
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="https://github.com/imuhammadessa"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://twitter.com/imuhammadessa"
              icon={XIcon}
              className="mt-4"
            >
              Follow on X (Twitter)
            </SocialLink>
            <SocialLink
              href="mailto:imuhammadessa@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              imuhammadessa@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
