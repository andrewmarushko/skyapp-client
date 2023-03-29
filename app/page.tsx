'use client'
import Button from '@geist-ui/core/esm/button'
import { Button as CustomButton } from '@/components/ui/button'

export default function Home() {
  return (
    <div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Taxing Laughter: The Joke Tax Chronicles
      </h1>
      <Button>Button from geist</Button>
      {/* INFO: Just for showcase delete when it's not needed */}
      <CustomButton>Custom Button</CustomButton>
    </div>
  )
}
