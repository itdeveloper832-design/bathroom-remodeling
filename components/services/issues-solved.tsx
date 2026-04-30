import { AlertCircle, CheckCircle2 } from "lucide-react";

interface Issue {
  problem: string;
  solution: string;
}

interface IssuesSolvedProps {
  title: string;
  subtitle: string;
  description: string;
  issues: Issue[];
}

export default function IssuesSolved({ title, subtitle, description, issues }: IssuesSolvedProps) {
  return (
    <section className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            {subtitle}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-6 text-foreground text-balance">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {description}
          </p>
        </div>

        {/* Issues Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {issues.map((issue, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl overflow-hidden animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
            >
              {/* Problem */}
              <div className="p-6 border-b border-border bg-destructive/5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
                    <AlertCircle className="w-5 h-5 text-destructive" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-destructive uppercase tracking-wider">
                      Problem
                    </span>
                    <p className="text-foreground font-medium mt-1">{issue.problem}</p>
                  </div>
                </div>
              </div>

              {/* Solution */}
              <div className="p-6 bg-primary/5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">
                      Our Solution
                    </span>
                    <p className="text-foreground mt-1">{issue.solution}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
