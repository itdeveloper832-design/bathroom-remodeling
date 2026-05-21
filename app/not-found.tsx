import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-center px-4">
      <div className="space-y-6 max-w-2xl">
        <div className="space-y-2">
          <h1 className="text-6xl font-serif font-bold text-foreground">404</h1>
          <h2 className="text-3xl font-serif font-semibold text-foreground">Page Not Found</h2>
        </div>

        <p className="text-lg text-muted-foreground">
          We couldn&apos;t find the page you were looking for. Let us help you get back on track.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Go to Home
            </Button>
          </Link>
          <Link href="/bathroom-remodeling">
            <Button size="lg" variant="outline">
              View Services
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline">
              Contact Us
            </Button>
          </Link>
        </div>

        <div className="pt-8 text-sm text-muted-foreground">
          <p>Need help? Call us at <a href="tel:(480) 306-5591" className="font-semibold hover:text-primary">(480) 306-5591</a></p>
        </div>
      </div>
    </div>
  )
}
