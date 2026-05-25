"use client"

import { useState } from "react"
import { AdminShell } from "@/components/admin/admin-shell"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-config"
import { BarChart3, HelpCircle, ArrowRight, ExternalLink, Settings as SettingsIcon } from "lucide-react"
import Link from "next/link"

export default function AnalyticsPage() {
  const shareUrl = (siteConfig as any).umamiShareUrl || ""
  const websiteId = (siteConfig as any).umamiWebsiteId || ""

  return (
    <AdminShell 
      title="Analytics" 
      description="Monitor website traffic and user engagement with privacy-first analytics"
    >
      {shareUrl ? (
        <Card className="w-full h-[calc(100vh-220px)] border-border bg-card overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between py-4 border-b border-border bg-muted/20">
            <div>
              <CardTitle className="text-lg font-serif">Umami Live Traffic</CardTitle>
              <CardDescription>
                Live stats for {(siteConfig as any).name}
              </CardDescription>
            </div>
            <Button asChild size="sm" variant="outline">
              <a href={shareUrl} target="_blank" rel="noopener noreferrer" className="gap-2">
                Open in Full Window <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </CardHeader>
          <CardContent className="p-0 h-[calc(100%-75px)] w-full">
            <iframe
              src={shareUrl.includes("?") ? `${shareUrl}&embed=true` : `${shareUrl}?embed=true`}
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              title="Umami Analytics Dashboard"
            ></iframe>
          </CardContent>
        </Card>
      ) : (
        <div className="max-w-3xl mx-auto space-y-8 py-4">
          <Card className="border-border">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl font-serif">Setup Umami Analytics Dashboard</CardTitle>
              <CardDescription>
                Follow this simple step-by-step wizard to integrate Umami's real-time traffic statistics right inside your admin panel.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs">1</span>
                  Create a Free Umami Cloud Account
                </h3>
                <p className="text-muted-foreground text-sm pl-8">
                  Sign up for a free account on <a href="https://umami.is" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium inline-flex items-center gap-1">Umami Cloud <ExternalLink className="h-3 w-3" /></a>. Umami is a GDPR-compliant, privacy-focused open-source analytics platform.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs">2</span>
                  Add Your Website & Get Website ID
                </h3>
                <p className="text-muted-foreground text-sm pl-8">
                  Add your website domain (e.g., <code className="bg-muted px-1.5 py-0.5 rounded text-xs">arzhomeremodeling.com</code>) inside your Umami dashboard. Copy your <strong>Website ID</strong> (looks like <code className="bg-muted px-1.5 py-0.5 rounded text-xs">a1b2c3d4-e5f6...</code>).
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs">3</span>
                  Configure Public Share URL
                </h3>
                <p className="text-muted-foreground text-sm pl-8">
                  Go to your website's settings inside Umami, enable **Share URL**, and copy the generated public share URL (looks like <code className="bg-muted px-1.5 py-0.5 rounded text-xs">https://cloud.umami.is/share/...</code>).
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs">4</span>
                  Add Configuration to the Code
                </h3>
                <p className="text-muted-foreground text-sm pl-8">
                  Open <code className="bg-muted px-1.5 py-0.5 rounded text-xs">lib/site-config.ts</code> and update the values for <code className="bg-muted px-1.5 py-0.5 rounded text-xs">umamiWebsiteId</code> and <code className="bg-muted px-1.5 py-0.5 rounded text-xs">umamiShareUrl</code>:
                </p>
                <div className="pl-8">
                  <pre className="bg-muted p-4 rounded-lg text-xs overflow-x-auto text-foreground font-mono">
{`export const siteConfig = {
  // ... other configs
  umamiWebsiteId: "${websiteId || "YOUR_WEBSITE_ID"}",
  umamiShareUrl: "https://cloud.umami.is/share/..." 
};`}
                  </pre>
                </div>
              </div>

              <div className="border-t border-border pt-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="text-xs text-muted-foreground">
                  Need help? Contact your administrator to complete the deployment.
                </div>
                <Button asChild size="sm" variant="outline">
                  <Link href="/admin/settings" className="gap-2">
                    <SettingsIcon className="h-4 w-4" /> Go to settings
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </AdminShell>
  )
}
