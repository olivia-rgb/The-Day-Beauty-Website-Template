import React from 'react'

const Logo = () => {
  return (
    <div className="flex gap-1 self-start text-xl tracking-tighter leading-5">
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8081c439b92a199ac3cd30502b265baaa65122bd80cefc417bc022389d2c4959?apiKey=f417b8c00fe14582a1a201b8017683ae&" alt="The Day Beauty logo" className="shrink-0 self-start w-11 aspect-[1.33]" />
    <div className="bg-clip-text">
      The Day <br /> Beauty
    </div>
  </div>
  )
}

export default Logo