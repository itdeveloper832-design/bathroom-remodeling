"use client"

import { useState, useEffect, useCallback } from "react"
import { AdminShell } from "@/components/admin/admin-shell"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
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
import { MoreHorizontal, Mail, Phone, Calendar, Trash2, Check, Clock, X, Download, RefreshCw } from "lucide-react"
import { db } from "@/lib/firebase"
import { collection, getDocs, query, orderBy } from "firebase/firestore"

const statusColors: Record<string, string> = {
  new: "bg-blue-100 text-blue-800",
  contacted: "bg-amber-100 text-amber-800",
  converted: "bg-green-100 text-green-800",
  closed: "bg-gray-100 text-gray-800",
}

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<string>("all")

  const fetchLeads = useCallback(async () => {
    setLoading(true)
    try {
      const q = query(collection(db, "leads"), orderBy("createdAt", "desc"))
      const snapshot = await getDocs(q)
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Lead[]
      setLeads(data)
    } catch (error) {
      console.error("Error fetching leads:", error)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchLeads()
  }, [fetchLeads])

  async function handleStatusChange(id: string, status: Lead["status"]) {
    await updateLeadStatus(id, status)
    await fetchLeads()
  }

  async function handleDelete(id: string) {
    if (confirm("Are you sure you want to delete this lead?")) {
      await deleteLead(id)
      await fetchLeads()
    }
  }

  function exportToCSV() {
    const headers = ["Type", "Name", "Email", "Phone", "ZIP", "Service", "Message", "Status", "Date"]
    const rows = leads.map((lead) => [
      lead.type || "contact",
      lead.name,
      lead.email,
      lead.phone || "",
      lead.zip || "",
      lead.service || "",
      (lead.message || "").replace(/,/g, ";"),
      lead.status,
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

  const filteredLeads = filter === "all" ? leads : leads.filter((l) => l.status === filter)

  return (
    <AdminShell
      title="Leads"
      description="Manage contact form submissions and inquiries"
      actions={
        <div className="flex gap-2">
          <Button onClick={fetchLeads} variant="outline" size="sm">
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh
          </Button>
          <Button onClick={exportToCSV} variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export CSV
          </Button>
        </div>
      }
    >
      {/* Filter Tabs */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {["all", "new", "contacted", "converted", "closed"].map((status) => (
          <Button
            key={status}
            variant={filter === status ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(status)}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
            {status !== "all" && (
              <span className="ml-2 text-xs">
                ({leads.filter((l) => l.status === status).length})
              </span>
            )}
          </Button>
        ))}
      </div>

      <Card>
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
                  <TableHead>ZIP</TableHead>
                  <TableHead>Service</TableHead>
                  <TableHead>Message</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="w-12"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredLeads.map((lead) => (
                  <TableRow key={lead.id}>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={
                          lead.type === "quote"
                            ? "bg-purple-50 text-purple-700 border-purple-200"
                            : "bg-blue-50 text-blue-700 border-blue-200"
                        }
                      >
                        {lead.type === "quote" ? "Quote" : "Contact"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium text-foreground">{lead.name}</p>
                        <div className="flex flex-col gap-1 text-xs text-muted-foreground mt-1">
                          <a
                            href={`mailto:${lead.email}`}
                            className="flex items-center gap-1 hover:text-primary"
                          >
                            <Mail className="h-3 w-3" />
                            {lead.email}
                          </a>
                          {lead.phone && (
                            <a
                              href={`tel:${lead.phone}`}
                              className="flex items-center gap-1 hover:text-primary"
                            >
                              <Phone className="h-3 w-3" />
                              {lead.phone}
                            </a>
                          )}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm font-mono">{lead.zip || "-"}</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">{lead.service || "-"}</span>
                    </TableCell>
                    <TableCell>
                      <p className="text-sm text-muted-foreground line-clamp-2 max-w-xs">
                        {lead.message || "-"}
                      </p>
                    </TableCell>
                    <TableCell>
                      <Badge className={statusColors[lead.status]} variant="secondary">
                        {lead.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {new Date(lead.createdAt).toLocaleDateString()}
                      </div>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => handleStatusChange(lead.id, "new")}>
                            <Clock className="mr-2 h-4 w-4" /> Mark as New
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleStatusChange(lead.id, "contacted")}>
                            <Phone className="mr-2 h-4 w-4" /> Mark as Contacted
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleStatusChange(lead.id, "converted")}>
                            <Check className="mr-2 h-4 w-4" /> Mark as Converted
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleStatusChange(lead.id, "closed")}>
                            <X className="mr-2 h-4 w-4" /> Mark as Closed
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => handleDelete(lead.id)}
                            className="text-destructive"
                          >
                            <Trash2 className="mr-2 h-4 w-4" /> Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </AdminShell>
  )
}
