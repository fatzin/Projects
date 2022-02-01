import React from 'react'
import { FaGithub, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
export const links = [
  {
    id: 1,
    url: '/',
    text: 'Página Inicial',
  },
  {
    id: 2,
    url: '/about',
    text: 'Sobre',
  },
  {
    id: 3,
    url: '/projects',
    text: 'Projetos',
  },
  {
    id: 4,
    url: '/contact',
    text: 'Contato',
  },
  {
    id: 5,
    url: '/profile',
    text: 'Perfil',
  },
]

export const social = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com/fatzin',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.linkedin.com/in/felipe-a-g-mattos',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://www.github.com/fatzin',
    icon: <FaGithub />,
  },
]