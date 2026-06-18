"use client"

import { useState, useEffect } from "react"
import { AdminShell } from "@/components/admin/admin-shell"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { updateLeadStatus, deleteLead } from "@/lib/actions/leads"
import type { Lead } from "@/lib/types"
import { MoreHorizontal, Mail, Phone, Calendar, Trash2, Check, Clock, X, Download, RefreshCw, Copy, ArrowUpRight } from "lucide-react"
import { db, firebaseProjectId } from "@/lib/firebase"
import { collection, onSnapshot, orderBy, query } from "firebase/firestore"
import { toast } from "sonner"

const statusColors: Record<string, string> = {
  new: "bg-blue-100 text-blue-800",
  contacted: "bg-amber-100 text-amber-800",
  converted: "bg-green-100 text-green-800",
  closed: "bg-gray-100 text-gray-800",
}

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)
  const [fetchError, setFetchError] = useState<string | null>(null)
  const [filter, setFilter] = useState<string>("all")
  const [activeTab, setActiveTab] = useState<string>("quote")
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null)
  const [isCopied, setIsCopied] = useState(false)
  const [replyText, setReplyText] = useState("")

  function handleCopyDetails(lead: Lead) {
    const text = `
LEAD PROFILE:
Name: ${lead.name}
Email: ${lead.email || "N/A"}
Phone: ${lead.phone || "N/A"}
ZIP Code: ${lead.zip || "N/A"}
Requested Service: ${lead.service || "N/A"}
Type: ${lead.type || "contact"}
Status: ${lead.status}
Source URL: ${lead.sourceUrl || "N/A"}
Date Received: ${lead.createdAt ? new Date(lead.createdAt).toLocaleString() : "N/A"}

MESSAGE:
${lead.message || "No message provided."}
    `.trim()

    navigator.clipboard.writeText(text)
    setIsCopied(true)
    toast.success("Lead details copied to clipboard!")
    setTimeout(() => setIsCopied(false), 2000)
  }

  useEffect(() => {
    setLoading(true)
    const q = query(collection(db, "leads"), orderBy("createdAt", "desc"))

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const data = snapshot.docs.map((docSnap) => ({
          id: docSnap.id,
          ...docSnap.data(),
        })) as Lead[]
        setLeads(data)
        setFetchError(null)
        setLoading(false)
      },
      (error) => {
        console.error("[AdminLeads] Realtime fetch failed:", error)
        setFetchError(error.message)
        setLoading(false)
        toast.error(`Could not load leads: ${error.message}`)
      }
    )

    return () => unsubscribe()
  }, [])

  async function handleStatusChange(id: string, status: Lead["status"]) {
    const result = await updateLeadStatus(id, status)
    if (!result.success) {
      toast.error(result.error || "Failed to update status")
      return
    }
    toast.success(`Lead marked as ${status}`)
  }

  async function handleDelete(id: string) {
    if (!confirm("Are you sure you want to delete this lead?")) return
    const result = await deleteLead(id)
    if (!result.success) {
      toast.error(result.error || "Failed to delete lead")
      return
    }
    toast.success("Lead deleted")
  }

  function exportToCSV() {
    const headers = ["Type", "Name", "Email", "Phone", "ZIP", "Service", "Message", "Status", "Source", "Date"]
    const rows = leads.map((lead) => [
      lead.type || "contact",
      lead.name,
      lead.email,
      lead.phone || "",
      lead.zip || "",
      lead.service || "",
      (lead.message || "").replace(/,/g, ";"),
      lead.status,
      lead.sourceUrl || "",
      new Date(lead.createdAt).toLocaleDateString(),
    ])
    const csv = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n")
    const blob = new Blob([csv], { type: "text/csv" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `leads-${new Date().toISOString().split("T")[0]}.csv`
    a.click()
  }

  const currentTabLeads = leads.filter((l) => {
    const leadType = l.type || "contact"
    return leadType === activeTab
  })

  const filteredLeads = currentTabLeads.filter((l) => {
    if (filter === "all") return true
    return l.status === filter
  })

  return (
    <AdminShell
      title="Leads"
      description={`Live submissions from Firestore (${firebaseProjectId})`}
      actions={
        <div className="flex gap-2">
          <Button onClick={exportToCSV} variant="outline" size="sm" className="cursor-pointer">
            <Download className="mr-2 h-4 w-4" />
            Export CSV
          </Button>
        </div>
      }
    >
      {fetchError && (
        <div className="mb-6 rounded-lg border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive">
          <p className="font-semibold">Firestore error</p>
          <p>{fetchError}</p>
          <p className="mt-2 text-muted-foreground">
            Deploy <code className="text-xs">firestore.rules</code> to project{" "}
            <strong>{firebaseProjectId}</strong> and ensure your admin user exists in Firebase Auth.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card className="bg-gradient-to-br from-blue-50 to-white border-blue-100 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-600 mb-1">Total Leads</p>
                <h3 className="text-3xl font-bold text-slate-900">{leads.length}</h3>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-amber-50 to-white border-amber-100 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-amber-600 mb-1">New & Uncontacted</p>
                <h3 className="text-3xl font-bold text-slate-900">
                  {leads.filter((l) => l.status === "new").length}
                </h3>
              </div>
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-amber-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-white border-green-100 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-600 mb-1">Converted</p>
                <h3 className="text-3xl font-bold text-slate-900">
                  {leads.filter((l) => l.status === "converted").length}
                </h3>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Check className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-white border-purple-100 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-600 mb-1">Quote Requests</p>
                <h3 className="text-3xl font-bold text-slate-900">
                  {leads.filter((l) => l.type === "quote").length}
                </h3>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Form Tabs */}
      <Tabs 
        value={activeTab} 
        onValueChange={(val) => { 
          setActiveTab(val)
          setFilter("all") // Reset status filter on tab change
          setSelectedLead(null) // Close selected lead
        }} 
        className="w-full mb-6"
      >
        <TabsList className="bg-slate-100 p-1 rounded-xl w-full max-w-xl grid grid-cols-3 h-11 border border-slate-200/50">
          <TabsTrigger 
            value="quote" 
            className="flex items-center justify-center gap-2 rounded-lg py-2 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all cursor-pointer"
          >
            <span className="font-semibold text-xs sm:text-sm">Quote Requests</span>
            <Badge variant="secondary" className="bg-slate-200/70 hover:bg-slate-200/70 text-slate-700 font-bold px-1.5 py-0 text-[10px] sm:text-xs">
              {leads.filter((l) => (l.type || "contact") === "quote").length}
            </Badge>
          </TabsTrigger>
          <TabsTrigger 
            value="contact" 
            className="flex items-center justify-center gap-2 rounded-lg py-2 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all cursor-pointer"
          >
            <span className="font-semibold text-xs sm:text-sm">Contact Forms</span>
            <Badge variant="secondary" className="bg-slate-200/70 hover:bg-slate-200/70 text-slate-700 font-bold px-1.5 py-0 text-[10px] sm:text-xs">
              {leads.filter((l) => (l.type || "contact") === "contact").length}
            </Badge>
          </TabsTrigger>
          <TabsTrigger 
            value="newsletter" 
            className="flex items-center justify-center gap-2 rounded-lg py-2 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all cursor-pointer"
          >
            <span className="font-semibold text-xs sm:text-sm">Other / Newsletters</span>
            <Badge variant="secondary" className="bg-slate-200/70 hover:bg-slate-200/70 text-slate-700 font-bold px-1.5 py-0 text-[10px] sm:text-xs">
              {leads.filter((l) => (l.type || "contact") === "newsletter").length}
            </Badge>
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="flex gap-2 mb-6 flex-wrap items-center">
        {["all", "new", "contacted", "converted", "closed"].map((status) => (
          <Button
            key={status}
            variant={filter === status ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(status)}
            className="cursor-pointer"
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
            {status !== "all" && (
              <span className="ml-2 text-xs">
                ({currentTabLeads.filter((l) => l.status === status).length})
              </span>
            )}
          </Button>
        ))}
        <span className="text-xs text-muted-foreground flex items-center gap-1 ml-auto">
          <RefreshCw className="h-3 w-3" />
          Live updates enabled
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className={selectedLead ? "lg:col-span-7 xl:col-span-8 space-y-4" : "lg:col-span-12 space-y-4"}>
          <Card className="overflow-x-auto shadow-sm">
            <CardContent className="p-0">
              {loading ? (
                <div className="p-8 text-center text-muted-foreground">Loading leads...</div>
              ) : filteredLeads.length === 0 ? (
                <div className="p-8 text-center text-muted-foreground">No leads found</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Type</TableHead>
                      <TableHead>Contact</TableHead>
                      {!selectedLead && <TableHead>ZIP</TableHead>}
                      <TableHead>Service</TableHead>
                      {!selectedLead && <TableHead>Message</TableHead>}
                      {!selectedLead && <TableHead>Source</TableHead>}
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="w-12"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredLeads.map((lead) => {
                      const isSelected = selectedLead?.id === lead.id
                      return (
                        <TableRow
                          key={lead.id}
                          className={`cursor-pointer transition-colors ${
                            isSelected
                              ? "bg-amber-50/60 hover:bg-amber-50/70 border-l-2 border-l-amber-500 font-medium"
                              : "hover:bg-slate-50/80"
                          }`}
                          onClick={() => setSelectedLead(lead)}
                        >
                          <TableCell onClick={(e) => e.stopPropagation()}>
                            <Badge
                              variant="outline"
                              className={
                                lead.type === "quote"
                                  ? "bg-purple-50 text-purple-700 border-purple-200"
                                  : lead.type === "newsletter"
                                    ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                                    : "bg-blue-50 text-blue-700 border-blue-200"
                              }
                            >
                              {lead.type === "quote" ? "Quote" : lead.type === "newsletter" ? "Newsletter" : "Contact"}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div>
                              <p className="font-medium text-foreground">{lead.name}</p>
                              <div className="flex flex-col gap-1 text-xs text-muted-foreground mt-1">
                                {lead.email && (
                                  <a
                                    href={`mailto:${lead.email}`}
                                    className="flex items-center gap-1 hover:text-primary"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    <Mail className="h-3 w-3" />
                                    {lead.email}
                                  </a>
                                )}
                                {lead.phone && (
                                  <a
                                    href={`tel:${lead.phone.replace(/\D/g, "")}`}
                                    className="flex items-center gap-1 hover:text-primary"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    <Phone className="h-3 w-3" />
                                    {lead.phone}
                                  </a>
                                )}
                              </div>
                            </div>
                          </TableCell>
                          {!selectedLead && (
                            <TableCell>
                              <span className="text-sm font-mono">{lead.zip || "-"}</span>
                            </TableCell>
                          )}
                          <TableCell>
                            <span className="text-sm line-clamp-1 max-w-[150px]">{lead.service || "-"}</span>
                          </TableCell>
                          {!selectedLead && (
                            <TableCell>
                              <p className="text-sm text-muted-foreground line-clamp-2 max-w-xs">
                                {lead.message || "-"}
                              </p>
                            </TableCell>
                          )}
                          {!selectedLead && (
                            <TableCell>
                              {lead.sourceUrl ? (
                                <a
                                  href={lead.sourceUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-xs text-primary hover:underline line-clamp-2 max-w-[120px] block"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  {(() => {
                                    try {
                                      return new URL(lead.sourceUrl!).pathname
                                    } catch {
                                      return lead.sourceUrl
                                    }
                                  })()}
                                </a>
                              ) : (
                                <span className="text-xs text-muted-foreground">-</span>
                              )}
                            </TableCell>
                          )}
                          <TableCell onClick={(e) => e.stopPropagation()}>
                            <Badge className={statusColors[lead.status]} variant="secondary">
                              {lead.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Calendar className="h-3 w-3" />
                              {lead.createdAt ? new Date(lead.createdAt).toLocaleDateString() : "-"}
                            </div>
                          </TableCell>
                          <TableCell onClick={(e) => e.stopPropagation()}>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-8 w-8 cursor-pointer">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => handleStatusChange(lead.id, "new")} className="cursor-pointer">
                                  <Clock className="mr-2 h-4 w-4" /> Mark as New
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => handleStatusChange(lead.id, "contacted")} className="cursor-pointer">
                                  <Phone className="mr-2 h-4 w-4" /> Mark as Contacted
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => handleStatusChange(lead.id, "converted")} className="cursor-pointer">
                                  <Check className="mr-2 h-4 w-4" /> Mark as Converted
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => handleStatusChange(lead.id, "closed")} className="cursor-pointer">
                                  <X className="mr-2 h-4 w-4" /> Mark as Closed
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                  onClick={() => {
                                    handleDelete(lead.id)
                                    if (selectedLead?.id === lead.id) {
                                      setSelectedLead(null)
                                    }
                                  }}
                                  className="text-destructive cursor-pointer"
                                >
                                  <Trash2 className="mr-2 h-4 w-4" /> Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      )
                    })}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </div>

        {selectedLead && (
          <div className="lg:col-span-5 xl:col-span-4 sticky top-6">
            <Card className="border border-slate-200/80 shadow-md bg-white overflow-hidden rounded-xl">
              {/* Toolbar */}
              <div className="bg-slate-50/80 px-4 py-3 border-b border-slate-200/60 flex items-center justify-between">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 px-2 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
                  onClick={() => setSelectedLead(null)}
                >
                  <X className="h-4 w-4 mr-1.5" />
                  Close
                </Button>

                <div className="flex items-center gap-1.5">
                  {selectedLead.email && (
                    <Button
                      asChild
                      variant="default"
                      size="sm"
                      className="h-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs flex items-center gap-1.5 shadow-sm cursor-pointer"
                    >
                      <a
                        href={`mailto:${selectedLead.email}?subject=${encodeURIComponent(
                          `Re: Inquiry from ${selectedLead.name} - Arz Home Remodeling`
                        )}`}
                      >
                        <Mail className="h-3.5 w-3.5" />
                        Reply
                      </a>
                    </Button>
                  )}

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="h-8 text-xs font-semibold cursor-pointer">
                        Status: <span className="capitalize ml-1 text-slate-700">{selectedLead.status}</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleStatusChange(selectedLead.id, "new")} className="cursor-pointer">
                        <Clock className="mr-2 h-3.5 w-3.5 text-blue-500" /> New
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleStatusChange(selectedLead.id, "contacted")} className="cursor-pointer">
                        <Phone className="mr-2 h-3.5 w-3.5 text-amber-500" /> Contacted
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleStatusChange(selectedLead.id, "converted")} className="cursor-pointer">
                        <Check className="mr-2 h-3.5 w-3.5 text-green-500" /> Converted
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleStatusChange(selectedLead.id, "closed")} className="cursor-pointer">
                        <X className="mr-2 h-3.5 w-3.5 text-gray-500" /> Closed
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 cursor-pointer"
                    onClick={() => handleCopyDetails(selectedLead)}
                    title="Copy details"
                  >
                    {isCopied ? (
                      <Check className="h-3.5 w-3.5 text-green-600" />
                    ) : (
                      <Copy className="h-3.5 w-3.5 text-slate-500" />
                    )}
                  </Button>

                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 text-destructive hover:bg-destructive/10 hover:text-destructive cursor-pointer"
                    onClick={() => {
                      handleDelete(selectedLead.id)
                      setSelectedLead(null)
                    }}
                    title="Delete lead"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>

              {/* Email Subject / Heading */}
              <div className="p-5 border-b border-slate-100 bg-white">
                <h2 className="text-lg font-bold text-slate-800 tracking-tight leading-snug">
                  {selectedLead.type === "quote"
                    ? "📋 Quote Request"
                    : selectedLead.type === "newsletter"
                      ? "📧 Newsletter Sub"
                      : "✉️ General Inquiry"}
                  {selectedLead.service ? `: ${selectedLead.service}` : ""}
                </h2>
                <div className="flex items-center gap-2 mt-2">
                  <Badge variant="secondary" className={statusColors[selectedLead.status]}>
                    {selectedLead.status}
                  </Badge>
                  <span className="text-xs text-slate-400">
                    {selectedLead.createdAt ? new Date(selectedLead.createdAt).toLocaleString() : ""}
                  </span>
                </div>
              </div>

              {/* Sender Details */}
              <div className="px-5 py-4 border-b border-slate-50 bg-slate-50/20 flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-amber-100 border border-amber-200 text-amber-800 flex items-center justify-center font-bold text-sm shrink-0">
                  {selectedLead.name
                    ? selectedLead.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()
                        .slice(0, 2)
                    : "U"}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between flex-wrap gap-x-2">
                    <span className="font-semibold text-slate-900 truncate text-sm">{selectedLead.name}</span>
                    <span className="text-[10px] font-mono text-slate-400">
                      to info@arzremodeling.com
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1 flex flex-wrap gap-x-3 gap-y-1">
                    {selectedLead.email && (
                      <a href={`mailto:${selectedLead.email}`} className="hover:text-primary flex items-center gap-1">
                        <Mail className="h-3.5 w-3.5" />
                        {selectedLead.email}
                      </a>
                    )}
                    {selectedLead.phone && (
                      <a href={`tel:${selectedLead.phone.replace(/\D/g, "")}`} className="hover:text-primary flex items-center gap-1">
                        <Phone className="h-3.5 w-3.5" />
                        {selectedLead.phone}
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Metadata and Message Body */}
              <div className="p-5 space-y-4">
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-slate-50/50 p-2.5 rounded-lg border border-slate-100">
                    <span className="text-slate-400 block mb-0.5 font-medium uppercase tracking-wider text-[9px]">
                      ZIP Code
                    </span>
                    <span className="font-mono text-slate-800 font-semibold">{selectedLead.zip || "-"}</span>
                  </div>
                  <div className="bg-slate-50/50 p-2.5 rounded-lg border border-slate-100">
                    <span className="text-slate-400 block mb-0.5 font-medium uppercase tracking-wider text-[9px]">
                      Form Source
                    </span>
                    <span className="text-slate-800 font-semibold truncate block">
                      {selectedLead.sourceUrl ? (
                        <a
                          href={selectedLead.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline inline-flex items-center gap-0.5"
                        >
                          {(() => {
                            try {
                              return new URL(selectedLead.sourceUrl!).pathname
                            } catch {
                              return selectedLead.sourceUrl
                            }
                          })()}
                          <ArrowUpRight className="h-3 w-3" />
                        </a>
                      ) : (
                        "Direct / Admin"
                      )}
                    </span>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">
                    Message / Inquiry Details
                  </span>
                  <div className="bg-slate-50/50 border border-slate-200/80 rounded-xl p-4 shadow-inner min-h-[120px] whitespace-pre-wrap text-slate-700 leading-relaxed font-sans text-sm">
                    {selectedLead.message ? (
                      selectedLead.message
                    ) : (
                      <p className="text-slate-400 italic">No message submitted with this lead.</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Email Quick Draft Composer */}
              {selectedLead.email && (
                <div className="px-5 py-4 border-t border-slate-100 bg-slate-50/30">
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                    Draft a Custom Reply
                  </span>
                  <div className="space-y-2">
                    <textarea
                      className="w-full text-xs border border-slate-200 rounded-lg p-2.5 bg-white shadow-inner focus:ring-1 focus:ring-blue-500 focus:outline-none min-h-[90px] text-slate-700 leading-relaxed resize-y font-sans"
                      placeholder={`Draft your custom email reply to ${selectedLead.name}...`}
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                    />
                    <div className="flex justify-end">
                      <Button
                        asChild
                        size="sm"
                        disabled={!replyText.trim()}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs h-8 flex items-center gap-1.5 cursor-pointer"
                      >
                        <a
                          href={`mailto:${selectedLead.email}?subject=${encodeURIComponent(
                            `Re: Inquiry from ${selectedLead.name} - Arz Home Remodeling`
                          )}&body=${encodeURIComponent(replyText)}`}
                          onClick={() => setReplyText("")}
                        >
                          <Mail className="h-3.5 w-3.5" />
                          Send Custom Reply
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {/* Quick Actions Templates */}
              <div className="px-5 pb-5 pt-1 border-t border-slate-100/50 bg-slate-50/10">
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                  Quick Email Replies
                </span>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={`mailto:${selectedLead.email}?subject=${encodeURIComponent(
                      "Arz Home Remodeling - Bathroom Remodeling Consultation"
                    )}&body=${encodeURIComponent(
                      `Hi ${selectedLead.name},\n\nThank you for reaching out to Arz Home Remodeling regarding your inquiry for ${selectedLead.service || "bathroom remodeling"} in ZIP code ${selectedLead.zip || ""}.\n\nI would love to schedule a quick call or a site visit to discuss your project details and provide a free estimate.\n\nAre you available sometime this week?\n\nBest regards,\nSales Team\nArz Home Remodeling\ninfo@arzremodeling.com`
                    )}`}
                    className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-700 shadow-sm hover:bg-slate-50 hover:text-slate-900 transition-colors cursor-pointer"
                  >
                    📅 Schedule Consult
                  </a>
                  <a
                    href={`mailto:${selectedLead.email}?subject=${encodeURIComponent(
                      "Regarding your bathroom remodeling inquiry"
                    )}&body=${encodeURIComponent(
                      `Hi ${selectedLead.name},\n\nThank you for contacting us! I received your inquiry about ${selectedLead.service || "bathroom remodeling"}.\n\nTo help us better understand your project and provide a more accurate initial estimate, would you mind sending a few pictures of your current bathroom area?\n\nLooking forward to hearing from you!\n\nBest regards,\nSales Team\nArz Home Remodeling\ninfo@arzremodeling.com`
                    )}`}
                    className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-700 shadow-sm hover:bg-slate-50 hover:text-slate-900 transition-colors cursor-pointer"
                  >
                    📸 Request Photos
                  </a>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </AdminShell>
  )
}
