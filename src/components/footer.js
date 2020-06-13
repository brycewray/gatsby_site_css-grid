let copyYear = new Date().getFullYear()
import React from "react"
import SvgGitHubIcon from "../assets/svg/svgGitHubIcon.svg"
import SvgTwitterIcon from "../assets/svg/svgTwitterIcon.svg"
import SvgMastodonIcon from "../assets/svg/svgMastodonIcon.svg"
import SvgLinkedInIcon from "../assets/svg/svgLinkedInIcon.svg"
import SvgRSSIcon from "../assets/svg/svgRSSIcon.svg"
import SvgFooterIcon from "../assets/svg/svgFooterIcon.svg"

const Footer = () => (
  <>
    <footer className="text-center pb-6">
      <div className="w-5/6 md:w-3/4 lg:w-2/3 mx-auto">
        <p className="text-xs inline-flex mt-4 mb-4"><a href="https://github.com/brycewray/eleventy_solo" target="_blank" rel="noopener" className="mb-0 border-transparent" aria-label="GitHub"><SvgGitHubIcon /></a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://twitter.com/BryceWrayTX" target="_blank" rel="noopener" className="mb-0 border-transparent" aria-label="Twitter"><SvgTwitterIcon /></a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://mastodon.technology/@BryceWrayTX" target="_blank" rel="noopener" className="mb-0 border-transparent" aria-label="Mastodon"><SvgMastodonIcon /></a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.linkedin.com/in/brycewray" target="_blank" rel="noopener" className="mb-0 border-transparent" aria-label="LinkedIn"><SvgLinkedInIcon /></a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="/feed.xml" className="mb-0 border-transparent" aria-label="RSS"><SvgRSSIcon /></a></p>
        <p className="text-xs">
          &copy;&nbsp;{copyYear}&nbsp;<a className="h-card" rel="me" href="https://brycewray.com">Bryce Wray</a>.<br />
          Site built and managed with <a href="https://jamstack.org" target="_blank" rel="noopener">the Jamstack</a>, <a href="https://11ty.dev" target="_blank" rel="noopener">Eleventy</a>, <a href="https://tailwindcss.com/" target="_blank" rel="noopener">Tailwind CSS</a>, <a href="https://www.apple.com/macos" target="_blank" rel="noopener">macOS</a>, <a href="https://www.apple.com/ios" target="_blank" rel="noopener">iOS</a>, <a href="https://daringfireball.net/projects/markdown" target="_blank" rel="noopener">Markdown</a>, <span className="text-nowrap">time, and&nbsp;love.</span> <span className="text-nowrap">Hosted by&nbsp;<a href="https://netlify.com" target="_blank" rel="noopener">Netlify</a></span>.
        </p>
      </div>
      <hr className="mt-8 border-black" />
      <div className="w-5/6 md:w-3/4 lg:w-2/3 mx-auto">
        <p className="font-bold text-base tracking-tight mt-4 mb-2">Information for webmentions</p>
        <p className="inline-flex mt-0"><SvgFooterIcon /></p>
        <p className="p-note text-xs leading-tight mt-0">Unrepentant advocate for and user of the Oxford comma (sorry,&nbsp;AP). Webmentions&nbsp;of others&rsquo; content do&nbsp;not necessarily constitute endorsements. Comments&nbsp;and&nbsp;opinions expressed herein are my&nbsp;own, unless otherwise&nbsp;noted.</p>
      </div>
    </footer>
  </>
)

export default Footer
