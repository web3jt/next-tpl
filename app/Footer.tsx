import Link from 'next/link'
import clsx from 'clsx'
import Container from '../components/Layout/Container'
import { TwitterIcon, InstagramIcon, GitHubIcon, LinkedInIcon } from '../components/Icons/SocialIcons'

import { Logo } from '../components/Logo'

import social from '../config/constants/social'

const navLinks = [
  {
    target: "_self",
    href: "/",
    title: "Home"
  },
  {
    target: "_self",
    href: "#",
    title: "Placeholder"
  },
  {
    target: "_self",
    href: "#",
    title: "Placeholder"
  },
]

const socialLinks = [
  {
    href: social.twitter,
    ariaLabel: "Follow on Twitter",
    icon: TwitterIcon,
  },
  {
    href: social.instagram,
    ariaLabel: "Follow on Instagram",
    icon: InstagramIcon,

  },
  {
    href: social.github,
    ariaLabel: "Follow on GitHub",
    icon: GitHubIcon,
  },
  {
    href: social.linkedin,
    ariaLabel: "Follow on LinkedIn",
    icon: LinkedInIcon,
  },
]

const NavLink: React.FC<{
  target?: string;
  href: string;
  children?: React.ReactNode;
}> = ({ target = '_self', href, children }) => {
  return (
    <Link
      target={target}
      href={href}
      className={clsx(
        'transition backdrop-blur',
        'rounded-lg py-1 px-3',
        'hover:bg-zinc-100',
        'text-zinc-500 hover:text-zinc-700',
      )}
    >
      {children}
    </Link>
  );
}


const SocialLink: React.FC<{
  href: string;
  ariaLabel: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}> = ({ href, ariaLabel, icon: Icon }) => {
  return (
    <Link className="group -m-1 p-1" href={href} aria-label={ariaLabel}>
      <Icon className={clsx(
        'transition backdrop-blur',
        'h-6 w-6 fill-zinc-500 group-hover:fill-zinc-700',
      )} />
    </Link>
  );
}

const Footer = () => (
  <footer className="border-t">
    <Container className="py-8">
      <div className="py-16">
        <Logo className="mx-auto h-10 w-auto" />
        <div className="mt-10 text-sm" aria-label="quick links">
          <div className="-my-1 flex justify-center gap-x-6">
            {navLinks.map((link, key) => (
              <NavLink key={key} target={link.target} href={link.href}>
                {link.title}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center border-t border-zinc-400/10 py-10 sm:flex-row-reverse sm:justify-between">
        <div className="flex gap-x-6">
          {socialLinks.map((link, key) => (
            <SocialLink key={key} href={link.href} ariaLabel={link.ariaLabel} icon={link.icon} />
          ))}
        </div>
        <p className="mt-6 text-sm text-zinc-500 sm:mt-0 font-sans">
          &copy; 2021-{new Date().getFullYear()} XXXX. All rights reserved.
        </p>
      </div>
    </Container>
  </footer>
);

export default Footer;
