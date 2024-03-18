import React from 'react'

const links = [
  { text: "Terms of Service", href: "#Tersms of Service" },
  { text: "Privacy Policy", href: "#privacy-policyolicy" },
  { text: "Cookie Policy", href: "#notifications" },
  { text: "Ad Choice", href: "#messages" },
  { text: "More..", href: "#profile" },
];

const Footer = () => {
  return (
  <>
    <div className="hidden lg:flex flex-col max-w-[300px] mx-auto px-4 sm:px-6 lg:px-8 top-20 right-[32px] w-[19%] fixed border border-gray-900">
      <div className='text-center text-sm text-gray-500 py-2'>
        <div className='flex flex-wrap justify-between'>
        <nav className="w-full">
                {links.map((link, index) => (
                  <a key={index} href={link.href} className="flex text-xs hover:underline cursor-pointer w-full">
                    {link.icon}
                    {link.text}
                  </a>
                ))}
              </nav>
        <p>Chatika © 2024</p>
      </div>
    </div>
    </div>
  </>
  )
}

export default Footer